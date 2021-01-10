import React from "react";
import styled from "styled-components";
import useAnalyticsEvent from "../../../../../../hooks/useAnalyticsEvent";
import {useTranslation} from "react-i18next";

const Button = styled.button<{ active: boolean }>`
  opacity: ${props => props.active ? "1" : "0.5"};
  width: 100%;
  padding: 10px;
  background-color: ${props => props.active ? props.theme.sidebarItem.hoverBackgroundColor : "inherit"};
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.1;
  }

  &:enabled:hover {
    opacity: 1;
    border: 1px solid ${props => props.theme.icon.borderColor};
    background-color: ${props => props.theme.sidebarItem.hoverBackgroundColor};
    padding: 9px;
  }

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

const Img = styled.img`
  filter: ${props => props.theme.icon.filter};
  width: 50px;
  height: 50px;
`;

interface IconProps {
    src: string,
    onClick?: () => void,
    disabled?: boolean,
    active?: boolean,
    label: string
}

const IconButton: React.FC<IconProps> = ({
     src,
     onClick,
     disabled,
     active,
     label,
 }) => {
    const analyticsEvent = useAnalyticsEvent();
    const [t] = useTranslation();

    const clickWrapper = () => {
        if (!(!onClick || disabled)) {
            const labelParts = label.split(".");
            const analyticsCategory = labelParts.slice(0, labelParts.length - 1).join(".");
            const analyticsAction = labelParts[labelParts.length - 1];

            analyticsEvent(analyticsCategory, analyticsAction);
            onClick();
        }
    }

    return (
        <Button
            disabled={!onClick || disabled}
            active={!!active}
            onClick={clickWrapper}
            aria-label={t(label)}
        >
            <Img src={src}/>
        </Button>
    );
};

export default IconButton;