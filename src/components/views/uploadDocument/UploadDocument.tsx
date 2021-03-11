import React from "react";
import {RouteComponentProps} from "react-router";
import styled from "styled-components";
import Card from "../../common/Card";
import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledCard = styled(Card)`
  padding: 20px;

  & * {
    padding: 0;
    margin: 0;
  }
`;

const Button = styled.button`
  background-color: inherit;
  color: inherit;
  border: 2px solid ${props => props.theme.card.color};
  padding: 5px 10px;
  margin-right: 20px;
  
  &:hover {
    background-color: ${props => props.theme.sidebarItem.hoverBackgroundColor};
  }
`;

interface Props {
    id: string
}

interface RouteProps extends RouteComponentProps<Props> {}

const UploadDocument: React.FC<RouteProps> = ({match}) => {
    const history = useHistory();
    const path = window.location.href.split("#")[0];
    const uploadUrl = `${path}#/download-document/${match.params.id}`;
    const [t] = useTranslation();

    const copyUrl = () => {
        navigator.clipboard.writeText(uploadUrl).catch(console.error);
    }

    return (
        <Container>
            <StyledCard>
                <div>
                    <Button onClick={copyUrl}>{t("upload.copy")}</Button>
                    <Button onClick={history.goBack}>{t("upload.back")}</Button>
                </div>
                <a href={uploadUrl}>{uploadUrl}</a>
            </StyledCard>
        </Container>
    );
};

export default UploadDocument