import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";
import {DefaultTheme} from "styled-components";
import useSettings from "./useSettings";

export type ThemeName = "light" | "dark";
export const themes = ["light", "dark"];

const fontSizes = {
    large: {
        l: "36pt",
        m: "28pt",
        s: "20pt"
    },
    medium: {
        l: "28pt",
        m: "22pt",
        s: "18pt"
    },
    small: {
        l: "22pt",
        m: "16pt",
        s: "12pt"
    }
};

const getFontSize = (size: string) => {
    switch (size) {
        case "large":
            return fontSizes.large;
        case "medium":
            return fontSizes.medium;
        case "small":
            return fontSizes.small;
        default:
            return fontSizes.large;
    }
}

const getTheme = (theme: string) => {
    switch (theme) {
        case "light":
            return lightTheme;
        case "dark":
            return darkTheme;
        default:
            return lightTheme;
    }
}

const getNavbarHeight = (size: string) => {
    switch (size) {
        case "medium":
            return "65px";
        case "small":
            return "50px";
        default:
            return "80px";
    }
}

const useTheme = (): DefaultTheme => {
    const interfaceSettings = useSettings().interfaceSettings;
    const theme = interfaceSettings.theme;
    const fontSize = interfaceSettings.fontSize;
    const showBackgroundImage = interfaceSettings.showBackgroundImage;

    return {
        ...getTheme(theme),
        fontSize: getFontSize(fontSize),
        navbarHeight: getNavbarHeight(fontSize),
        showBackgroundImage
    };
}

export default useTheme;