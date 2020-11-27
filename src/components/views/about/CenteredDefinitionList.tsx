import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding: 20px;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
`;

const LeftItem = styled(Item)`
    align-items: flex-end;
    font-weight: 400;
`;

const RightItem = styled(Item)`
    align-items: flex-start;
`;

const StyledSpan = styled.span`
    font-weight: inherit;
`;

type PropsItem = string | string[];

interface Props {
    items: PropsItem[]
}

const CenteredDefinitionListItem: React.FC<{item: PropsItem}> = ({item}) => {
    if (typeof item === "string") {
        return (<StyledSpan>{item}</StyledSpan>);
    }
    return (
        <>
            {
                item.map((v, i) => <StyledSpan key={i}>{v}</StyledSpan>)
            }
        </>
    )
}

const CenteredDefinitionList: React.FC<Props> = ({items}) => {
    return (
        <Container>
            {
                items.map((v, i) => i % 2 !== 0
                    ? <RightItem><CenteredDefinitionListItem item={v}/></RightItem>
                    : <LeftItem><CenteredDefinitionListItem item={v}/></LeftItem>
                )
            }
        </Container>
    );
};

export default CenteredDefinitionList;