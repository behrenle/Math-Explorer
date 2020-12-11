import React, {useRef} from "react";
import styled from "styled-components";
import {RootState} from "../../../store";
import {useSelector} from "react-redux";
import InputText from "../../common/InputText";
import InputField from "./InputField";
import {useTranslation} from "react-i18next";
import {focusInput, focusOutput} from "../../../hotkeys.json";
import useHotkeyRef from "../../../hooks/useHotkeyRef";
import useRefEffect from "../../../hooks/useRefEffect";

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
    const [t] = useTranslation();
    useRefEffect(outputRef, r => {r.current.focus(); r.current.select()}, [lastOutput]);
    useRefEffect(inputRef, r => r.current.focus());
    useHotkeyRef(focusInput, inputRef, (r) => r.current.focus());
    useHotkeyRef(focusOutput, outputRef, (r) => r.current.focus());

    const outputOnKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && inputRef.current)
            inputRef.current.focus();
    }


    return (
        <Container>
            <InputField ref={inputRef} aria-label={t("common.input")} />
            <StyledOutputField
                aria-label={t("common.output")}
                type="text"
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