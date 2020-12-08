import {Theme} from "../hooks/useTheme";

const darkTheme: Theme = {
  app: {
    backgroundColor: "#171717",
    backgroundImage: ""
  },
  navbar: {
    backgroundColor: "#060606",
    color: "white"
  },
  navbarItem: {
    hoverBackgroundColor: "rgba(255, 255, 255, 0.2)"
  },
  card: {
    backgroundColor: "#2b2b2b",
    color: "#d6d6d6"
  },
  cardHeading: {
    backgroundColor: "rgba(0, 0, 0, 0.08)"
  },
  sidebar: {
    backgroundColor: "#2b2b2b",
    color: "white"
  },
  sidebarItem: {
    hoverBackgroundColor: "rgba(255, 255, 255, 0.2)"
  },
  inputText: {
    backgroundColor: "#2b2b2b",
    outline: "2px solid white",
    color: "white"
  }
};

export default darkTheme;