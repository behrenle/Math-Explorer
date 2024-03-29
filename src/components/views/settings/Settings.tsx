import React from "react";
import styled from "styled-components";
import Card from "../../common/Card";
import SettingsItem from "./SettingsItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useTranslation } from "react-i18next";
import { themes } from "../../../hooks/useTheme";
import usePageView from "../../../hooks/usePageView";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 15%;
  overflow-y: auto;
`;

const SettingsCard = styled(Card)`
  margin-bottom: 20px;

  & ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`;

const Settings: React.FC = () => {
  usePageView("/settings");
  const settings = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();
  const [t] = useTranslation();

  const languageOptions = [
    { label: "EN", value: "en" },
    { label: "DE", value: "de" },
  ];
  const languageWithInheritOptions = [
    ...languageOptions,
    { label: t("common.inherit"), value: "inherit" },
  ];
  const enableOptions = [
    { label: t("common.enable"), value: true },
    { label: t("common.disable"), value: false },
  ];
  const fontSizeOptions = [
    { label: t("common.large"), value: "large" },
    { label: t("common.medium"), value: "medium" },
    { label: t("common.small"), value: "small" },
  ];
  const inputFormOptions = [
    { label: t("settings.input_form.simple"), value: "simple" },
    { label: t("settings.input_form.document"), value: "document" },
  ];

  const updateSettings = (updatedSettings: {
    interfaceSettings?: {};
    mathSettings?: {};
    useAnalytics?: boolean;
  }) => {
    dispatch({
      type: "SET_SETTINGS",
      payload: {
        ...settings,
        ...updatedSettings,
        interfaceSettings: {
          ...settings.interfaceSettings,
          ...updatedSettings.interfaceSettings,
        },
        mathSettings: {
          ...settings.mathSettings,
          ...updatedSettings.mathSettings,
        },
      },
    });
  };

  const updateInterfaceSettings = (updatedValues: {}) => {
    updateSettings({ interfaceSettings: updatedValues });
  };

  return (
    <Container>
      <SettingsCard>
        <h1>{t("settings.categories.interface")}</h1>
        <ul>
          <SettingsItem
            label="settings.language"
            options={languageOptions}
            value={settings.interfaceSettings.language}
            setter={(value) => updateInterfaceSettings({ language: value })}
          />
          <SettingsItem
            label="settings.input_form"
            options={inputFormOptions}
            value={settings.interfaceSettings.inputForm}
            setter={(value) => updateInterfaceSettings({ inputForm: value })}
          />
          <SettingsItem
            label="settings.copy_manual_content_on_click"
            options={enableOptions}
            value={settings.interfaceSettings.copyManualContentOnClick}
            setter={(value) =>
              updateInterfaceSettings({
                copyManualContentOnClick: value === "true",
              })
            }
          />

          <h2>{t("settings.categories.appearance")}</h2>
          <SettingsItem
            label="settings.theme"
            options={themes.map((theme) => {
              return { label: theme.toUpperCase(), value: theme };
            })}
            value={settings.interfaceSettings.theme}
            setter={(value) => updateInterfaceSettings({ theme: value })}
          />
          <SettingsItem
            label="settings.font_size"
            options={fontSizeOptions}
            value={settings.interfaceSettings.fontSize}
            setter={(value) => updateInterfaceSettings({ fontSize: value })}
          />
          <SettingsItem
            label="settings.show_background_image"
            options={enableOptions}
            value={settings.interfaceSettings.showBackgroundImage}
            setter={(value) =>
              updateInterfaceSettings({ showBackgroundImage: value === "true" })
            }
          />
        </ul>
      </SettingsCard>
      <SettingsCard>
        <h1>{t("settings.categories.calculator")}</h1>
        <ul>
          <SettingsItem
            label="settings.significant_decimal_places"
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (x) => {
                return {
                  label: `${x}`,
                  value: x,
                };
              }
            )}
            value={settings.mathSettings.significantDigits}
            setter={(value) =>
              updateSettings({ mathSettings: { significantDigits: value } })
            }
          />
          <SettingsItem
            label="settings.number_format"
            options={languageWithInheritOptions}
            value={settings.mathSettings.numberFormat}
            setter={(value) =>
              updateSettings({ mathSettings: { numberFormat: value } })
            }
          />
        </ul>
      </SettingsCard>
    </Container>
  );
};

export default Settings;
