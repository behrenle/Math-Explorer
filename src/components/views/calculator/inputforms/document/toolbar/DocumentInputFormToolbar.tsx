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

    const deleteCell = () => {
        dispatch(deleteCellAction(session.selectedCell));
    };

    const documentHasMathCells = () => {
        return getMathCells(session.document.cells).length > 0;
    }

    const isCellSelected = () => {
        return !!session.document.cells[session.selectedCell];
    };

    const exportDocument = () => {
        const documentData = JSON.stringify(session.document, null, 4);
        const saveData = async () => {
            const options = {
                types: [{
                    description: 'JSON Files',
                    accept: {
                        'application/json': ['.json'],
                    }
                }]
            };
            // @ts-ignore
            const fileHandle = await window.showSaveFilePicker(options);
            const writable = await fileHandle.createWritable();
            writable.write(documentData);
            writable.close();
        }
        saveData().catch(console.error);
    };

    return (
        <Wrapper>
            <Container>
                <IconButton src={PenIcon} onClick={toggleEditCell}/>
                <IconButton src={TextIcon} onClick={addTextCell}/>
                <IconButton src={MathIcon} onClick={addMathCell}/>
                <IconButton
                    src={ReloadIcon}
                    onClick={refresh}
                    disabled={!documentHasMathCells()}
                />
                <IconButton
                    src={TrashIcon}
                    onClick={deleteCell}
                    disabled={!isCellSelected()}
                />
                <IconButton src={ImportIcon}/>
                <IconButton src={ExportIcon} onClick={exportDocument}/>
            </Container>
        </Wrapper>
    )
};

export default DocumentInputFormToolbar;