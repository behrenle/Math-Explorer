import styled from "styled-components";
import {Theme} from "../../hooks/useTheme";

const InputText = styled.input<Theme>`
    width: 100%;
    padding: 20px;
    border: none;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.inputText.backgroundColor};
    color: ${props => props.inputText.color};
    
    &:focus {
        outline: ${props => props.inputText.outline};
    }
`;

export default InputText;