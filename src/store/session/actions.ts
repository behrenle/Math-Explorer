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

export const pushMathCell = (content: string, language: Language, significantDigits: SignificantDigits): SessionAction => {
    return {
        type: "PUSH_MATH_CELL",
        payload: {
            content,
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