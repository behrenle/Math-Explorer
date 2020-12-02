import {SessionAction} from "./types";
import {Language, SignificantDigits} from "../settings/types";

export const changeCurrentInput = (input: string): SessionAction => {
    return {
        type: "CHANGE_CURRENT_INPUT",
        payload: input
    };
};

export const clearCurrentInput = (): SessionAction => {
    return {
        type: "CLEAR_CURRENT_INPUT"
    };
};

export const evaluate = (language: Language, significantDigits: SignificantDigits): SessionAction => {
    return {
        type: "EVALUATE_INPUT",
        payload: {
            language,
            significantDigits
        }
    };
};

export const clearMathHistory = (): SessionAction => {
    return {
        type: "CLEAR_MATH_HISTORY"
    };
};

export const clearMathUserScope = (): SessionAction => {
    return {
        type: "CLEAR_MATH_USER_SCOPE"
    };
};