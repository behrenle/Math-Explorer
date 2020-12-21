import React from "react";
import styled from "styled-components";
import CalculatorSidebar from "./common/CalculatorSidebar";
import SimpleInputForm from "./inputforms/SimpleInputForm";
import AdvancedInputForm from "./inputforms/AdvancedInputForm";
import DocumentInputForm from "./inputforms/document/DocumentInputForm";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {clearAll, clearInput, clearMemory, clearOutput, copyInputAndOutput} from "../../../hotkeys.json";
import {clearCurrentInput, clearMathHistory, clearMathUserScope} from "../../../store/session/actions";
import useHotkeyDispatch, {hotkeyOptions} from "../../../hooks/useHotkeyDispatch";
import {useHotkeys} from "react-hotkeys-hook";
import {useTranslation} from "react-i18next";
import {InputForm} from "../../../store/settings/types";

const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100%;
`;

const getOutput = (state: RootState) => {
    const lastCell = state.session.document.cells.slice(-1)[0];
    if (lastCell) {
        return lastCell.type === "MATH" ? lastCell.output : lastCell.content;
    }
    return "";
}

const selectInputForm = (inputForm: InputForm) => {
    switch (inputForm) {
        case "advanced": return <AdvancedInputForm/>;
        case "simple": return <SimpleInputForm/>;
        case "document": return <DocumentInputForm/>;
    }
}

const Calculator: React.FC = () => {
    const inputForm = useSelector((state: RootState) => state.settings.interfaceSettings.inputForm);
    const [t] = useTranslation();
    const [currentInput, currentOutput] = useSelector((state: RootState) => [state.session.currentInput, getOutput(state)]);
    useHotkeyDispatch(clearInput, clearCurrentInput());
    useHotkeyDispatch(clearOutput, clearMathHistory());
    useHotkeyDispatch(clearMemory, clearMathUserScope());
    useHotkeyDispatch(clearAll, [clearCurrentInput(), clearMathHistory(), clearMathUserScope()]);
    useHotkeys(copyInputAndOutput, () => {
        navigator.clipboard.writeText(`${t("common.input")}: ${currentInput}\n${t("common.output")}: ${currentOutput}`).catch(console.error);
    }, hotkeyOptions, [currentInput, currentOutput]);

    return (
        <Container>
            <CalculatorSidebar/>
            {selectInputForm(inputForm)}
        </Container>
    )
}

export default Calculator