import {
    ChangeCurrentInput,
    ClearCurrentInput,
    ClearDocumentCells,
    ClearMathUserScope, DeleteCell,
    PushMathCell,
    PushTextCell, RefreshMathCells,
    SelectCell,
    SetEditCell,
    UpdateMathCell, UpdateTextCell
} from "./types";
import {Language, SignificantDigits} from "../settings/types";

export const changeCurrentInput = (input: string): ChangeCurrentInput => {
    return {
        type: "CHANGE_CURRENT_INPUT",
        payload: input
    };
};

export const clearCurrentInput = (): ClearCurrentInput => {
    return {
        type: "CLEAR_CURRENT_INPUT"
    };
};

export const pushMathCell = (content: string, language: Language, significantDigits: SignificantDigits): PushMathCell => {
    return {
        type: "PUSH_MATH_CELL",
        payload: {
            content,
            language,
            significantDigits
        }
    };
};

export const clearMathHistory = (): ClearDocumentCells => {
    return {
        type: "CLEAR_DOCUMENT_CELLS"
    };
};

export const clearMathUserScope = (): ClearMathUserScope => {
    return {
        type: "CLEAR_MATH_USER_SCOPE"
    };
};

export const pushTextCell = (content: string): PushTextCell => {
    return {
        type: "PUSH_TEXT_CELL",
        payload: content
    };
};

export const updateMathCell = (input: string, index: number, language: Language, significantDigits: SignificantDigits): UpdateMathCell => {
    return {
        type: "UPDATE_MATH_CELL",
        payload: {
            language,
            significantDigits,
            input,
            index
        }
    };
};

export const selectCell = (index: number): SelectCell => {
    return {
        type: "SELECT_CELL",
        payload: index
    };
};

export const setEditCell = (value: boolean): SetEditCell => {
    return {
        type: "SET_EDIT_CELL",
        payload: value
    };
};

export const updateTextCell = (index: number, content: string): UpdateTextCell => {
    return {
        type: "UPDATE_TEXT_CELL",
        payload: {index, content}
    };
};

export const refreshMathCells = (language: Language, significantDigits: SignificantDigits): RefreshMathCells => {
    return {
        type: "REFRESH_MATH_CELLS",
        payload: {
            language, significantDigits
        }
    };
};

export const deleteCell = (index: number): DeleteCell => {
    return {
        type: "DELETE_CELL",
        payload: index
    };
};