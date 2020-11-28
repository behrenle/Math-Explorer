import React from "react";
import styled from "styled-components";
import CalculatorSidebar from "./CalculatorSidebar";
import SimpleInputForm from "./SimpleInputForm";

const Container = styled.div`
    display: grid;
    grid-template-columns: 350px auto;
    height: 100%;
`;

const Calculator: React.FC = () => {
    return (
        <Container>
            <CalculatorSidebar />
            <SimpleInputForm />
        </Container>
    )
}

export default Calculator