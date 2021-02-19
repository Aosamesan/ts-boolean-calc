import { CharStreams, CommonTokenStream } from "antlr4ts";
import LogicalCalcListenerImpl from "./LogicalCalcListenerImpl";
import { LogicalCalcLexer } from "./pattern/LogicalCalcLexer";
import { LogicalCalcParser } from "./pattern/LogicalCalcParser";
import { CalcResult } from "./types";
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';


export default async function calculate(input: string): Promise<Array<CalcResult>> {
    return new Promise((resolve, reject) => {
        try {
            const charStream = CharStreams.fromString(input);
            const lexer = new LogicalCalcLexer(charStream);
            const tokens = new CommonTokenStream(lexer);
            const parser = new LogicalCalcParser(tokens);
            const listener = new LogicalCalcListenerImpl();
            const tree = parser.stmt();
            ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, tree);
            const result = listener.calculate();
            resolve(result);
        } catch (e) {
            reject(e);
        }
    });
}