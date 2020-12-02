import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {RootState} from "../../../store";
import {useSelector} from "react-redux";
import InputText from "../../common/InputText";
import InputField from "./InputField";
import {useTranslation} from "react-i18next";
import {focusInput, focusOutput} from "../../../hotkeys.json";
import useHotkeyRef from "../../../hooks/useHotkeyRef";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const StyledOutputField = styled(InputText)`
    margin-top: 20px;
`;

const SimpleInputForm: React.FC = () => {
    const lastOutput: string = useSelector((state: RootState) => state.session.mathHistory.length < 1
        ? "" : state.session.mathHistory[state.session.mathHistory.length - 1].output
    );
    const outputRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (outputRef.current && lastOutput !== null && lastOutput !== "") {
            outputRef.current.focus();
            outputRef.current.select();
        }
    }, [lastOutput]);
    useEffect(() => {
        if (inputRef.current)
            inputRef.current.focus();
    }, []);
    const [t] = useTranslation();

    useHotkeyRef(focusInput, inputRef, (r) => r.current.focus());
    useHotkeyRef(focusOutput, outputRef, (r) => r.current.focus());

    const outputOnKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && inputRef.current)
            inputRef.current.focus();
    }

    return (
        <Container>
            <InputField ref={inputRef}/>
            <StyledOutputField
                readOnly={true}
                placeholder={t("common.output")}
                value={lastOutput}
                ref={outputRef}
                onKeyPress={outputOnKeyPress}
            />
        </Container>
    )
}

export default SimpleInputForm;