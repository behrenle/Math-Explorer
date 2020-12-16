import React from "react";
import styled from "styled-components";
import {Language} from "../../../store/settings/types";
import Card from "../../common/Card";
import ManualItem from "./ManualItem";
import {useTranslation} from "react-i18next";
import {escapeRegExp} from "../../../utils";

const Container = styled(Card)`
  margin-bottom: 20px;

  & dl {
    list-style-type: none;
    margin: 0;
    padding: 20px;
    display: grid;
    grid-template-columns: 3fr 7fr;
    grid-column-gap: 10px;
  }

`;

interface Props {
    title: string,
    language: Language,
    items: any,
    filter: string,
    copyOnClick?: boolean,
    synopsisIsMath?: boolean
}

const ManualCategory: React.FC<Props> = ({
                                             title,
                                             language,
                                             items,
                                             filter,
                                             copyOnClick,
                                             synopsisIsMath
                                         }) => {
    const [t] = useTranslation();

    const filterFunction = (item: any) => item.synopsis[language].match(escapeRegExp(filter))
        || item.description[language].match(escapeRegExp(filter));

    if (items.filter(filterFunction).length === 0)
        return null;

    return (
        <Container>
            <h1>{t(title)}</h1>
            <dl>
                {
                    items.filter(filterFunction).map((item: any, key: number) => (
                        <ManualItem
                            key={key}
                            copyOnClick={!!copyOnClick}
                            synopsisIsMath={!!synopsisIsMath}
                            synopsis={item.synopsis[language]}
                            description={item.description[language]}
                        />
                    ))
                }
            </dl>
        </Container>
    );
};

export default ManualCategory;