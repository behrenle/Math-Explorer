import {Cell, MathCell, PushMathCell, Session, SessionAction} from "./types";
import {createReducer} from "redux-create-reducer";
// todo ts declaration file for number-drive or write ts version of numberdrive
// @ts-ignore
import numberdrive from "@behrenle/number-drive";
import {Language, SignificantDigits} from "../settings/types";

const script = new numberdrive.Script("en",);
const defaultState: Session = {
    currentInput: "",
    selectedCell: -1,
    editCell: false,
    document: {
        title: "",
        cells: []
    }
};

const evaluateInput = (input: string, lang: Language, sigDigits: SignificantDigits): string => {
    if (input.length > 0) {
        script.evaluate(input, lang, parseInt(sigDigits + ""));
        const output = script.getItems().slice(-1)[0].output;
        return output ? output : "";
    }
    return "";
}

const clearScope = () => {
    script.clearUserScope();
};

const sessionReducer = createReducer<Session, SessionAction>(defaultState, {
    CHANGE_CURRENT_INPUT: (state, action) => ({...state, currentInput: action.payload}),

    CLEAR_CURRENT_INPUT: (state) => ({...state, currentInput: ""}),

    CLEAR_DOCUMENT_CELLS: (state) => ({...state, document: defaultState.document}),

    CLEAR_MATH_USER_SCOPE: (state) => {
        clearScope();
        return state;
    },

    PUSH_MATH_CELL: (state, action: PushMathCell) => {
        if (action.payload.content.length > 0) {
            const nextState = {...state};
            nextState.document.cells = nextState.document.cells.concat([{
                type: "MATH",
                input: action.payload.content,
                output: evaluateInput(action.payload.content, action.payload.language, action.payload.significantDigits)
            }]);
            return nextState;
        }
        return {
            ...state, document: {
                ...state.document, cells: state.document.cells.concat([{
                    type: "MATH",
                    input: "",
                    output: "",
                }])
            }
        }
    },

    PUSH_TEXT_CELL: (state, action) => {
        const nextState = {...state};
        nextState.document.cells = nextState.document.cells.concat([{
            type: "TEXT",
            content: action.payload
        }]);
        return nextState;
    },

    UPDATE_MATH_CELL: (state, action) => {
        const selectedCell = state.document.cells[action.payload.index];
        if (selectedCell) {
            const updatedCell: MathCell = {
                type: "MATH",
                input: action.payload.input,
                output: evaluateInput(
                    action.payload.input,
                    action.payload.language,
                    action.payload.significantDigits
                )
            };
            const nextState = {...state};
            if (action.payload.input.length > 0) {
                nextState.document.cells[action.payload.index] = updatedCell;
            } else {
                nextState.document.cells = nextState.document.cells
                    .filter((_, i) => i !== action.payload.index);
            }
            return nextState;
        }
        return state;
    },

    SELECT_CELL: (state, action) => ({...state, selectedCell: action.payload}),

    SET_EDIT_CELL: (state, action) => {
        const nextState = {...state};
        nextState.editCell = action.payload;
        return nextState;
    },

    UPDATE_TEXT_CELL: (state, action) => {
        const nextState = {...state};
        if (action.payload.content.length > 0) {
            nextState.document.cells[action.payload.index] = {
                type: "TEXT",
                content: action.payload.content
            };
        } else {
            nextState.document.cells = nextState.document.cells
                .filter((_, i) => i !== action.payload.index);
        }
        return nextState;
    },

    REFRESH_MATH_CELLS: (state, action) => {
        clearScope();
        const updatedCells = state.document.cells.map((cell: Cell): Cell => cell.type === "MATH"
            ? {
                type: "MATH", input: cell.input, output: evaluateInput(
                    cell.input, action.payload.language, action.payload.significantDigits
                )
            } : cell);
        const nextState = {...state};
        nextState.document.cells = updatedCells;
        return nextState;
    }
});

export default sessionReducer;