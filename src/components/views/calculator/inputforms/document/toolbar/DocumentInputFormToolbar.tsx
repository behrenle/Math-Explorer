import React from "react";
import styled from "styled-components";
import TextIcon from "../../../../../icons/Text.svg";
import MathIcon from "../../../../../icons/Math.svg";
import PenIcon from "../../../../../icons/Pen.svg";
import ReloadIcon from "../../../../../icons/Reload.svg";
import TrashIcon from "../../../../../icons/Trash.svg";
import ImportIcon from "../../../../../icons/Import.svg";
import ExportIcon from "../../../../../icons/Export.svg";
import {useDispatch} from "react-redux";
import {
    deleteCell as deleteCellAction,
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
import {getMathCells} from "../../../common/utils";
import useImportDocument from "../../../../../../hooks/useImportDocument";
import useExportDocument from "../../../../../../hooks/useExportDocument";

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
    const importDocument = useImportDocument();
    const exportDocument = useExportDocument();

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

    const deleteCell = () => {
        dispatch(deleteCellAction(session.selectedCell));
    };

    const documentHasMathCells = () => {
        return getMathCells(session.document.cells).length > 0;
    }

    const isCellSelected = () => {
        return !!session.document.cells[session.selectedCell];
    };


    return (
        <Wrapper>
            <Container>
                <IconButton
                    src={PenIcon}
                    onClick={toggleEditCell}
                    active={session.editCell}
                    label="calculator.document.toolbar.toggle_edit_cell"

                />
                <IconButton
                    src={TextIcon}
                    onClick={addTextCell}
                    label="calculator.document.toolbar.add_text_cell"
                />
                <IconButton
                    src={MathIcon}
                    onClick={addMathCell}
                    label="calculator.document.toolbar.add_math_cell"
                />
                <IconButton
                    src={ReloadIcon}
                    onClick={refresh}
                    disabled={!documentHasMathCells()}
                    label="calculator.document.toolbar.refresh_math_cells"
                />
                <IconButton
                    src={TrashIcon}
                    onClick={deleteCell}
                    disabled={!isCellSelected()}
                    label="calculator.document.toolbar.delete_cell"
                />
                <IconButton
                    src={ImportIcon}
                    onClick={importDocument}
                    label="calculator.document.toolbar.import_document"
                />
                <IconButton
                    src={ExportIcon}
                    onClick={exportDocument}
                    label="calculator.document.toolbar.export_document"
                />
            </Container>
        </Wrapper>
    )
};

export default DocumentInputFormToolbar;