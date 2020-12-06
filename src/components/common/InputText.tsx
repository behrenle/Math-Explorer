import styled from "styled-components";

const InputText = styled.input.attrs({type: "text"})`
    width: 100%;
    padding: 20px;
    border: none;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    
    &:focus {
        outline: 2px solid black;
    }
`;

export default InputText;