import React from "react";
import styled from "styled-components";
import MathCell from "./cells/MathCell";
import useHotkeyDispatch from "../../../../../hooks/useHotkeyDispatch";
import {toggleEditCell} from "../../../../../hotkeys.json";
import useSession from "../../../../../hooks/useSession";
import {setEditCell} from "../../../../../store/session/actions";
import TextCell from "./cells/TextCell";
import DocumentInputFormToolbar from "./toolbar/DocumentInputFormToolbar";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: hidden;
  grid-gap: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  color: ${props => props.theme.card.color};
`;

const Document = styled.main`
  background-color: ${props => props.theme.card.backgroundColor};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  overflow: auto;
  border-radius: 8px;

  & h1 {
    padding: 10px;
    font-weight: bolder;
  }

  & button {
    background-color: inherit;
    color: inherit;
    border: 1px solid white;
    padding: 0.25em 1em;
  }

  & button:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const CellList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const DocumentInputForm: React.FC = () => {
    const session = useSession();
    const cells = session.document.cells;
    useHotkeyDispatch(toggleEditCell, setEditCell(!session.editCell));

    return (
        <Container>
            <DocumentInputFormToolbar/>
            <Document>
                <CellList>
                    {
                        cells.map((cell, i) => cell.type === "MATH"
                            ? (<MathCell
                                key={i}
                                input={cell.input}
                                output={cell.output}
                                index={i}
                            />)
                            : (<TextCell
                                key={i}
                                index={i}
                                content={cell.content}
                            />))
                    }
                </CellList>
            </Document>
        </Container>
    );
};

export default DocumentInputForm;