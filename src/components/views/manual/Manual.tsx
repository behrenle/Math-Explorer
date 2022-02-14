import React, { useRef, useState } from "react";
import styled from "styled-components";
import ManualCategory from "./ManualCategory";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import InputText from "../../common/InputText";
import hotkeys from "../../../hotkeys.json";

// @ts-ignore
import nd from "@behrenle/number-drive";
import { useTranslation } from "react-i18next";
import useRefEffect from "../../../hooks/useRefEffect";
import { camelToSnakeCase } from "../../../utils";
import usePageView from "../../../hooks/usePageView";

const Container = styled.div`
  padding: 20px 15%;
`;

interface HotkeysManualObject {
  [key: string]: string | HotkeysManualObject;
}

const getHotkeysManual = (
  items: HotkeysManualObject = hotkeys,
  t: (s: string) => string,
  baseStr = ""
) => {
  let entries: {
    synopsis: { de: string; en: string };
    description: { de: string; en: string };
  }[] = [];
  Object.entries(items).forEach(([key, value]) => {
    if (typeof value === "string") {
      const synopsis = value.replaceAll("+", " + ").toUpperCase();
      const description = t(
        `manual.${baseStr ? baseStr + "." : ""}hotkey_${camelToSnakeCase(key)}`
      );
      entries.push({
        synopsis: { de: synopsis, en: synopsis },
        description: { de: description, en: description },
      });
    } else if (typeof value === "object") {
      entries = entries.concat(getHotkeysManual(value, t, key));
    } else {
      console.error("invalid hotkeys file format");
      return;
    }
  });
  return entries;
};

const Manual: React.FC = () => {
  usePageView("/manual");
  const [filter, setFilter] = useState("");
  const language = useSelector(
    (state: RootState) => state.settings.interfaceSettings.language
  );
  const searchRef = useRef<HTMLInputElement>(null);
  const [t] = useTranslation();
  const hotkeysManualItems = getHotkeysManual(undefined, t);
  useRefEffect(searchRef, (r) => r.current.focus());

  return (
    <Container>
      <InputText
        type="text"
        role="search"
        aria-label={t("search.search_label")}
        style={{ marginBottom: "20px" }}
        placeholder={t("manual.search")}
        value={filter}
        ref={searchRef}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setFilter(event.target.value)
        }
      />
      <ManualCategory
        title="manual.hotkeys"
        language={language}
        items={hotkeysManualItems}
        filter={filter}
      />
      <ManualCategory
        title="manual.constants"
        language={language}
        items={nd.Manual.constants}
        filter={filter}
        copyOnClick={true}
        synopsisIsMath={true}
      />
      <ManualCategory
        title="manual.functions"
        language={language}
        items={nd.Manual.functions}
        filter={filter}
        copyOnClick={true}
        synopsisIsMath={true}
      />
    </Container>
  );
};

export default Manual;
