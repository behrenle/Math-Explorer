export interface MathCell {
    input: string,
    output: string
}

export interface TextCell {
    content: string
}

export type Cell = MathCell | TextCell;

export interface Document {
    title: string,
    content: Cell[]
}

