import React from "react";
import styled from "styled-components";
import Card from "../../common/Card";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import useSettings from "../../../hooks/useSettings";
import {setSettings} from "../../../store/settings/actions";

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

const Button = styled.button`
  margin-left: 20px;
  color: inherit;
  background-color: inherit;
  padding: 10px 20px;
  border: 1px solid ${props => props.theme.card.color};
  //border-radius: 10px;
  font-size: inherit;

  &:hover {
    background-color: ${props => props.theme.sidebarItem.hoverBackgroundColor};
  }
`;

const ButtonContainer = styled.div`
  font-size: inherit;
`;

const CookieBanner: React.FC = () => {
    const dispatch = useDispatch();
    const settings = useSettings();

    if (settings.cookieBannerHasBeenAccepted)
        return null;

    const accept = () => {
        dispatch(setSettings({
            ...settings,
            cookieBannerHasBeenAccepted: true,
            useAnalytics: true
        }));
    }

    return (
        <Container>
            <Text>
                By using our site, you acknowledge that you have read and understand
                our <Link to="/cookie-policy">Cookie Policy</Link>
                , <Link to="/privacy-policy">Privacy Policy</Link>
                , and our <Link to="/terms-of-service">Terms of Service</Link>.
            </Text>
            <ButtonContainer>
                <Button onClick={accept}>OK</Button>
            </ButtonContainer>
        </Container>
    )
}

export default CookieBanner;