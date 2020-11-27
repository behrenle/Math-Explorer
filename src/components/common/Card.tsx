import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: white;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    
    & h1 {
        font-size: 36pt;
        background-color: rgba(0, 0, 0, 0.08);
        margin: 0;
        padding: 10px 20px;
    }
`;

interface Props {
    className?: string
}

const Card: React.FC<Props> = ({children, className}) => {
    return (
        <Container className={className}>
            {children}
        </Container>
    );
};

export default Card;