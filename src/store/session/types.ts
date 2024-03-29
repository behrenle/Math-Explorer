import { SignificantDigits, Language } from "../settings/types";

/* state types */
export interface MathCell {
  type: "MATH";
  uuid: string;
  input: string;
  output: string;
}

export interface TextCell {
  type: "TEXT";
  uuid: string;
  content: string;
}

export type Cell = MathCell | TextCell;

export interface Document {
  title: string;
  cells: Cell[];
}

export interface Session {
  currentInput: string;
  selectedCell: number;
  editCell: boolean;
  document: Document;
  temporaryEnableDocumentMode: boolean;
}

/* action types */
export interface ChangeCurrentInput {
  type: "CHANGE_CURRENT_INPUT";
  payload: string;
}

export interface ClearCurrentInput {
  type: "CLEAR_CURRENT_INPUT";
}

export interface ClearDocumentCells {
  type: "CLEAR_DOCUMENT_CELLS";
}

export interface ClearMathUserScope {
  type: "CLEAR_MATH_USER_SCOPE";
}

export interface PushTextCell {
  type: "PUSH_TEXT_CELL";
  payload: string;
}

export interface PushMathCell {
  type: "PUSH_MATH_CELL";
  payload: {
    content: string;
    language: Language;
    significantDigits: SignificantDigits;
  };
}

export interface UpdateMathCell {
  type: "UPDATE_MATH_CELL";
  payload: {
    index: number;
    input: string;
    language: Language;
    significantDigits: SignificantDigits;
  };
}

export interface SelectCell {
  type: "SELECT_CELL";
  payload: number;
}

export interface SetEditCell {
  type: "SET_EDIT_CELL";
  payload: boolean;
}

export interface UpdateTextCell {
  type: "UPDATE_TEXT_CELL";
  payload: {
    content: string;
    index: number;
  };
}

export interface RefreshMathCells {
  type: "REFRESH_MATH_CELLS";
  payload: {
    language: Language;
    significantDigits: SignificantDigits;
  };
}

export interface DeleteCell {
  type: "DELETE_CELL";
  payload: number;
}

export interface LoadDocument {
  type: "LOAD_DOCUMENT";
  payload: Document;
}

export interface MoveCellSelectionUp {
  type: "MOVE_CELL_SELECTION_UP";
}

export interface MoveCellSelectionDown {
  type: "MOVE_CELL_SELECTION_DOWN";
}

export interface TemporaryEnableDocumentMode {
  type: "TEMPORARY_ENABLE_DOCUMENT_MODE";
  payload: boolean;
}

export type SessionAction =
  | ChangeCurrentInput
  | ClearCurrentInput
  | ClearDocumentCells
  | ClearMathUserScope
  | PushTextCell
  | PushMathCell
  | UpdateMathCell
  | SelectCell
  | SetEditCell
  | UpdateTextCell
  | RefreshMathCells
  | DeleteCell
  | LoadDocument
  | MoveCellSelectionUp
  | MoveCellSelectionDown
  | TemporaryEnableDocumentMode;
