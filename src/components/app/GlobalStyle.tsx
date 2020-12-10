import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`        
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.app.backgroundColor};
    background-size: cover;
    background-repeat: repeat;
    ${
            props => props.theme.app.backgroundImage.length > 0
                    ? `background-image: url(${process.env.PUBLIC_URL + props.theme.app.backgroundImage});` : null
    }
  }
  
  #root {
    display: grid;
    grid-template-rows: ${props => props.theme.navbarHeight} 1fr;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  * {
    box-sizing: border-box;
    font-size: ${props => props.theme.fontSize.m};
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    outline: none;
  }
`;

export default GlobalStyle;