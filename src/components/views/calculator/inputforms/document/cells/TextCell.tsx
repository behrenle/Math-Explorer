import React from "react";
import styled from "styled-components";
import Cell from "./Cell";
import ReactMarkdown from "react-markdown";
import useSession from "../../../../../../hooks/useSession";

const Container = styled(Cell)``;

interface TextCellProps {
    index: number,
    content: string
}

const TextCell: React.FC<TextCellProps> = ({index, content}) => {
    const session = useSession();

    return (
        <Container selected={index === session.selectedCell}>
            <ReactMarkdown children={content}/>
        </Container>
    );
};

export default TextCell