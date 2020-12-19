import {Cell, MathCell} from "../../../../store/session/types";

export const getMathCells = (cells: Cell[]): MathCell[] => {
    return cells.flatMap(cell => cell.type === "MATH" ? [cell] : []);
}

export const getLastOutput = (cells: Cell[]): string => {
    const lastCell = getMathCells(cells).slice(-1)[0];
    return lastCell ? lastCell.output : "";
}