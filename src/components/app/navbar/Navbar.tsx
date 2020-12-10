import React from "react";
import styled from "styled-components";
import NavbarItem from "./NavbarItem";

const Container = styled.header`
    display: flex;
    font-size: 36pt;
    background-color: ${props => props.theme.navbar.backgroundColor};
    color: white;
    height: 100%;
    align-items: center;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.20);
    z-index: 1;
`;

const NavContainer = styled.nav`
    display: flex;
    height: 100%;
`;

const Logo = styled.img`
    width: ${props => props.theme.navbarHeight};
    height: ${props => props.theme.navbarHeight};
    padding: 10px;
`;

const Title = styled.span`
    margin-right: auto;
    padding: 10px;
`;

interface PropsItem {
    name: string,
    path: string
}

interface Props {
    title: string,
    items: PropsItem[]
}

const Navbar: React.FC<Props> = ({title, items}) => {

    return (
        <Container>
            <Logo src={process.env.PUBLIC_URL + "/logo.png"} alt="logo"/>
            <Title>{title}</Title>
            <NavContainer>
                {items.map((item, index) => <NavbarItem key={index} name={item.name} path={item.path}/>)}
            </NavContainer>
        </Container>
    );
}

export default Navbar;