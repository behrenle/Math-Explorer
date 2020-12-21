import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Cell from "./Cell";
import ReactMarkdown from "react-markdown";
import useSession from "../../../../../../hooks/useSession";
import {selectCell, setEditCell, updateTextCell} from "../../../../../../store/session/actions";
import {useDispatch} from "react-redux";

const Container = styled(Cell)`
  & * {
    background-color: inherit;
    color: inherit;
    border: none;
  }
  
  & ul {
    list-style-type: disc;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: auto;
  margin: 0;
`;

interface TextCellProps {
    index: number,
    content: string
}

const TextCell: React.FC<TextCellProps> = ({index, content}) => {
    const dispatch = useDispatch();
    const session = useSession();
    const [value, setValue] = useState(content);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (textAreaRef.current) {
            // @ts-ignore
            textAreaRef.current.style.height = textAreaRef.current?.scrollHeight + "px";
        }
    },[value, session.editCell])

    const selectThisCell = () => {
        if (index !== session.selectedCell) {
            dispatch(setEditCell(false));
            dispatch(selectCell(index));
        }
    };

    const enterEditMode = () => {
        dispatch(setEditCell(true));
    };

    const changeValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };

    const saveValue = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Escape") {
            dispatch(updateTextCell(index, value));
            dispatch(setEditCell(false));
        }
    };

    return (
        <Container
            selected={index === session.selectedCell}
            onClick={selectThisCell}
            onDoubleClick={enterEditMode}
        >
            {
                index === session.selectedCell && session.editCell
                    ? (<TextArea
                        ref={textAreaRef}
                        value={value}
                        onChange={changeValue}
                        onKeyDown={saveValue}
                    />)
                    : (<ReactMarkdown children={content}/>)
            }
        </Container>
    );
};

export default TextCell