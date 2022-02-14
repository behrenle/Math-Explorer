import React from "react";
import styled from "styled-components";
import Card from "../../common/Card";
import CenteredDefinitionList from "./CenteredDefinitionList";
import {
  author,
  dependencies,
  license,
  version,
  contributors,
} from "../../../../package.json";
import { useTranslation } from "react-i18next";
import usePageView from "../../../hooks/usePageView";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px 15%;
`;

const Content = styled.div`
  padding: 20px;
`;

const About: React.FC = () => {
  usePageView("/about");
  const [t] = useTranslation();

  return (
    <Container>
      <Card>
        <h1>{t("about.general")}</h1>
        <CenteredDefinitionList
          items={[
            [t("about.version"), version],
            [t("about.author"), [author.name, author.email]],
            [t("about.contributors"), contributors.map((c) => c.name)],
            [t("about.license"), license],
          ]}
        />
        <Content>
          {t("about.further_information")}
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
          </ul>
        </Content>
      </Card>
      <Card style={{ marginTop: "20px" }}>
        <h1>{t("about.dependencies")}</h1>
        <CenteredDefinitionList
          items={Object.entries(dependencies).map((dep) => [
            dep[0],
            dep[1].charAt(0) === "^" ? dep[1].substring(1) : dep[1],
          ])}
        />
        <Content // todo maybe replace with trans component because html injection is unsafe
          dangerouslySetInnerHTML={{
            __html: t("about.more_info", {
              url: "https://www.npmjs.com/",
              label: "npmjs.com",
            }),
          }}
        />
      </Card>
    </Container>
  );
};

export default About;
