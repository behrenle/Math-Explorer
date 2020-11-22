import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import styled from "styled-components";
import {version} from "../../../package.json";
import Navbar from "./navbar/Navbar";
import Calculator from "../views/calculator/Calculator";
import Settings from "../views/settings/Settings";
import Manual from "../views/manual/Manual";
import About from "../views/about/About";

const views = [
    {name: "Calculator", path: "/", component: Calculator},
    {name: "Settings", path: "/settings", component: Settings},
    {name: "Manual", path: "/manual", component: Manual},
    {name: "About", path: "/about", component: About}
]

const navbarProps = {
    title: `Math Explorer ${version}`,
    items: views.map(view => {return {name: view.name, path: view.path}})
};

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url(${process.env.PUBLIC_URL + "/background.png"});
    display: grid;
    grid-template-rows: 80px auto;
`;

const Content = styled.div`
    z-index: 0;
`;

const App: React.FC = () => {
    return (
        <HashRouter>
            <Container>
                <Navbar {...navbarProps}/>
                <Content>
                    <Switch>
                        {views.map((view, i) => <Route exact path={view.path} component={view.component}/>)}
                    </Switch>
                </Content>
            </Container>
        </HashRouter>
    );
};

export default App;
