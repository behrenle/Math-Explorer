import {Session, SessionAction} from "./types";
// todo ts declaration file for number-drive or write ts version of numberdrive
// @ts-ignore
import numberdrive from "@behrenle/number-drive";

const script = new numberdrive.Script("en", );

const initialState: Session = {
    currentInput: "",
    mathHistory: []
};

/* todo use redux-create-reducer package */
const sessionReducer = (state = initialState, action: SessionAction): Session => {
    switch (action.type) {
        case "CHANGE_CURRENT_INPUT":
            return {...state, currentInput: action.payload};

        case "CLEAR_CURRENT_INPUT":
            return {...state, currentInput: ""};

        case "CLEAR_MATH_HISTORY":
            return {...state, mathHistory: []};

        case "EVALUATE_INPUT":
            script.evaluate(
                state.currentInput,
                action.payload.language,
                parseInt(action.payload.significantDigits + "") // fix typescript bug
            );
            const scriptItems = script.getItems();
            return {...state, mathHistory: state.mathHistory.concat(scriptItems.slice(-1))};

        case "CLEAR_MATH_USER_SCOPE":
            /* todo clear user scope */
            script.clearUserScope();
            return state;

        default:
            return state;
    }
}

export default sessionReducer;