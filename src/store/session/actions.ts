import {SessionAction} from "./types";
import {Language, SignificantDigits} from "../settings/types";

export const evaluate = (input: string, language: Language, significantDigits: SignificantDigits): SessionAction => {
    return {
        type: "EVALUATE_INPUT",
        payload: {
            input,
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