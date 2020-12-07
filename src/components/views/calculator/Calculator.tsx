import React from "react";
import styled from "styled-components";
import CalculatorSidebar from "./CalculatorSidebar";
import SimpleInputForm from "./SimpleInputForm";
import AdvancedInputForm from "./AdvancedInputForm";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {clearAll, clearInput, clearMemory, clearOutput, copyInputAndOutput} from "../../../hotkeys.json";
import {clearCurrentInput, clearMathHistory, clearMathUserScope} from "../../../store/session/actions";
import useHotkeyDispatch, {hotkeyOptions} from "../../../hooks/useHotkeyDispatch";
import {useHotkeys} from "react-hotkeys-hook";
import {useTranslation} from "react-i18next";

const Container = styled.div`
    display: grid;
    grid-template-columns: 350px auto;
    height: 100%;
`;

const Calculator: React.FC = () => {
    const advancedInputMode = useSelector((state: RootState) => state.settings.interfaceSettings.advancedInputMode);
    const [t] = useTranslation();
    const [currentInput, currentOutput] = useSelector((state: RootState) => [state.session.currentInput, state.session.mathHistory[state.session.mathHistory.length - 1]?.output || ""]);
    useHotkeyDispatch(clearInput, clearCurrentInput());
    useHotkeyDispatch(clearOutput, clearMathHistory());
    useHotkeyDispatch(clearMemory, clearMathUserScope());
    useHotkeyDispatch(clearAll, [clearCurrentInput(), clearMathHistory(), clearMathUserScope()]);
    useHotkeys(copyInputAndOutput, () => {
        navigator.clipboard.writeText(`${t("common.input")}: ${currentInput}\n${t("common.output")}: ${currentOutput}`).catch(console.error);
    }, hotkeyOptions, [currentInput, currentOutput]);

    const selectedInputForm = advancedInputMode ? <AdvancedInputForm/> : <SimpleInputForm/>;

    return (
        <Container>
            <CalculatorSidebar/>
            {selectedInputForm}
        </Container>
    )
}

export default Calculator