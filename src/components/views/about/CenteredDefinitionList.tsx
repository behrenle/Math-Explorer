import React from "react";
import styled from "styled-components";

const List = styled.ul`
  padding: 20px;
  list-style-type: none;
  margin: 0;
`;

type ItemValue = string | string[];

type ItemProps = [ItemValue, ItemValue];

interface ListProps {
  items: ItemProps[];
}

const CenteredDefinitionList: React.FC<ListProps> = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem item={item} />
      ))}
    </List>
  );
};

const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 0.1em;
`;

const ListItem: React.FC<{ item: ItemProps }> = ({ item }) => {
  const leftValue = item[0];
  const rightValue = item[1];
  return (
    <Item>
      <ListItemContent value={leftValue} align="right" />
      <ListItemContent value={rightValue} align="left" />
    </Item>
  );
};

const Content = styled.div<{ align: "left" | "right" }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.align === "left" ? "flex-start" : "flex-end"};
`;

const ListItemContent: React.FC<{
  value: ItemValue;
  align: "left" | "right";
}> = ({ value, align }) => {
  const lines = typeof value === "string" ? [value] : value;
  return (
    <Content align={align}>
      {lines.map((line, index) => (
        <span key={index}>{line}</span>
      ))}
    </Content>
  );
};

export default CenteredDefinitionList;
