import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
    background: none;
    border: none;
    outline: none;
    font-size: 28pt;
    padding: 20px;
    text-align: left;
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        font-weight: 400;
    }
    
    &:focus {
        outline: 2px solid black;
    }
`

const CalculatorToolbar: React.FC = () => {
    return (
        <Container>
            <Button>Clear History</Button>
            <Button>Clear Input</Button>
            <Button>Clear Memory</Button>
            <Button>Clear All</Button>
            <Button style={{marginTop:"auto"}}>New Document</Button>
            <Button>Save Document</Button>
            <Button>Load Document</Button>
        </Container>
    )
}

export default CalculatorToolbar;