import React from "react";
import styled from "styled-components";

const Button = styled.button<{active: boolean}>`
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
`;

interface IconProps {
    src: string,
    onClick?: () => void,
    disabled?: boolean,
    active?: boolean
}

const IconButton: React.FC<IconProps> = ({src, onClick, disabled, active}) => {
    return (
        <Button disabled={!onClick || disabled} active={!!active}>
            <Img src={src} onClick={onClick}/>
        </Button>
    );
};

export default IconButton;