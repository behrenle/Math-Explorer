import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Cell from "./Cell";
import InputText from "../../../../../common/InputText";
import {useDispatch} from "react-redux";
import useNumberFormat from "../../../../../../hooks/useNumberFormat";
import useSettings from "../../../../../../hooks/useSettings";
import useSession from "../../../../../../hooks/useSession";
import {selectCell, setEditCell, updateMathCell} from "../../../../../../store/session/actions";
import {useTranslation} from "react-i18next";

const Container = styled(Cell)<{ edit: boolean }>`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: ${props => !props.edit ? "auto 1fr" : "1fr"};
`;

const Input = styled(InputText)`
  background-color: inherit;
  padding: 0;
  box-shadow: none;
  margin: 0;

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  font-size: ${props => props.theme.fontSize.s};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MathCell: React.FC<MathCellProps> = ({input, output, index}) => {
    const settings = useSettings();
    const session = useSession();
    const dispatch = useDispatch();
    const numberFormat = useNumberFormat();
    const [inputValue, setInputValue] = useState(input);
    const [saved, setSaved] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLLIElement>(null);
    const [t] = useTranslation();

    useEffect(() => {
        if (session.selectedCell === index && containerRef.current) {
            console.log("focus math cell");
            containerRef.current.focus();
        }

    }, [session.selectedCell, index, containerRef, session.editCell])

    useEffect(() => {
        if (session.editCell && session.selectedCell === index)
            if (inputRef.current)
                inputRef.current.focus();
    }, [inputRef, session.editCell, session.selectedCell, index]);

    useEffect(() => {
        if(!saved && !session.editCell) {
            dispatch(updateMathCell(inputValue, index, numberFormat, settings.mathSettings.significantDigits));
            setSaved(true);
        }
    }, [saved, session.editCell, dispatch, index, inputValue, numberFormat, settings.mathSettings.significantDigits]);

    const setSelection = () => {
        if (session.selectedCell !== index) {
            dispatch(setEditCell(false));
            dispatch(selectCell(index));
        }
    };

    const enterEditMode = () => {
        dispatch(selectCell(index));
        dispatch(setEditCell(true));
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setSaved(false);
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Escape") {
            setInputValue(input);
            setSaved(true);
            dispatch(setEditCell(false));
        }
    };

    return (
        <Container
            tabIndex={-1}
            ref={containerRef}
            onClick={setSelection}
            onDoubleClick={enterEditMode}
            edit={session.editCell && index === session.selectedCell}
        >
            {
                session.editCell && index === session.selectedCell ? (
                    <div>
                        <Input
                            ref={inputRef}
                            value={inputValue}
                            onChange={onChange}
                            onKeyDown={onKeyDown}
                        />
                    </div>
                ) : (
                    <>
                        <Label>
                            {t("common.input")}
                        </Label>
                        <Value>{input}</Value>
                        <Label>
                            {t("common.output")}
                        </Label>
                        <Value>{output}</Value>
                    </>
                )
            }
        </Container>
    );
};

const Value = styled.span``;

interface MathCellProps {
    input: string,
    output: string,
    index: number
}

export default MathCell;