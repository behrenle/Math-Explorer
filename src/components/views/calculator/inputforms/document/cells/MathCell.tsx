import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Cell from "./Cell";
import InputText from "../../../../../common/InputText";
import {useDispatch} from "react-redux";
import useNumberFormat from "../../../../../../hooks/useNumberFormat";
import useSettings from "../../../../../../hooks/useSettings";
import useSession from "../../../../../../hooks/useSession";
import {selectCell, setEditCell, updateMathCell} from "../../../../../../store/session/actions";

const Container = styled(Cell)`
  display: grid;
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

interface MathCellProps {
    input: string,
    output: string,
    index: number
}

const MathCell: React.FC<MathCellProps> = ({input, output, index}) => {
    const settings = useSettings();
    const session = useSession();
    const dispatch = useDispatch();
    const numberFormat = useNumberFormat();
    const [inputValue, setInputValue] = useState(input);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current)
            inputRef.current.focus();
    }, []);

    const submitChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            dispatch(updateMathCell(inputValue, index, numberFormat, settings.mathSettings.significantDigits));
            dispatch(setEditCell(false));
        }
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Escape") {
            dispatch(setEditCell(false));
        }
    }

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

    return (
        <Container
            onClick={setSelection}
            selected={index === session.selectedCell}
            onDoubleClick={enterEditMode}
        >
            {
                session.editCell && index == session.selectedCell ? (
                    <div>
                        <Input
                            ref={inputRef}
                            value={inputValue}
                            onChange={event => setInputValue(event.target.value)}
                            onKeyPress={submitChange}
                            onKeyDown={onKeyDown}
                        />
                    </div>
                ) : (
                    <dl>
                        <dt>{input}</dt>
                        <dd>{output}</dd>
                    </dl>
                )
            }
        </Container>
    );
};

export default MathCell;