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

const Nav = styled.nav`
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

const UL = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    height: 100%;
    margin: 0;
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
            <Title aria-label="Title">{title}</Title>
            <Nav aria-label="Main Menu">
                <UL>
                    {
                        items.map((item, index) => (
                            <li>
                                <NavbarItem key={index} name={item.name} path={item.path}/>
                            </li>
                        ))
                    }
                </UL>
            </Nav>
        </Container>
    );
}

export default Navbar;