export type VariableMap = { [key: string]: number };
export type Getter = () => boolean;
export type VariableBooleanPair = { [variable: string]: boolean };
export type CalcResult = {
    "variables": VariableBooleanPair | string,
    "result": boolean
};