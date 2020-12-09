import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {DefaultTheme} from "styled-components";

export type ThemeName = "light" | "dark";
export const themes = ["light", "dark"];

const useTheme = (): DefaultTheme => {
    const theme = useSelector((state: RootState) => state?.settings?.interfaceSettings?.theme);
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