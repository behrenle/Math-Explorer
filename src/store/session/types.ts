import {SignificantDigits, Language} from "../settings/types";

/* state types */
export interface MathHistoryItem {
    input: string,
    output: string
}

type MathHistory = MathHistoryItem[];

export interface Session {
    mathHistory: MathHistory
}

/* action types */
interface EvaluateInput {
    type: "EVALUATE_INPUT",
    payload: {
        input: string,
        language: Language;
        significantDigits: SignificantDigits
    },
}

interface ClearMathHistory {
    type: "CLEAR_MATH_HISTORY",
}

interface ClearMathUserScope {
    type: "CLEAR_MATH_USER_SCOPE",
}

export type SessionAction = EvaluateInput | ClearMathHistory | ClearMathUserScope;