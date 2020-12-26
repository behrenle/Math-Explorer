import React from "react";
import styled from "styled-components";
import Card from "../../common/Card";
import {Link} from "react-router-dom";

const Container = styled(Card)`
  padding: 20px;
  margin: 0 20px 20px 20px;
  display: flex;
  font-size: ${props => props.theme.fontSize.s};
`;

const Text = styled.span`
  flex: 1;
  font-size: inherit;

  & > a {
    font-size: inherit;
  }
`;

const Button = styled.button<{accept: boolean}>`
  margin-left: 20px;
  color: inherit;
  background-color: inherit;
  padding: 10px 20px;
  border: 1px solid white;
  //border-radius: 10px;
  font-size: inherit;

  &:hover {
    background-color: ${props => props.theme.navbarItem.hoverBackgroundColor};
  }
`;

const ButtonContainer = styled.div`
  font-size: inherit;
`;

const CookieBanner: React.FC = () => {
    return (
        <Container>
            <Text>
                By using our site, you acknowledge that you have read and understand
                our <Link to="/cookie-policy">Cookie Policy</Link>
                , <Link to="/privacy-policy">Privacy Policy</Link>
                , and our <Link to="/terms-of-service">Terms of Service</Link>.
            </Text>
            <ButtonContainer>
                <Button accept={false}>OK</Button>
            </ButtonContainer>
        </Container>
    )
}

export default CookieBanner;