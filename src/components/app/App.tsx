import React from 'react';
import {HashRouter, Switch} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import styled from "styled-components";
import {version} from "../../../package.json";

const NavbarProps = {
    title: `Math Explorer ${version}`,
    items: [
        {name: "Calculator", path: "/"},
        {name: "Settings", path: "/settings"},
        {name: "Manual", path: "/manual"},
        {name: "About", path: "/about"}
    ]
};

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url(${process.env.PUBLIC_URL + "/background.png"});
`;

const App: React.FC = () => {
    return (
        <HashRouter>
            <Container>
                <Navbar {...NavbarProps}/>
            </Container>
        </HashRouter>
    );
};

export default App;
