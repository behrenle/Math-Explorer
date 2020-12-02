import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import ManualCategory from "./ManualCategory";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import InputText from "../../common/InputText";

// @ts-ignore
import nd from "@behrenle/number-drive"
import {useTranslation} from "react-i18next";

const Container = styled.div`
    padding: 20px 15%;
`;

const Manual: React.FC = () => {
    const [filter, setFilter] = useState("");
    const language = useSelector((state: RootState) => state.settings.interfaceSettings.language);
    const searchRef = useRef<HTMLInputElement>(null);
    const [t] = useTranslation();
    useEffect(() => {
        if (searchRef.current)
            searchRef.current.focus();
    }, []);

    return (
        <Container>
            <InputText
                style={{marginBottom: "20px"}}
                placeholder={t("manual.search")}
                value={filter}
                ref={searchRef}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)}
            />
            <ManualCategory
                title="manual.constants"
                language={language}
                items={nd.Manual.constants}
                filter={filter}
            />
            <ManualCategory
                title="manual.functions"
                language={language}
                items={nd.Manual.functions}
                filter={filter}
            />
        </Container>
    )
}

export default Manual