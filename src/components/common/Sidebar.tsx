import React from "react";
import styled from "styled-components";

const Container = styled.aside`
    background-color: white;
    box-shadow: 5px 0 5px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    
    & button {
        background: none;
        border: none;
        outline: none;
        font-size: 28pt;
        padding: 20px;
        text-align: left;
    }
    
    & button:hover {
        background-color: rgba(0, 0, 0, 0.2);
        font-weight: 400;
    }
    
    & button:disabled:hover {
        background: none;
        font-weight: 300;
    }
    
    & button:focus {
        border: 2px solid black;
        padding: 18px;
    }
`;

const Sidebar: React.FC<{}> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
};

export default Sidebar;