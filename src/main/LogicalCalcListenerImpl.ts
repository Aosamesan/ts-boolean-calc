import IterableVariable from './IterableVariable';
import { LogicalCalcListener } from './pattern/LogicalCalcListener';
import { And_operandContext, False_symContext, Rest_andContext, Rest_ifContext, Rest_iffContext, Rest_orContext, StmtContext, True_symContext, VariablesContext } from './pattern/LogicalCalcParser';
import { CalcResult, Getter } from './types';

export default class LogicalCalcListenerImpl implements LogicalCalcListener {
    private calculatorStack: Array<Array<Getter>>;
    private iterableVariable: IterableVariable;

    constructor() {
        this.calculatorStack = [];
        this.iterableVariable = new IterableVariable();
    }

    calculate(): Array<CalcResult> {
        const result: Array<CalcResult> = [];
        const calculator = this.build();

        do {
            const currentState = this.iterableVariable.capture();
            const calculateResult = calculator();
            result.push({
                "variables": currentState,
                "result": calculateResult
            });
        } while (this.iterableVariable.increase());

        return result;
    }

    build(): Getter {
        if (this.calculatorStack.length === 1) {
            const frame = this.calculatorStack.pop();
            if (frame?.length === 1) {
                const calc = frame.pop();
                if (calc !== undefined) {
                    return calc;
                }
            }
        }

        throw new Error('Something wrong...');
    }

    getLastFrame(): Array<Getter> | undefined {
        return this.calculatorStack[this.calculatorStack.length - 1];
    }

    enterStmt(ctx: StmtContext) {
        this.calculatorStack.push([]);
    }

    exitStmt(ctx: StmtContext) {
        if (this.calculatorStack.length > 1) {
            const frame = this.calculatorStack.pop();
            if (frame?.length === 1) {
                const lastFrame = this.getLastFrame();
                const g = frame.pop();
                if (g) {
                    lastFrame?.push(g);
                    return;
                }
            }
        } else {
            return;
        }

        throw new Error('Something wrong...');
    }

    exitVariables(ctx: VariablesContext) {
        const v = ctx.text;
        this.iterableVariable.register(v);
        const lastFrame = this.getLastFrame();
        const g = this.iterableVariable.getter(v);
        lastFrame?.push(g);
    }

    exitTrue_sym(ctx: True_symContext) {
        const lastFrame = this.getLastFrame();
        lastFrame?.push(() => true);
    }

    exitFalse_sym(ctx: False_symContext) {
        const lastFrame = this.getLastFrame();
        lastFrame?.push(() => false);
    }

    exitAnd_operand(ctx: And_operandContext) {
        if (ctx._op) {
            const lastFrame = this.getLastFrame();
            const top = lastFrame?.pop();
            if (top) {
                lastFrame?.push(() => !top());
            }
        }
    }

    exitRest_and(ctx: Rest_andContext) {
        const lastFrame = this.getLastFrame();
        const post = lastFrame?.pop();
        const prev = lastFrame?.pop();
        if (post && prev) {
            lastFrame?.push(() => prev() && post());
        }
    }

    exitRest_or(ctx: Rest_orContext) {
        const lastFrame = this.getLastFrame();
        const post = lastFrame?.pop();
        const prev = lastFrame?.pop();
        if (post && prev) {
            lastFrame?.push(() => prev() || post());
        }
    }
    
    exitRest_if(ctx: Rest_ifContext) {
        const lastFrame = this.getLastFrame();
        const post = lastFrame?.pop();
        const prev = lastFrame?.pop();
        if (post && prev) {
            lastFrame?.push(() => ((!prev()) || post()));
        }
    }

    exitRest_iff(ctx: Rest_iffContext) {
        const lastFrame = this.getLastFrame();
        const post = lastFrame?.pop();
        const prev = lastFrame?.pop();
        if (post && prev) {
            lastFrame?.push(() => prev() === post());
        }
    }

}