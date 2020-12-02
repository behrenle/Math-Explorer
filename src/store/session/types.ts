import {SignificantDigits, Language} from "../settings/types";

/* state types */
export interface MathHistoryItem {
    input: string,
    output: string
}

type MathHistory = MathHistoryItem[];

export interface Session {
    currentInput: string,
    mathHistory: MathHistory
}

/* action types */
interface ChangeCurrentInput {
    type: "CHANGE_CURRENT_INPUT",
    payload: string
}

interface ClearCurrentInput {
    type: "CLEAR_CURRENT_INPUT"
}

interface EvaluateInput {
    type: "EVALUATE_INPUT",
    payload: {
        language: Language,
        significantDigits: SignificantDigits
    },
}

interface ClearMathHistory {
    type: "CLEAR_MATH_HISTORY",
}

interface ClearMathUserScope {
    type: "CLEAR_MATH_USER_SCOPE",
}

export type SessionAction = ChangeCurrentInput
    | ClearCurrentInput
    | EvaluateInput
    | ClearMathHistory
    | ClearMathUserScope;