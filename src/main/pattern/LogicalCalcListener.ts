// Generated from src/main/pattern/LogicalCalc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StmtContext } from "./LogicalCalcParser";
import { Rest_iffContext } from "./LogicalCalcParser";
import { Iff_operandContext } from "./LogicalCalcParser";
import { Rest_ifContext } from "./LogicalCalcParser";
import { If_operandContext } from "./LogicalCalcParser";
import { Rest_orContext } from "./LogicalCalcParser";
import { Or_operandContext } from "./LogicalCalcParser";
import { Rest_andContext } from "./LogicalCalcParser";
import { And_operandContext } from "./LogicalCalcParser";
import { OperandContext } from "./LogicalCalcParser";
import { VariablesContext } from "./LogicalCalcParser";
import { True_symContext } from "./LogicalCalcParser";
import { False_symContext } from "./LogicalCalcParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LogicalCalcParser`.
 */
export interface LogicalCalcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LogicalCalcParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `LogicalCalcParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `LogicalCalcParser.rest_iff`.
	 * @param ctx the parse tree
	 */
	enterRest_iff?: (ctx: Rest_iffContext) => void;
	/**
	 * Exit a parse tree produced by `LogicalCalcParser.rest_iff`.
	 * @param ctx the parse tree
	 */
	exitRest_iff?: (ctx: Rest_iffContext) => void;

	/**
	 * Enter a parse tree produced by `LogicalCalcParser.iff_operand`.
	 * @param ctx the parse tree
	 */
	enterIff_operand?: (ctx: Iff_operandContext) => void;
	/**
	 * Exit a parse tree produced by `LogicalCalcParser.iff_operand`.
	 * @param ctx the parse tree
	 */
	exitIff_operand?: (ctx: Iff_operandContext) => void;

	/**
	 * Enter a parse tree produced by `LogicalCalcParser.rest_if`.
	 * @param ctx the parse tree
	 */
	enterRest_if?: (ctx: Rest_ifContext) => void;
	/**
	 * Exit a parse tree produced by `LogicalCalcParser.rest_if`.
	 * @param ctx the parse tree
	 */
	exitRest_if?: (ctx: Rest_ifContext) => void;

	/**
	 * Enter a parse tree produced by `LogicalCalcParser.if_operand`.
	 * @param ctx the parse tree
	 */
	enterIf_operand?: (ctx: If_operandContext) => void;
	/**
	 * Exit a parse tree produced by `LogicalCalcParser.if_operand`.
	 * @param ctx the parse tree
	 */
	exitIf_operand?: (ctx: If_operandContext) => void;

	/**
	 * Enter a parse tree produced by `LogicalCalcParser.rest_or`.
	 * @param ctx the parse tree
	 */
	enterRest_or?: (ctx: Rest_orContext) => void;
	/**
	 * Exit a parse tree produced by `LogicalCalcParser.rest_or`.
	 * @param ctx the parse tree
	 */
	exitRest_or?: (ctx: Rest_orContext) => void;

	/**
	 * Enter a parse tree produced by `LogicalCalcParser.or_operand`.
	 * @param ctx the parse tree
	 */
	enterOr_operand?: (ctx: Or_operandContext) => void;
	/**
	 * Exit a parse tree produced by `LogicalCalcParser.or_operand`.
	 * @param ctx the parse tree
	 */
	exitOr_operand?: (ctx: Or_operandContext) => void;

	/**
	 * Enter a parse tree produced by `LogicalCalcParser.rest_and`.
	 * @param ctx the parse tree
	 */
	enterRest_and?: (ctx: Rest_andContext) => void;
	/**
	 * Exit a parse tree produced by `LogicalCalcParser.rest_and`.
	 * @param ctx the parse tree
	 */
	exitRest_and?: (ctx: Rest_andContext) => void;

	/**
	 * Enter a parse tree produced by `LogicalCalcParser.and_operand`.
	 * @param ctx the parse tree
	 */
	enterAnd_operand?: (ctx: And_operandContext) => void;
	/**
	 * Exit a parse tree produced by `LogicalCalcParser.and_operand`.
	 * @param ctx the parse tree
	 */
	exitAnd_operand?: (ctx: And_operandContext) => void;

	/**
	 * Enter a parse tree produced by `LogicalCalcParser.operand`.
	 * @param ctx the parse tree
	 */
	enterOperand?: (ctx: OperandContext) => void;
	/**
	 * Exit a parse tree produced by `LogicalCalcParser.operand`.
	 * @param ctx the parse tree
	 */
	exitOperand?: (ctx: OperandContext) => void;

	/**
	 * Enter a parse tree produced by `LogicalCalcParser.variables`.
	 * @param ctx the parse tree
	 */
	enterVariables?: (ctx: VariablesContext) => void;
	/**
	 * Exit a parse tree produced by `LogicalCalcParser.variables`.
	 * @param ctx the parse tree
	 */
	exitVariables?: (ctx: VariablesContext) => void;

	/**
	 * Enter a parse tree produced by `LogicalCalcParser.true_sym`.
	 * @param ctx the parse tree
	 */
	enterTrue_sym?: (ctx: True_symContext) => void;
	/**
	 * Exit a parse tree produced by `LogicalCalcParser.true_sym`.
	 * @param ctx the parse tree
	 */
	exitTrue_sym?: (ctx: True_symContext) => void;

	/**
	 * Enter a parse tree produced by `LogicalCalcParser.false_sym`.
	 * @param ctx the parse tree
	 */
	enterFalse_sym?: (ctx: False_symContext) => void;
	/**
	 * Exit a parse tree produced by `LogicalCalcParser.false_sym`.
	 * @param ctx the parse tree
	 */
	exitFalse_sym?: (ctx: False_symContext) => void;
}

