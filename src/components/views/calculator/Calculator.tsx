import React from "react";
import styled from "styled-components";
import CalculatorToolbar from "./CalculatorToolbar";

const Container = styled.div`
    display: grid;
    grid-template-columns: 350px auto;
    height: 100%;
`;

const Calculator: React.FC = () => {
    return (
        <Container>
            <CalculatorToolbar />
        </Container>
    )
}

export default Calculator