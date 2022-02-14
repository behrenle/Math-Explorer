import useHotkeyDispatch from "../../../../../hooks/useHotkeyDispatch";
import { document as documentHotkeys } from "../../../../../hotkeys.json";
import {
  deleteCell,
  moveCellSelectionDown,
  moveCellSelectionUp,
  selectCell,
  setEditCell,
} from "../../../../../store/session/actions";
import useSession from "../../../../../hooks/useSession";
import useImportDocument from "../../../../../hooks/useImportDocument";
import useHotkey from "../../../../../hooks/useHotkey";
import useExportDocument from "../../../../../hooks/useExportDocument";

const useDocumentHotkeys = () => {
  const session = useSession();
  const edit = session.editCell;
  const importDocument = useImportDocument();
  const exportDocument = useExportDocument();

  useHotkey(documentHotkeys.openDocument, (event) => {
    event.preventDefault();
    importDocument();
  });
  useHotkey(documentHotkeys.saveDocument, (event) => {
    event.preventDefault();
    exportDocument();
  });
  useHotkeyDispatch(
    documentHotkeys.toggleEditCell,
    setEditCell(!session.editCell),
    session.selectedCell >= 0 &&
      session.selectedCell < session.document.cells.length
  );
  useHotkeyDispatch(
    documentHotkeys.deleteSelectedCell,
    deleteCell(session.selectedCell),
    !edit
  );
  useHotkeyDispatch(
    documentHotkeys.moveCellSelectionDown,
    moveCellSelectionDown(),
    !edit
  );
  useHotkeyDispatch(
    documentHotkeys.moveCellSelectionUp,
    moveCellSelectionUp(),
    !edit
  );
  useHotkeyDispatch(
    documentHotkeys.moveToStartOfDocument,
    selectCell(0),
    !edit
  );
  useHotkeyDispatch(
    documentHotkeys.moveToEndOfDocument,
    selectCell(session.document.cells.length - 1),
    !edit
  );
};

export default useDocumentHotkeys;
