import {Session, SessionAction} from "./types";
// todo ts declaration file for number-drive or write ts version of numberdrive
// @ts-ignore
import numberdrive from "@behrenle/number-drive";

const script = new numberdrive.Script("en", );

const initialState: Session = {
    mathHistory: []
};

/* todo use redux-create-reducer package */
const sessionReducer = (state = initialState, action: SessionAction): Session => {
    switch (action.type) {
        case "CLEAR_MATH_HISTORY":
            return {mathHistory: []};

        case "EVALUATE_INPUT":
            script.evaluate(
                action.payload.input,
                action.payload.language,
                parseInt(action.payload.significantDigits + "") // fix typescript bug
            );
            return {mathHistory: script.getItems()};

        case "CLEAR_MATH_USER_SCOPE":
            /* todo clear user scope */
            return state;

        default:
            return state;
    }
}

export default sessionReducer;