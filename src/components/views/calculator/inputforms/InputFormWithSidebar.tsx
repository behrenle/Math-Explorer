import React from "react";
import styled from "styled-components";
import CalculatorSidebar from "../common/CalculatorSidebar";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
`;

const InputFormWithSidebar: React.FC = ({ children }) => {
  return (
    <Container>
      <CalculatorSidebar />
      {children}
    </Container>
  );
};

export default InputFormWithSidebar;
