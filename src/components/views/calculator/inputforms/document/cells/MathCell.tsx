import React, {useState} from "react";
import styled from "styled-components";
import Cell from "./Cell";
import InputText from "../../../../../common/InputText";
import {useDispatch} from "react-redux";
import {SelectCell, UpdateMathCell} from "../../../../../../store/session/types";
import useNumberFormat from "../../../../../../hooks/useNumberFormat";
import useSettings from "../../../../../../hooks/useSettings";
import useSession from "../../../../../../hooks/useSession";

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

    const submitChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(event.key);
        if (event.key === "Enter")
            dispatch({
                type: "UPDATE_MATH_CELL",
                payload: {
                    index,
                    input: inputValue,
                    significantDigits: settings.mathSettings.significantDigits,
                    language: numberFormat
                }
            } as UpdateMathCell);
    }

    const setSelection = () => {
        if (session.selectedCell !== index)
            dispatch({
                type: "SELECT_CELL",
                payload: index
            } as SelectCell);
    };

    return (
        <Container onClick={setSelection} selected={index === session.selectedCell}>
            {
                session.editCell && index == session.selectedCell ? (
                    <div>
                        <Input
                            value={inputValue}
                            onChange={event => setInputValue(event.target.value)}
                            onKeyPress={submitChange}
                        />
                        <Input value={output} readOnly={true}/>
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