import {DefaultTheme} from "styled-components";

const lightTheme: DefaultTheme = {
  app: {
    backgroundColor: "white",
    backgroundImage: "/background/light.png"
  },
  navbar: {
    backgroundColor: "#1D3971",
    color: "white"
  },
  navbarItem: {
    hoverBackgroundColor: "rgba(255, 255, 255, 0.2)"
  },
  card: {
    backgroundColor: "white",
    color: "black"
  },
  cardHeading: {
    backgroundColor: "rgba(0, 0, 0, 0.08)"
  },
  sidebar: {
    backgroundColor: "white",
    color: "black"
  },
  sidebarItem: {
    hoverBackgroundColor: "rgba(0, 0, 0, 0.2)"
  },
  inputText: {
    backgroundColor: "white",
    outline: "2px solid black",
    color: "black"
  }
};

export default lightTheme;