import {SignificantDigits, Language} from "../settings/types";

/* state types */
export interface MathCell {
    type: "MATH",
    input: string,
    output: string
}

export interface TextCell {
    type: "TEXT",
    content: string
}

export type Cell = MathCell | TextCell;

export interface Document {
    title: string,
    cells: Cell[]
}

export interface Session {
    currentInput: string,
    document: Document
}

/* action types */
interface ChangeCurrentInput {
    type: "CHANGE_CURRENT_INPUT",
    payload: string
}

interface ClearCurrentInput {
    type: "CLEAR_CURRENT_INPUT"
}

interface ClearMathHistory {
    type: "CLEAR_MATH_HISTORY",
}

interface ClearMathUserScope {
    type: "CLEAR_MATH_USER_SCOPE",
}

interface PushTextCell {
    type: "PUSH_TEXT_CELL",
    payload: string
}

interface PushMathCell {
    type: "PUSH_MATH_CELL",
    payload: {
        content: string,
        language: Language,
        significantDigits: SignificantDigits
    }
}

export type SessionAction = ChangeCurrentInput
    | ClearCurrentInput
    | ClearMathHistory
    | ClearMathUserScope
    | PushTextCell
    | PushMathCell;