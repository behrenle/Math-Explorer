import {Session, SessionAction} from "./types";
import {createReducer} from "redux-create-reducer";
// todo ts declaration file for number-drive or write ts version of numberdrive
// @ts-ignore
import numberdrive from "@behrenle/number-drive";

const script = new numberdrive.Script("en",);
const defaultState: Session = {
    currentInput: "",
    document: {
        title: "",
        cells: []
    }
};

const sessionReducer = createReducer<Session, SessionAction>(defaultState, {
    CHANGE_CURRENT_INPUT: (state, action) => ({...state, currentInput: action.payload}),
    CLEAR_CURRENT_INPUT: (state) => ({...state, currentInput: ""}),
    CLEAR_MATH_HISTORY: (state) => ({...state, document: defaultState.document}),
    CLEAR_MATH_USER_SCOPE: (state) => {
        numberdrive.clearUserScope();
        return state;
    },
    PUSH_MATH_CELL: (state, action) => {
        script.evaluate(
            state.currentInput,
            action.payload.language,
            parseInt(action.payload.significantDigits + "")
        );
        const lastItem = script.getItems().slice(-1)[0];
        const stateCopy = {...state};
        stateCopy.document.cells = stateCopy.document.cells.concat([{
            type: "MATH",
            input: lastItem ? lastItem.input : "",
            output: lastItem ? lastItem.output : ""
        }]);
        return stateCopy;
    },
    PUSH_TEXT_CELL: (state, action) => {
        const stateCopy = {...state};
        stateCopy.document.cells = stateCopy.document.cells.concat([{
            type: "TEXT",
            content: action.payload
        }]);
        return stateCopy;
    }
});

export default sessionReducer;