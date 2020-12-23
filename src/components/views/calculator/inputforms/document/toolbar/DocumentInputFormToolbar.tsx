import React from "react";
import styled from "styled-components";
import TextIcon from "../../../../../icons/Text.svg";
import MathIcon from "../../../../../icons/Math.svg";
import PenIcon from "../../../../../icons/Pen.svg";
import ReloadIcon from "../../../../../icons/Reload.svg";
import TrashIcon from "../../../../../icons/Trash.svg";
import {useDispatch} from "react-redux";
import {
    pushMathCell,
    pushTextCell,
    refreshMathCells,
    selectCell,
    setEditCell
} from "../../../../../../store/session/actions";
import useSession from "../../../../../../hooks/useSession";
import useNumberFormat from "../../../../../../hooks/useNumberFormat";
import useSettings from "../../../../../../hooks/useSettings";
import IconButton from "./IconButton";

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
  border-radius: 8px;
`;

const DocumentInputFormToolbar: React.FC = () => {
    const dispatch = useDispatch();
    const session = useSession();
    const settings = useSettings();
    const numberFormat = useNumberFormat();

    const addMathCell = () => {
        dispatch(selectCell(session.document.cells.length));
        dispatch(pushMathCell("", numberFormat, settings.mathSettings.significantDigits));
        dispatch(setEditCell(true));
    };

    const addTextCell = () => {
        dispatch(selectCell(session.document.cells.length));
        dispatch(pushTextCell(""));
        dispatch(setEditCell(true));
    };

    const toggleEditCell = () => {
        dispatch(setEditCell(!session.editCell));
    };

    const refresh = () => {
        dispatch(refreshMathCells(numberFormat, settings.mathSettings.significantDigits));
    };

    return (
        <Wrapper>
            <Container>
                <IconButton src={PenIcon} onClick={toggleEditCell}/>
                <IconButton src={TextIcon} onClick={addTextCell}/>
                <IconButton src={MathIcon} onClick={addMathCell}/>
                <IconButton src={ReloadIcon} onClick={refresh}/>
                <IconButton src={TrashIcon}/>
            </Container>
        </Wrapper>
    )
};

export default DocumentInputFormToolbar;