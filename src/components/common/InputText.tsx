import styled from "styled-components";

const InputText = styled.input`
    width: 100%;
    padding: 20px;
    border: none;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.theme.inputText.backgroundColor};
    color: ${props => props.theme.inputText.color};
    
    &:focus {
        outline: ${props => props.theme.inputText.outline};
    }
`;

export default InputText;