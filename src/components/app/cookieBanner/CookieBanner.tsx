import React from "react";
import styled from "styled-components";
import Card from "../../common/Card";

const Container = styled(Card)`
  padding: 20px;
  margin: 0 20px 20px 20px;
`;

const CookieBanner: React.FC = () => {
    return (
        <Container>
            Cookies...
        </Container>
    )
}

export default CookieBanner;