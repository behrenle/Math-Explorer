import React, {useState} from "react";
import styled from "styled-components";
import {RootState} from "../../../store";
import {useDispatch, useSelector} from "react-redux";
import {evaluate} from "../../../store/session/actions";
import InputText from "../../common/InputText";
import InputField from "./InputField";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const StyledOutputField = styled(InputText)`
    margin-top: 20px;
`;

const SimpleInputform: React.FC = () => {
    const [input, setInput] = useState("");
    const interfaceLanguage = useSelector((state: RootState) => state.settings.interfaceSettings.language);
    const mathLanguage = useSelector((state: RootState) => state.settings.mathSettings.numberFormat);
    const significantDigits = useSelector((state: RootState) => state.settings.mathSettings.significantDigits);
    const lastOutput: string = useSelector((state: RootState) => {
        if (state.session.mathHistory.length < 1) {
            return "";
        }
        return state.session.mathHistory[state.session.mathHistory.length - 1].output;
    });
    const dispatch = useDispatch();

    const evaluateInput = () => dispatch(evaluate(
        input,
        mathLanguage === "inherit" ? interfaceLanguage : mathLanguage,
        significantDigits
    ));

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const keypressInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter")
            evaluateInput();
    }

    return (
        <Container>
            <InputField/>
            <StyledOutputField
                readOnly={true}
                placeholder={"output"}
                value={lastOutput}
            />
        </Container>
    )
}

export default SimpleInputform;