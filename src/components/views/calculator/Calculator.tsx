import React from "react";
import styled from "styled-components";
import CalculatorSidebar from "./CalculatorSidebar";
import SimpleInputForm from "./SimpleInputForm";
import AdvancedInputForm from "./AdvancedInputForm";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";

const Container = styled.div`
    display: grid;
    grid-template-columns: 350px auto;
    height: 100%;
`;

const Calculator: React.FC = () => {
    const advancedInputMode = useSelector((state: RootState) => state.settings.interfaceSettings.advancedInputMode);
    const selectedInputForm = advancedInputMode == false ? <SimpleInputForm/> : <AdvancedInputForm/>
    /*console.log("advancedInputMode", advancedInputMode)
    if (advancedInputMode === true) {
        console.log("advanced")
        selectedInputForm = <AdvancedInputForm/>
    } else {
        console.log("simple")
        selectedInphide version number in navbarutForm = <SimpleInputForm/>
    }*/

    return (
        <Container>
            <CalculatorSidebar/>
            {selectedInputForm}
        </Container>
    )
}

export default Calculator