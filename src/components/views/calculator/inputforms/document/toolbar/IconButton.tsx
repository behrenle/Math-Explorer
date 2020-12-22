import React from "react";
import styled from "styled-components";

const Button = styled.button`
  opacity: 0.5;
  width: 100%;
  padding: 10px;
  background-color: inherit;
  border: none;
  outline: none;
  
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
    onClick?: () => void
}

const IconButton: React.FC<IconProps> = ({src, onClick}) => {
    return (
        <Button disabled={!onClick}>
            <Img src={src} onClick={onClick}/>
        </Button>
    );
};

export default IconButton;