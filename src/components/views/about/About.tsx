import React from "react";
import styled from "styled-components";
import Card from "../../common/Card";
import CenteredDefinitionList from "./CenteredDefinitionList";
import {author, dependencies, license, version} from "../../../../package.json";
import {useTranslation} from "react-i18next";

const Container = styled.div`
    padding: 20px 15%;
`;

const Content = styled.div`
    padding: 20px;
`;


const About: React.FC = () => {
    const [t] = useTranslation();

    return (
        <Container>
            <Card>
                <h1>{t("about.general")}</h1>
                <CenteredDefinitionList
                    items={[
                        t("about.version"), version,
                        t("about.author"), [author.name, author.email],
                        t("about.license"), license
                    ]}
                />
            </Card>
            <Card style={{marginTop: "20px"}}>
                <h1>{t("about.dependencies")}</h1>
                <CenteredDefinitionList
                    items={
                        Object.entries(dependencies).flatMap(v => [
                            v[0], v[1].charAt(0) === "^"
                                ? v[1].substring(1)
                                : v[1]
                        ])
                    }
                />
                <Content // todo maybe replace with trans component because html injection is unsafe
                    dangerouslySetInnerHTML={{
                        __html: t("about.more_info", {url: "https://www.npmjs.com/", label: "npmjs.com"})
                    }}
                />
            </Card>
        </Container>
    )
}

export default About