import React from 'react';
import {Route, Switch} from "react-router-dom";
import "../../i18n/index";
import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import Calculator from "../views/calculator/Calculator";
import Settings from "../views/settings/Settings";
import Manual from "../views/manual/Manual";
import About from "../views/about/About";
import useTheme, {Theme} from "../../hooks/useTheme";

const views = [
    {name: "navbar.calculator", path: "/", component: Calculator},
    {name: "navbar.settings", path: "/settings", component: Settings},
    {name: "navbar.manual", path: "/manual", component: Manual},
    {name: "navbar.about", path: "/about", component: About}
]

const navbarProps = {
    title: `Math Explorer`,
    items: views.map(view => {
        return {name: view.name, path: view.path}
    })
};

const Container = styled.div<Theme>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${props => props?.app?.backgroundColor};
  background-size: cover;
  background-repeat: repeat;
  ${
          props => props.app.backgroundImage.length > 0
                  ? `background-image: url(${process.env.PUBLIC_URL + props.app.backgroundImage});` : null
  }
  display: grid;
  grid-template-rows: 80px auto;
`;

const Content = styled.main`
  z-index: 0;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;

const App: React.FC = () => {
    const theme = useTheme();

    return (
        <Container {...theme}>
            <Navbar {...navbarProps}/>
            <Content>
                <Switch>
                    {views.map((view, i) => <Route key={i} exact path={view.path} component={view.component}/>)}
                </Switch>
            </Content>
        </Container>
    );
};

export default App;
