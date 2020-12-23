import useSettings from "./useSettings";

const useNumberFormat = () => {
    const settings = useSettings();
    return settings.mathSettings.numberFormat === "inherit"
        ? settings.interfaceSettings.language
        : settings.mathSettings.numberFormat;
}

export default useNumberFormat;