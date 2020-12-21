import React from "react";
import styled from "styled-components";
import MathCell from "./cells/MathCell";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {PushMathCell, SelectCell, SetEditCell} from "../../../../../store/session/types";
import useHotkeyDispatch from "../../../../../hooks/useHotkeyDispatch";
import {toggleEditCell} from "../../../../../hotkeys.json";
import useSession from "../../../../../hooks/useSession";
import useSettings from "../../../../../hooks/useSettings";

const Container = styled.div`
  padding: 20px;
  color: ${props => props.theme.card.color};
`;

const Document = styled.main`
  background-color: ${props => props.theme.card.backgroundColor};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

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
    useHotkeyDispatch(toggleEditCell, {
        type: "SET_EDIT_CELL",
        payload: !session.editCell
    } as SetEditCell);

    const addMathCell = () => {
        dispatch({
            type: "PUSH_MATH_CELL",
            payload: {
                content: "",
                language: settings.mathSettings.numberFormat === "inherit" ? settings.interfaceSettings.language : settings.mathSettings.numberFormat,
                significantDigits: settings.mathSettings.significantDigits
            }
        } as PushMathCell);
        dispatch({
            type: "SELECT_CELL",
            payload: session.document.cells.length
        } as SelectCell);
        dispatch({
            type: "SET_EDIT_CELL",
            payload: true
        } as SetEditCell);
    };

    return (
        <Container>
            <Document>
                {
                    title !== "" ? (<h1>{title}</h1>) : t("common.untitled")
                }
                <ul>
                    {
                        cells.map((cell, i) => cell.type === "MATH" ? (
                            <MathCell
                                key={i}
                                input={cell.input}
                                output={cell.output}
                                index={i}
                            />) : null)
                    }
                </ul>
                <Toolbar>
                    <button>+ text cell</button>
                    <button onClick={addMathCell}>+ math cell</button>
                </Toolbar>
            </Document>
        </Container>
    );
};

export default DocumentInputForm;