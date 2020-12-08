import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";
import {useSelector} from "react-redux";
import {RootState} from "../store";

export type ThemeName = "light" | "dark";
export const themes = ["light", "dark"];

export interface Theme {
    app: {
        backgroundColor: string,
        backgroundImage: string
    },
    navbar: {
        backgroundColor: string,
        color: string
    },
    navbarItem: {
        hoverBackgroundColor: string
    },
    card: {
        backgroundColor: string,
        color: string
    },
    cardHeading: {
        backgroundColor: string
    },
    sidebar: {
        backgroundColor: string,
        color: string
    },
    sidebarItem: {
        hoverBackgroundColor: string
    },
    inputText: {
        backgroundColor: string,
        outline: string,
        color: string
    }
}

const useTheme = (): Theme => {
    const theme = useSelector((state: RootState) => state.settings.interfaceSettings.theme);
    switch (theme) {
        case "light":
            return lightTheme;

        case "dark":
            return darkTheme;

        default:
            return lightTheme;
    }
}

export default useTheme;