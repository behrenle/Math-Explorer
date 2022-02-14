import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import Card from "../../common/Card";
import { useHistory } from "react-router-dom";
import useLoadDocument from "../../../hooks/useLoadDocument";
import { fetchBin } from "../../../apis/jsonBin";
import { Document } from "../../../store/session/types";
import validateDocument from "../../../validate/validateDocument";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { temporaryEnableDocumentMode } from "../../../store/session/actions";

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

interface Props {
  id: string;
}

interface RouteProps extends RouteComponentProps<Props> {}

const DownloadDocument: React.FC<RouteProps> = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [t] = useTranslation();
  const history = useHistory();
  const loadDocument = useLoadDocument();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(temporaryEnableDocumentMode(true));
  }, []);
  useEffect(() => {
    if (!loading && !failed) history.push("/");
  }, [loading, failed]);
  useEffect(() => {
    fetchBin(match.params.id)
      .then((doc) => {
        const valid = validateDocument(doc);
        if (valid) {
          loadDocument(doc as Document);
        } else {
          setFailed(true);
        }
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <Container>
      <StyledCard>
        {loading ? (
          <p>
            {t("download.loading-document")} {match.params.id}
          </p>
        ) : failed ? (
          <p>{t("download.download-error")}</p>
        ) : (
          <p>{t("download.successful")}</p>
        )}
      </StyledCard>
    </Container>
  );
};

export default DownloadDocument;
