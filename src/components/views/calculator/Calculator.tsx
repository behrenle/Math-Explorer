import React from "react";
import styled from "styled-components";
import CalculatorSidebar from "./CalculatorSidebar";
import SimpleInputForm from "./SimpleInputForm";
import AdvancedInputForm from "./AdvancedInputForm";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {clearAll, clearInput, clearMemory, clearOutput} from "../../../hotkeys.json";
import {clearCurrentInput, clearMathHistory, clearMathUserScope} from "../../../store/session/actions";
import useHotkeyDispatch from "../../../hooks/useHotkeyDispatch";

const Container = styled.div`
    display: grid;
    grid-template-columns: 350px auto;
    height: 100%;
`;

const Calculator: React.FC = () => {
    const advancedInputMode = useSelector((state: RootState) => state.settings.interfaceSettings.advancedInputMode);
    useHotkeyDispatch(clearInput, clearCurrentInput());
    useHotkeyDispatch(clearOutput, clearMathHistory());
    useHotkeyDispatch(clearMemory, clearMathUserScope());
    useHotkeyDispatch(clearAll, [clearCurrentInput(), clearMathHistory(), clearMathUserScope()]);

    const selectedInputForm = advancedInputMode ? <AdvancedInputForm/> : <SimpleInputForm/>;

    return (
        <Container>
            <CalculatorSidebar/>
            {selectedInputForm}
        </Container>
    )
}

export default Calculator