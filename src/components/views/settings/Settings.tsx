import React from "react";
import styled from "styled-components";
import Card from "../../common/Card";
import SettingsItem from "./SettingsItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {useTranslation} from "react-i18next";
import {themes} from "../../../hooks/useTheme";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 15%;
    overflow-y: auto;
`;

const SettingsCard = styled(Card)`
  margin-bottom: 20px;
`;


const Settings: React.FC = () => {
    const settings = useSelector((state: RootState) => state.settings);
    const dispatch = useDispatch();
    const [t] = useTranslation();

    const languageOptions = [{label: "EN", value: "en"}, {label: "DE", value: "de"}];
    const languageWithInheritOptions = [...languageOptions, {label: t("common.inherit"), value: "inherit"}];
    const enableOptions = [{label: t("common.enable"), value: true}, {label: t("common.disable"), value: false}];

    const updateSettings = (updatedSettings: {interfaceSettings?: {}, mathSettings?: {}}) => {
        dispatch({
            type: "SET_SETTINGS",
            payload: {
                interfaceSettings: {...settings.interfaceSettings, ...updatedSettings.interfaceSettings},
                mathSettings: {...settings.mathSettings, ...updatedSettings.mathSettings}
            }
        });
    };

    return (
        <Container>
            <SettingsCard>
                <h1>{t("settings.interface")}</h1>
                <SettingsItem
                    label="settings.language"
                    options={languageOptions}
                    value={settings.interfaceSettings.language}
                    setter={value => updateSettings({interfaceSettings: {language:  value}})}
                />
                <SettingsItem
                    label="settings.advanced_input_mode"
                    options={enableOptions}
                    value={settings.interfaceSettings.advancedInputMode}
                    setter={value => updateSettings({interfaceSettings: {advancedInputMode: value === "true"}})}
                />
                <SettingsItem
                    label="settings.show_cell_numbers"
                    options={enableOptions}
                    value={settings.interfaceSettings.showLineNumbers}
                    setter={value => updateSettings({interfaceSettings: {showLineNumbers: value === "true"}})}
                />
                <SettingsItem
                    label="settings.copy_cell_content_on_click"
                    options={enableOptions}
                    value={settings.interfaceSettings.copyCellContentOnClick}
                    setter={value => updateSettings({interfaceSettings: {copyCellContentOnClick: value === "true"}})}
                />
                <SettingsItem
                    label="settings.copy_manual_content_on_click"
                    options={enableOptions}
                    value={settings.interfaceSettings.copyManualContentOnClick}
                    setter={value => updateSettings({interfaceSettings: {copyManualContentOnClick: value === "true"}})}
                />
                <SettingsItem
                    label="settings.cell_language_tag"
                    options={languageWithInheritOptions}
                    value={settings.interfaceSettings.cellLanguageTag}
                    setter={value => updateSettings({interfaceSettings: {cellLanguageTag: value}})}
                />
                <SettingsItem
                    label="settings.theme"
                    options={themes.map(theme => {return {label: theme.toUpperCase(), value: theme}})}
                    value={settings.interfaceSettings.theme}
                    setter={value => updateSettings({interfaceSettings: {theme: value}})}
                />
            </SettingsCard>
            <SettingsCard>
                <h1>{t("settings.calculator")}</h1>
                <SettingsItem
                    label="settings.significant_decimal_places"
                    options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(x => {return {
                        label: `${x}`,
                        value: x
                    }})}
                    value={settings.mathSettings.significantDigits}
                    setter={value => updateSettings({mathSettings: {significantDigits: value}})}
                />
                <SettingsItem
                    label="settings.number_format"
                    options={languageWithInheritOptions}
                    value={settings.mathSettings.numberFormat}
                    setter={value => updateSettings({mathSettings: {numberFormat: value}})}
                />
            </SettingsCard>
        </Container>
    )
}

export default Settings