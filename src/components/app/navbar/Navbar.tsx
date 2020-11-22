import React from "react";
import styled from "styled-components";
import NavbarItem from "./NavbarItem";

const Container = styled.div`
    display: flex;
    font-size: 36pt;
    background-color: #1D3971;
    color: white;
    height: 80px;
    align-items: center;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.img`
    width: 80px;
    height: 80px;
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
            {items.map(item => <NavbarItem name={item.name} path={item.path}/>)}
        </Container>
    );
}

export default Navbar;