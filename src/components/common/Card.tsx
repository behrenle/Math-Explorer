import styled from "styled-components";

const Card = styled.section`
    color: ${props => props.theme.card.color};    
    background-color: ${props => props.theme.card.backgroundColor};
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    font-size: ${props => props.theme.fontSize.m};

    & h1 {
        font-size: ${props => props.theme.fontSize.l};
        background-color: rgba(0, 0, 0, 0.08);
        margin: 0;
        padding: 10px 20px;
    }
  
  & a {
    color: inherit;
    font-weight: bolder;
  }
`;

export default Card;