import React, {useState} from "react";
import styled from "styled-components";
import {RootState} from "../../../store";
import {useDispatch, useSelector} from "react-redux";
import {evaluate} from "../../../store/session/actions";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const StyledInputField = styled.input`
    font-size: 36pt;
    padding: 10px;
    margin-bottom: 20px;
    outline: none;
    border: none;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    
    &:focus {
        outline: 3px solid black;
    }
`;

const SimpleInputform: React.FC = () => {
    const [input, setInput] = useState("");
    const mathLanguage = useSelector((state: RootState) => state.settings.mathSettings.numberFormat);
    const significantDigits = useSelector((state: RootState) => state.settings.mathSettings.significantDigits);
    const lastOutput: string = useSelector((state: RootState) => {
        if (state.session.mathHistory.length < 1) {
            return "";
        }
        return state.session.mathHistory[state.session.mathHistory.length - 1].output;
    });
    const dispatch = useDispatch();

    const evaluateInput = () => dispatch(evaluate(input, mathLanguage, significantDigits));

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const keypressInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter")
            evaluateInput();
    }

    return (
        <Container>
            <StyledInputField
                type="[object]"
                placeholder={"input"}
                value={input}
                onChange={changeInput}
                onKeyPress={keypressInput}
            />
            <StyledInputField readOnly={true} type="text" placeholder={"output"} value={lastOutput}/>
        </Container>
    )
}

export default SimpleInputform;