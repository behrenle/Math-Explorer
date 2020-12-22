import React from "react";
import styled from "styled-components";
import TextIcon from "../../../../icons/Text.svg";
import MathIcon from "../../../../icons/Math.svg";
import PenIcon from "../../../../icons/Pen.svg";
import ReloadIcon from "../../../../icons/Reload.svg";
import TrashIcon from "../../../../icons/Trash.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.card.backgroundColor};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Icon = styled.img`
  filter: ${props => props.theme.icon.filter};
  opacity: 0.5;
  width: 100%;
  padding: 10px;
  
  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid black;
    padding: 9px;
  }

  &:first-child {
    border-radius: 10px 10px 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

const DocumentInputFormToolbar: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <Icon src={PenIcon}/>
                <Icon src={TextIcon}/>
                <Icon src={MathIcon}/>
                <Icon src={ReloadIcon}/>
                <Icon src={TrashIcon}/>
            </Container>
        </Wrapper>
    )
};

export default DocumentInputFormToolbar;