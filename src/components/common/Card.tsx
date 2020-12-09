import styled from "styled-components";

const Card = styled.div`
    color: ${props => props.theme.card.color};    
    background-color: ${props => props.theme.card.backgroundColor};
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    
    & h1 {
        font-size: 36pt;
        background-color: rgba(0, 0, 0, 0.08);
        margin: 0;
        padding: 10px 20px;
    }
`;

export default Card;