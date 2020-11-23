import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom"

const StyledLink = styled(Link)`
    padding: 0 20px;
    color: white;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    ${
        (props: {active: boolean}) => props.active 
            ? `border-bottom: 4px solid white; padding-top: 4px;` : null
    }
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    
    &:focus {
        outline: 2px solid white;
    }
`;

interface Props {
    name: string,
    path: string
}

const NavbarItem: React.FC<Props> = ({name, path}) => {
    const location = useLocation();
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(location.pathname === path)
    }, [location]);

    return (
        <StyledLink to={path} active={active}>{name}</StyledLink>
    )
}

export default NavbarItem