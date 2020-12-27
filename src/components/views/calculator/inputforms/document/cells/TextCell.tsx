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
  
  & h1 {
    font-size: 1.5em;
  }

  & h2 {
    font-size: 1.4em;
  }

  & h3 {
    font-size: 1.3em;
  }

  & h4 {
    font-size: 1.2em;
  }

  & h5 {
    font-size: 1.1em;
  }

  & h6 {
    font-size: 1em;
  }
  
  & h1, h2, h3, h4, h5, h6 {
    margin: 0 0 0.2em 0;
    padding: 0;
    font-weight: bolder;
  }
  
  & > p {
    margin: 5px 0;
  }
  
  & > pre {
    display: inline-block;
    margin: 10px 0;
    padding: 5px 10px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  & > pre code {
    background-color: transparent;
  }

  & p > code {
    padding: 5px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  
  & strong {
    font-weight: bold;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  margin: 0;
  height: 25vh;
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
        if (textAreaRef.current && session.selectedCell === index && session.editCell)
            textAreaRef.current.focus();
    }, [session.editCell, session.selectedCell, index]);
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