import React from "react";
import styled from "styled-components";
import {Language} from "../../../store/settings/types";
import Card from "../../common/Card";
import ManualItem from "./ManualItem";
import {useTranslation} from "react-i18next";
import {escapeRegExp} from "../../../utils";

const Container = styled(Card)`
    margin-bottom: 20px;
`;


interface Props {
    title: string,
    language: Language,
    items: any,
    filter: string
}

const ManualCategory: React.FC<Props> = ({title, language, items, filter}) => {
    const [t] = useTranslation();

    const filterFunction = (item: any) => item.synopsis[language].match(escapeRegExp(filter))
        || item.description[language].match(escapeRegExp(filter));

    if (items.filter(filterFunction).length === 0)
        return null;

    return (
        <Container>
            <h1>{t(title)}</h1>
            {
                items
                    .filter(filterFunction)
                    .map((item: any, key: number) => <ManualItem key={key} synopsis={item.synopsis[language]} description={item.description[language]}/>)
            }
        </Container>
    );
};

export default ManualCategory;