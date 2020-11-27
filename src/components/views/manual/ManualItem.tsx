import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 10px 20px;
    
    &:hover {
        outline: 2px solid black;
    }
`;

const Synopsis = styled.div`
    flex-basis: 30%;
    padding-right: 20px;
`;

const Description = styled.div`
    flex-basis: 70%;
`;

interface Props {
    synopsis: string,
    description: string
}

const ManualItem: React.FC<Props> = ({synopsis, description}) => {
    return (
        <Container>
            <Synopsis>
                {synopsis}
            </Synopsis>
            <Description>
                {description}
            </Description>
        </Container>
    )
}

export default ManualItem;