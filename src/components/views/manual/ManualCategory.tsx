import React from "react";
import styled from "styled-components";
import {Language} from "../../../store/settings/types";
import Card from "../../common/Card";
import ManualItem from "./ManualItem";

const Container = styled(Card)`
    margin-bottom: 20px;
`;


interface Props {
    language: Language,
    items: any,
    filter: string
}

const ManualCategory: React.FC<Props> = ({language, items, filter}) => {
    return (
        <Container>
            <h1>Constants</h1>
            {
                items
                    .filter((item: any) => item.synopsis[language].match(filter) || item.description[language].match(filter))
                    .map((item: any) => <ManualItem synopsis={item.synopsis[language]} description={item.description[language]}/>)
            }
        </Container>
    );
};

export default ManualCategory;