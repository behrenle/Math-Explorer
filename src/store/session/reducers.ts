import {Cell, MathCell, PushMathCell, Session, SessionAction} from "./types";
import {createReducer} from "redux-create-reducer";
import {v4 as uuid} from "uuid";
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
                uuid: uuid(),
                input: action.payload.content,
                output: evaluateInput(action.payload.content, action.payload.language, action.payload.significantDigits)
            }]);
            return nextState;
        }
        return {
            ...state, document: {
                ...state.document, cells: state.document.cells.concat([{
                    type: "MATH",
                    uuid: uuid(),
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
            uuid: uuid(),
            content: action.payload
        }]);
        return nextState;
    },

    UPDATE_MATH_CELL: (state, action) => {
        const selectedCell = state.document.cells[action.payload.index];
        if (selectedCell) {
            const updatedCell: MathCell = {
                type: "MATH",
                uuid: state.document.cells[action.payload.index].uuid,
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
                uuid: state.document.cells[action.payload.index].uuid,
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
                type: "MATH",
                uuid: cell.uuid,
                input: cell.input,
                output: evaluateInput(cell.input, action.payload.language, action.payload.significantDigits)
            } : cell);
        const nextState = {...state};
        nextState.document.cells = updatedCells;
        return nextState;
    },

    DELETE_CELL: (state, action) => {
        const nextState = {...state};
        nextState.document.cells = state.document.cells.filter((_, i) => i !== action.payload);
        return nextState;
    },

    LOAD_DOCUMENT: (state, action) => {
        return {...state, document: action.payload};
    },

    MOVE_CELL_SELECTION_UP: (state) => {
        return {
            ...state,
            selectedCell: Math.max(state.selectedCell - 1, 0)
        };
    },

    MOVE_CELL_SELECTION_DOWN: (state) => {
        return {
            ...state,
            selectedCell: Math.min(state.selectedCell + 1, state.document.cells.length - 1)
        };
    }
});

export default sessionReducer;