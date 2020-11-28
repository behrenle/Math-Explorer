import React from "react";
import styled from "styled-components";
import Card from "../../common/Card";
import SettingsItem from "./SettingsItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 15%;
    overflow-y: auto;
`;

const SettingsCard = styled(Card)`
  margin-bottom: 20px;
`;

const languageOptions = [{label: "EN", value: "en"}, {label: "DE", value: "de"}];
const languageWithInheritOptions = [...languageOptions, {label: "Inherit", value: "inherit"}];
const enableOptions = [{label: "Enable", value: true}, {label: "Disable", value: false}];

const Settings: React.FC = () => {
    const settings = useSelector((state: RootState) => state.settings);
    const dispatch = useDispatch();

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
                <h1>Interface</h1>
                <SettingsItem
                    label="Language"
                    options={languageOptions}
                    value={settings.interfaceSettings.language}
                    setter={value => updateSettings({interfaceSettings: {language:  value}})}
                />
                <SettingsItem
                    label="Advanced input mode"
                    options={enableOptions}
                    value={settings.interfaceSettings.advancedInputMode}
                    setter={value => updateSettings({interfaceSettings: {advancedInputMode: value === "true"}})}
                />
                <SettingsItem
                    label="Show cell numbers"
                    options={enableOptions}
                    value={settings.interfaceSettings.showLineNumbers}
                    setter={value => updateSettings({interfaceSettings: {showLineNumbers: value === "true"}})}
                />
                <SettingsItem
                    label="Copy cell content by clicking"
                    options={enableOptions}
                    value={settings.interfaceSettings.copyOnClick}
                    setter={value => updateSettings({interfaceSettings: {copyOnClick: value === "true"}})}
                />
                <SettingsItem
                    label="Cell language tag"
                    options={languageWithInheritOptions}
                    value={settings.interfaceSettings.cellLanguageTag}
                    setter={value => updateSettings({interfaceSettings: {cellLanguageTag: value}})}
                />
            </SettingsCard>
            <SettingsCard>
                <h1>Calculator</h1>
                <SettingsItem
                    label="Significant decimal places"
                    options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(x => {return {
                        label: `${x}`,
                        value: x
                    }})}
                    value={settings.mathSettings.significantDigits}
                    setter={value => updateSettings({mathSettings: {significantDigits: value}})}
                />
                <SettingsItem
                    label="Number format"
                    options={languageWithInheritOptions}
                    value={settings.mathSettings.numberFormat}
                    setter={value => updateSettings({mathSettings: {numberFormat: value}})}
                />
            </SettingsCard>
        </Container>
    )
}

export default Settings