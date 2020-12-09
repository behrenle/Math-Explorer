import React, {useRef, useState} from "react";
import styled from "styled-components";
import ManualCategory from "./ManualCategory";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import InputText from "../../common/InputText";
import hotkeys from "../../../hotkeys.json";

// @ts-ignore
import nd from "@behrenle/number-drive"
import {useTranslation} from "react-i18next";
import useRefEffect from "../../../hooks/useRefEffect";
import {camelToSnakeCase} from "../../../utils";

const Container = styled.div`
    padding: 20px 15%;
`;

const Manual: React.FC = () => {
    const [filter, setFilter] = useState("");
    const language = useSelector((state: RootState) => state.settings.interfaceSettings.language);
    const searchRef = useRef<HTMLInputElement>(null);
    const [t] = useTranslation();
    useRefEffect(searchRef, r => r.current.focus());

    return (
        <Container>
            <InputText
                type="text"
                style={{marginBottom: "20px"}}
                placeholder={t("manual.search")}
                value={filter}
                ref={searchRef}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)}
            />
            <ManualCategory
                title="manual.hotkeys"
                language={language}
                items={
                    Object.entries(hotkeys).map(hotkey => {
                        const synopsis = hotkey[1].replaceAll("+", " + ").toUpperCase();
                        const description = t("manual.hotkey_" + camelToSnakeCase(hotkey[0]));
                        return {
                            synopsis: {de: synopsis, en: synopsis},
                            description: {de: description, en: description}
                        };
                    })
                }
                filter={filter}
                copyOnClick={false}
            />
            <ManualCategory
                title="manual.constants"
                language={language}
                items={nd.Manual.constants}
                filter={filter}
                copyOnClick={true}
            />
            <ManualCategory
                title="manual.functions"
                language={language}
                items={nd.Manual.functions}
                filter={filter}
                copyOnClick={true}
            />
        </Container>
    )
}

export default Manual