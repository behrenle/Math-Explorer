import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom"

const StyledLink = styled(Link)`
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    ${
        (props: {active: boolean}) => props.active 
            ? "border-bottom: 3px solid white;" : null
    }
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
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