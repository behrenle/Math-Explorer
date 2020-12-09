import React from 'react';
import {Route, Switch} from "react-router-dom";
import "../../i18n/index";
import styled, {ThemeProvider} from "styled-components";
import Navbar from "./navbar/Navbar";
import Calculator from "../views/calculator/Calculator";
import Settings from "../views/settings/Settings";
import Manual from "../views/manual/Manual";
import About from "../views/about/About";
import useTheme from "../../hooks/useTheme";

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

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.app.backgroundColor};
  background-size: cover;
  background-repeat: repeat;
  ${
          props => props.theme.app.backgroundImage.length > 0
                  ? `background-image: url(${process.env.PUBLIC_URL + props.theme.app.backgroundImage});` : null
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
        <ThemeProvider theme={theme}>
            <Container>
                <Navbar {...navbarProps}/>
                <Content>
                    <Switch>
                        {views.map((view, i) => <Route key={i} exact path={view.path} component={view.component}/>)}
                    </Switch>
                </Content>
            </Container>
        </ThemeProvider>
    );
};

export default App;
