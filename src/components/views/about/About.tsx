import React from "react";
import styled from "styled-components";
import Card from "../../common/Card";
import CenteredDefinitionList from "./CenteredDefinitionList";
import {author, dependencies, license, version} from "../../../../package.json";

const Container = styled.div`
    padding: 20px 15%;
`;

const Content = styled.div`
    padding: 20px;
`;


const About: React.FC = () => {
    return (
        <Container>
            <Card>
                <h1>General</h1>
                <CenteredDefinitionList
                    items={[
                        "Version", version,
                        "Author", [author.name, author.email],
                        "License", license
                    ]}
                />
                <h1>Dependencies</h1>
                <CenteredDefinitionList
                    items={
                        Object.entries(dependencies).flatMap(v => [
                            v[0], v[1].charAt(0) === "^"
                                ? v[1].substring(1)
                                : v[1]
                        ])
                    }
                />
                <Content>Visit <a href="https://www.npmjs.com/">npmjs.com</a> for more information.</Content>
            </Card>
        </Container>
    )
}

export default About