import React from "react";
import styled from "styled-components";
import MathCell from "./cells/MathCell";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import useHotkeyDispatch from "../../../../../hooks/useHotkeyDispatch";
import {toggleEditCell} from "../../../../../hotkeys.json";
import useSession from "../../../../../hooks/useSession";
import useSettings from "../../../../../hooks/useSettings";
import {pushMathCell, pushTextCell, selectCell, setEditCell} from "../../../../../store/session/actions";
import useNumberFormat from "../../../../../hooks/useNumberFormat";
import TextCell from "./cells/TextCell";
import DocumentInputFormToolbar from "./DocumentInputFormToolbar";

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

const Toolbar = styled.div`
  display: flex;

  & button {
    margin: 10px 10px 10px 0;
  }
`;

const DocumentInputForm: React.FC = () => {
    const settings = useSettings();
    const session = useSession();
    const title = session.document.title;
    const cells = session.document.cells;
    const [t] = useTranslation();
    const dispatch = useDispatch();
    useHotkeyDispatch(toggleEditCell, setEditCell(!session.editCell));
    const numberFormat = useNumberFormat()

    const addMathCell = () => {
        dispatch(selectCell(session.document.cells.length));
        dispatch(pushMathCell("", numberFormat, settings.mathSettings.significantDigits));
        dispatch(setEditCell(true));
    };

    const addTextCell = () => {
        dispatch(selectCell(session.document.cells.length));
        dispatch(pushTextCell(""));
        dispatch(setEditCell(true));
    }

    return (
        <Container>
            <DocumentInputFormToolbar/>
            <Document>
                {
                    title !== "" ? (<h1>{title}</h1>) : t("common.untitled")
                }
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
                <Toolbar>
                    <button onClick={addTextCell}>+ text cell</button>
                    <button onClick={addMathCell}>+ math cell</button>
                </Toolbar>
            </Document>
        </Container>
    );
};

export default DocumentInputForm;