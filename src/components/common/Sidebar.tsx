import React from "react";
import styled from "styled-components";

const Container = styled.aside`
    background-color: ${props => props.theme.sidebar.backgroundColor};
    color: ${props => props.theme.sidebar.color};
    box-shadow: 5px 0 5px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    
    & button {
        background: none;
        border: none;
        outline: none;
        font-size: ${props => props.theme.fontSize.m};
        padding: 0.5em 2em 0.5em 1em;
        text-align: left;
        color: inherit;
    }
    
    & button:hover {
        background-color: ${props => props.theme.sidebarItem.hoverBackgroundColor};
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