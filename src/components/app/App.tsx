import React from "react";
import { Route, Switch } from "react-router-dom";
import "../../i18n/index";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./navbar/Navbar";
import useTheme from "../../hooks/useTheme";
import GlobalStyle from "./GlobalStyle";
import { routes, navbarProps } from "./appConfig";
import PrivacyPolicy from "../views/privacyPolicy/PrivacyPolicy";
import CookiePolicy from "../views/cookiePolicy/CookiePolicy";
import CookieBanner from "./cookieBanner/CookieBanner";
import TermsOfService from "../views/termsOfService/TermsOfService";
import DownloadDocument from "../views/loadDocument/DownloadDocument";
import UploadDocument from "../views/uploadDocument/UploadDocument";

const Content = styled.main`
  z-index: 0;
  overflow-y: auto;
`;

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <Navbar {...navbarProps} />
        <Content>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} exact path={route.path} render={route.render} />
            ))}
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/cookie-policy" component={CookiePolicy} />
            <Route exact path="/terms-of-service" component={TermsOfService} />
            <Route
              exact
              path="/download-document/:id"
              component={DownloadDocument}
            />
            <Route
              exact
              path="/upload-document/:id"
              component={UploadDocument}
            />
          </Switch>
        </Content>
        <CookieBanner />
      </>
    </ThemeProvider>
  );
};

export default App;
