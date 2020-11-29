import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import initStore from "../../store/createStore";
import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import Calculator from "../views/calculator/Calculator";
import Settings from "../views/settings/Settings";
import Manual from "../views/manual/Manual";
import About from "../views/about/About";

const store = initStore();

const views = [
    {name: "Calculator", path: "/", component: Calculator},
    {name: "Settings", path: "/settings", component: Settings},
    {name: "Manual", path: "/manual", component: Manual},
    {name: "About", path: "/about", component: About}
]

const navbarProps = {
    title: `Math Explorer`,
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
    overflow-y: auto;
    width: 100%;
    height: 100%;
`;

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Container>
                    <Navbar {...navbarProps}/>
                    <Content>
                        <Switch>
                            {views.map((view, i) => <Route key={i} exact path={view.path} component={view.component}/>)}
                        </Switch>
                    </Content>
                </Container>
            </HashRouter>
        </Provider>
    );
};

export default App;
