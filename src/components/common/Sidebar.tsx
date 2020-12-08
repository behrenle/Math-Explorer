import React from "react";
import styled from "styled-components";
import useTheme, {Theme} from "../../hooks/useTheme";

const Container = styled.aside<Theme>`
    background-color: ${props => props.sidebar.backgroundColor};
    color: ${props => props.sidebar.color};
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
        color: inherit;
    }
    
    & button:hover {
        background-color: ${props => props.sidebarItem.hoverBackgroundColor};
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
    const theme = useTheme();

    return (
        <Container {...theme}>
            {children}
        </Container>
    )
};

export default Sidebar;