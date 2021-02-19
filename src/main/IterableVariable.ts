import { Getter, VariableBooleanPair, VariableMap } from "./types";

export default class IterableVariable {
    private maxValue: number;
    private currentValue: number;
    private size: number;
    private variableMap: VariableMap;

    constructor() {
        this.maxValue = 1;
        this.currentValue = 0;
        this.size = 0;
        this.variableMap = {};
    }

    register(variable: string): void {
        if (this.getVariables().indexOf(variable) > -1) {
            return;
        }
        var nextIndex: number = this.size;
        this.variableMap = {
            ...this.variableMap,
            [variable]: nextIndex
        };
        this.maxValue <<= 1;
        this.size++;
    }

    getIndex(variable: string): number {
        return this.variableMap[variable];
    }

    getVariables(): Array<string> {
        return Object.keys(this.variableMap);
    }

    capture(): VariableBooleanPair | string {
        const variables = this.getVariables();
        if (variables.length === 0) {
            return "Empty Variables";
        }
        return variables.map(variable => ({
            [variable]: this.getter(variable)()
        })).reduce((p, c) => ({ ...p, ...c }));
    }

    getter(variable: string): Getter {
        return () => {
            var index: number = this.getIndex(variable);
            return (((this.currentValue >> (this.size - index - 1)) & 0x1) === 1);
        };
    }

    increase(): boolean {
        return (++this.currentValue) < this.maxValue;
    }
}