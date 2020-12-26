import React from "react";
import styled from "styled-components";
import Card from "../../common/Card";

const Container = styled(Card)`
  padding: 20px;
  margin: 0 20px 20px 20px;
  display: flex;
  font-size: ${props => props.theme.fontSize.s};
`;

const Text = styled.span`
  flex: 1;
  font-size: inherit;
`;

const Button = styled.button<{accept: boolean}>`
  margin-left: 20px;
  color: inherit;
  background-color: inherit;
  padding: 10px;
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
            <Text>{"Cookies ".repeat(20)}</Text>
            <ButtonContainer>
                <Button accept={false}>reject</Button>
                <Button accept={true}>accept</Button>
            </ButtonContainer>
        </Container>
    )
}

export default CookieBanner;