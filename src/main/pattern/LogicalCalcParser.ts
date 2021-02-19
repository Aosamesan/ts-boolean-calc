// Generated from src/main/pattern/LogicalCalc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LogicalCalcListener } from "./LogicalCalcListener";

export class LogicalCalcParser extends Parser {
	public static readonly VARIABLES = 1;
	public static readonly TRUE = 2;
	public static readonly FALSE = 3;
	public static readonly LPAREN = 4;
	public static readonly RPAREN = 5;
	public static readonly IFF_OPERATOR = 6;
	public static readonly IF_OPERATOR = 7;
	public static readonly OR_OPERATOR = 8;
	public static readonly AND_OPERATOR = 9;
	public static readonly NOT_OPERATOR = 10;
	public static readonly WS = 11;
	public static readonly RULE_stmt = 0;
	public static readonly RULE_rest_iff = 1;
	public static readonly RULE_iff_operand = 2;
	public static readonly RULE_rest_if = 3;
	public static readonly RULE_if_operand = 4;
	public static readonly RULE_rest_or = 5;
	public static readonly RULE_or_operand = 6;
	public static readonly RULE_rest_and = 7;
	public static readonly RULE_and_operand = 8;
	public static readonly RULE_operand = 9;
	public static readonly RULE_variables = 10;
	public static readonly RULE_true_sym = 11;
	public static readonly RULE_false_sym = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"stmt", "rest_iff", "iff_operand", "rest_if", "if_operand", "rest_or", 
		"or_operand", "rest_and", "and_operand", "operand", "variables", "true_sym", 
		"false_sym",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "VARIABLES", "TRUE", "FALSE", "LPAREN", "RPAREN", "IFF_OPERATOR", 
		"IF_OPERATOR", "OR_OPERATOR", "AND_OPERATOR", "NOT_OPERATOR", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LogicalCalcParser._LITERAL_NAMES, LogicalCalcParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LogicalCalcParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "LogicalCalc.g4"; }

	// @Override
	public get ruleNames(): string[] { return LogicalCalcParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LogicalCalcParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LogicalCalcParser._ATN, this);
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LogicalCalcParser.RULE_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.iff_operand();
			this.state = 30;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LogicalCalcParser.IFF_OPERATOR) {
				{
				{
				this.state = 27;
				this.rest_iff();
				}
				}
				this.state = 32;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 33;
			this.match(LogicalCalcParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rest_iff(): Rest_iffContext {
		let _localctx: Rest_iffContext = new Rest_iffContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, LogicalCalcParser.RULE_rest_iff);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			_localctx._op = this.match(LogicalCalcParser.IFF_OPERATOR);
			this.state = 36;
			this.iff_operand();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iff_operand(): Iff_operandContext {
		let _localctx: Iff_operandContext = new Iff_operandContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LogicalCalcParser.RULE_iff_operand);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.if_operand();
			this.state = 42;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 39;
					this.rest_if();
					}
					}
				}
				this.state = 44;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rest_if(): Rest_ifContext {
		let _localctx: Rest_ifContext = new Rest_ifContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LogicalCalcParser.RULE_rest_if);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			_localctx._op = this.match(LogicalCalcParser.IF_OPERATOR);
			this.state = 46;
			this.iff_operand();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_operand(): If_operandContext {
		let _localctx: If_operandContext = new If_operandContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LogicalCalcParser.RULE_if_operand);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.or_operand();
			this.state = 52;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 49;
					this.rest_or();
					}
					}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rest_or(): Rest_orContext {
		let _localctx: Rest_orContext = new Rest_orContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LogicalCalcParser.RULE_rest_or);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			_localctx._op = this.match(LogicalCalcParser.OR_OPERATOR);
			this.state = 56;
			this.if_operand();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public or_operand(): Or_operandContext {
		let _localctx: Or_operandContext = new Or_operandContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LogicalCalcParser.RULE_or_operand);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.and_operand();
			this.state = 62;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 59;
					this.rest_and();
					}
					}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rest_and(): Rest_andContext {
		let _localctx: Rest_andContext = new Rest_andContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LogicalCalcParser.RULE_rest_and);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			_localctx._op = this.match(LogicalCalcParser.AND_OPERATOR);
			this.state = 66;
			this.or_operand();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public and_operand(): And_operandContext {
		let _localctx: And_operandContext = new And_operandContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LogicalCalcParser.RULE_and_operand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LogicalCalcParser.NOT_OPERATOR) {
				{
				this.state = 68;
				_localctx._op = this.match(LogicalCalcParser.NOT_OPERATOR);
				}
			}

			this.state = 71;
			this.operand();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operand(): OperandContext {
		let _localctx: OperandContext = new OperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, LogicalCalcParser.RULE_operand);
		try {
			this.state = 80;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LogicalCalcParser.VARIABLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 73;
				this.variables();
				}
				break;
			case LogicalCalcParser.TRUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 74;
				this.true_sym();
				}
				break;
			case LogicalCalcParser.FALSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 75;
				this.false_sym();
				}
				break;
			case LogicalCalcParser.LPAREN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 76;
				this.match(LogicalCalcParser.LPAREN);
				this.state = 77;
				this.stmt();
				this.state = 78;
				this.match(LogicalCalcParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variables(): VariablesContext {
		let _localctx: VariablesContext = new VariablesContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LogicalCalcParser.RULE_variables);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(LogicalCalcParser.VARIABLES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public true_sym(): True_symContext {
		let _localctx: True_symContext = new True_symContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LogicalCalcParser.RULE_true_sym);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(LogicalCalcParser.TRUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public false_sym(): False_symContext {
		let _localctx: False_symContext = new False_symContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LogicalCalcParser.RULE_false_sym);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(LogicalCalcParser.FALSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r[\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E" +
		"\t\x0E\x03\x02\x03\x02\x07\x02\x1F\n\x02\f\x02\x0E\x02\"\v\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x07\x04+\n\x04\f\x04" +
		"\x0E\x04.\v\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x07\x065\n\x06" +
		"\f\x06\x0E\x068\v\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x07\b?\n\b\f" +
		"\b\x0E\bB\v\b\x03\t\x03\t\x03\t\x03\n\x05\nH\n\n\x03\n\x03\n\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\vS\n\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x02\x02\x02\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x02" +
		"\x02U\x02\x1C\x03\x02\x02\x02\x04%\x03\x02\x02\x02\x06(\x03\x02\x02\x02" +
		"\b/\x03\x02\x02\x02\n2\x03\x02\x02\x02\f9\x03\x02\x02\x02\x0E<\x03\x02" +
		"\x02\x02\x10C\x03\x02\x02\x02\x12G\x03\x02\x02\x02\x14R\x03\x02\x02\x02" +
		"\x16T\x03\x02\x02\x02\x18V\x03\x02\x02\x02\x1AX\x03\x02\x02\x02\x1C \x05" +
		"\x06\x04\x02\x1D\x1F\x05\x04\x03\x02\x1E\x1D\x03\x02\x02\x02\x1F\"\x03" +
		"\x02\x02\x02 \x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!#\x03\x02\x02\x02" +
		"\" \x03\x02\x02\x02#$\x07\x02\x02\x03$\x03\x03\x02\x02\x02%&\x07\b\x02" +
		"\x02&\'\x05\x06\x04\x02\'\x05\x03\x02\x02\x02(,\x05\n\x06\x02)+\x05\b" +
		"\x05\x02*)\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02" +
		"\x02\x02-\x07\x03\x02\x02\x02.,\x03\x02\x02\x02/0\x07\t\x02\x0201\x05" +
		"\x06\x04\x021\t\x03\x02\x02\x0226\x05\x0E\b\x0235\x05\f\x07\x0243\x03" +
		"\x02\x02\x0258\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x027\v" +
		"\x03\x02\x02\x0286\x03\x02\x02\x029:\x07\n\x02\x02:;\x05\n\x06\x02;\r" +
		"\x03\x02\x02\x02<@\x05\x12\n\x02=?\x05\x10\t\x02>=\x03\x02\x02\x02?B\x03" +
		"\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02A\x0F\x03\x02\x02\x02" +
		"B@\x03\x02\x02\x02CD\x07\v\x02\x02DE\x05\x0E\b\x02E\x11\x03\x02\x02\x02" +
		"FH\x07\f\x02\x02GF\x03\x02\x02\x02GH\x03\x02\x02\x02HI\x03\x02\x02\x02" +
		"IJ\x05\x14\v\x02J\x13\x03\x02\x02\x02KS\x05\x16\f\x02LS\x05\x18\r\x02" +
		"MS\x05\x1A\x0E\x02NO\x07\x06\x02\x02OP\x05\x02\x02\x02PQ\x07\x07\x02\x02" +
		"QS\x03\x02\x02\x02RK\x03\x02\x02\x02RL\x03\x02\x02\x02RM\x03\x02\x02\x02" +
		"RN\x03\x02\x02\x02S\x15\x03\x02\x02\x02TU\x07\x03\x02\x02U\x17\x03\x02" +
		"\x02\x02VW\x07\x04\x02\x02W\x19\x03\x02\x02\x02XY\x07\x05\x02\x02Y\x1B" +
		"\x03\x02\x02\x02\b ,6@GR";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LogicalCalcParser.__ATN) {
			LogicalCalcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LogicalCalcParser._serializedATN));
		}

		return LogicalCalcParser.__ATN;
	}

}

export class StmtContext extends ParserRuleContext {
	public iff_operand(): Iff_operandContext {
		return this.getRuleContext(0, Iff_operandContext);
	}
	public EOF(): TerminalNode { return this.getToken(LogicalCalcParser.EOF, 0); }
	public rest_iff(): Rest_iffContext[];
	public rest_iff(i: number): Rest_iffContext;
	public rest_iff(i?: number): Rest_iffContext | Rest_iffContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rest_iffContext);
		} else {
			return this.getRuleContext(i, Rest_iffContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogicalCalcParser.RULE_stmt; }
	// @Override
	public enterRule(listener: LogicalCalcListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: LogicalCalcListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
}


export class Rest_iffContext extends ParserRuleContext {
	public _op!: Token;
	public iff_operand(): Iff_operandContext {
		return this.getRuleContext(0, Iff_operandContext);
	}
	public IFF_OPERATOR(): TerminalNode { return this.getToken(LogicalCalcParser.IFF_OPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogicalCalcParser.RULE_rest_iff; }
	// @Override
	public enterRule(listener: LogicalCalcListener): void {
		if (listener.enterRest_iff) {
			listener.enterRest_iff(this);
		}
	}
	// @Override
	public exitRule(listener: LogicalCalcListener): void {
		if (listener.exitRest_iff) {
			listener.exitRest_iff(this);
		}
	}
}


export class Iff_operandContext extends ParserRuleContext {
	public if_operand(): If_operandContext {
		return this.getRuleContext(0, If_operandContext);
	}
	public rest_if(): Rest_ifContext[];
	public rest_if(i: number): Rest_ifContext;
	public rest_if(i?: number): Rest_ifContext | Rest_ifContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rest_ifContext);
		} else {
			return this.getRuleContext(i, Rest_ifContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogicalCalcParser.RULE_iff_operand; }
	// @Override
	public enterRule(listener: LogicalCalcListener): void {
		if (listener.enterIff_operand) {
			listener.enterIff_operand(this);
		}
	}
	// @Override
	public exitRule(listener: LogicalCalcListener): void {
		if (listener.exitIff_operand) {
			listener.exitIff_operand(this);
		}
	}
}


export class Rest_ifContext extends ParserRuleContext {
	public _op!: Token;
	public iff_operand(): Iff_operandContext {
		return this.getRuleContext(0, Iff_operandContext);
	}
	public IF_OPERATOR(): TerminalNode { return this.getToken(LogicalCalcParser.IF_OPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogicalCalcParser.RULE_rest_if; }
	// @Override
	public enterRule(listener: LogicalCalcListener): void {
		if (listener.enterRest_if) {
			listener.enterRest_if(this);
		}
	}
	// @Override
	public exitRule(listener: LogicalCalcListener): void {
		if (listener.exitRest_if) {
			listener.exitRest_if(this);
		}
	}
}


export class If_operandContext extends ParserRuleContext {
	public or_operand(): Or_operandContext {
		return this.getRuleContext(0, Or_operandContext);
	}
	public rest_or(): Rest_orContext[];
	public rest_or(i: number): Rest_orContext;
	public rest_or(i?: number): Rest_orContext | Rest_orContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rest_orContext);
		} else {
			return this.getRuleContext(i, Rest_orContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogicalCalcParser.RULE_if_operand; }
	// @Override
	public enterRule(listener: LogicalCalcListener): void {
		if (listener.enterIf_operand) {
			listener.enterIf_operand(this);
		}
	}
	// @Override
	public exitRule(listener: LogicalCalcListener): void {
		if (listener.exitIf_operand) {
			listener.exitIf_operand(this);
		}
	}
}


export class Rest_orContext extends ParserRuleContext {
	public _op!: Token;
	public if_operand(): If_operandContext {
		return this.getRuleContext(0, If_operandContext);
	}
	public OR_OPERATOR(): TerminalNode { return this.getToken(LogicalCalcParser.OR_OPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogicalCalcParser.RULE_rest_or; }
	// @Override
	public enterRule(listener: LogicalCalcListener): void {
		if (listener.enterRest_or) {
			listener.enterRest_or(this);
		}
	}
	// @Override
	public exitRule(listener: LogicalCalcListener): void {
		if (listener.exitRest_or) {
			listener.exitRest_or(this);
		}
	}
}


export class Or_operandContext extends ParserRuleContext {
	public and_operand(): And_operandContext {
		return this.getRuleContext(0, And_operandContext);
	}
	public rest_and(): Rest_andContext[];
	public rest_and(i: number): Rest_andContext;
	public rest_and(i?: number): Rest_andContext | Rest_andContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rest_andContext);
		} else {
			return this.getRuleContext(i, Rest_andContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogicalCalcParser.RULE_or_operand; }
	// @Override
	public enterRule(listener: LogicalCalcListener): void {
		if (listener.enterOr_operand) {
			listener.enterOr_operand(this);
		}
	}
	// @Override
	public exitRule(listener: LogicalCalcListener): void {
		if (listener.exitOr_operand) {
			listener.exitOr_operand(this);
		}
	}
}


export class Rest_andContext extends ParserRuleContext {
	public _op!: Token;
	public or_operand(): Or_operandContext {
		return this.getRuleContext(0, Or_operandContext);
	}
	public AND_OPERATOR(): TerminalNode { return this.getToken(LogicalCalcParser.AND_OPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogicalCalcParser.RULE_rest_and; }
	// @Override
	public enterRule(listener: LogicalCalcListener): void {
		if (listener.enterRest_and) {
			listener.enterRest_and(this);
		}
	}
	// @Override
	public exitRule(listener: LogicalCalcListener): void {
		if (listener.exitRest_and) {
			listener.exitRest_and(this);
		}
	}
}


export class And_operandContext extends ParserRuleContext {
	public _op!: Token;
	public operand(): OperandContext {
		return this.getRuleContext(0, OperandContext);
	}
	public NOT_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(LogicalCalcParser.NOT_OPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogicalCalcParser.RULE_and_operand; }
	// @Override
	public enterRule(listener: LogicalCalcListener): void {
		if (listener.enterAnd_operand) {
			listener.enterAnd_operand(this);
		}
	}
	// @Override
	public exitRule(listener: LogicalCalcListener): void {
		if (listener.exitAnd_operand) {
			listener.exitAnd_operand(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	public variables(): VariablesContext | undefined {
		return this.tryGetRuleContext(0, VariablesContext);
	}
	public true_sym(): True_symContext | undefined {
		return this.tryGetRuleContext(0, True_symContext);
	}
	public false_sym(): False_symContext | undefined {
		return this.tryGetRuleContext(0, False_symContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(LogicalCalcParser.LPAREN, 0); }
	public stmt(): StmtContext | undefined {
		return this.tryGetRuleContext(0, StmtContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(LogicalCalcParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogicalCalcParser.RULE_operand; }
	// @Override
	public enterRule(listener: LogicalCalcListener): void {
		if (listener.enterOperand) {
			listener.enterOperand(this);
		}
	}
	// @Override
	public exitRule(listener: LogicalCalcListener): void {
		if (listener.exitOperand) {
			listener.exitOperand(this);
		}
	}
}


export class VariablesContext extends ParserRuleContext {
	public VARIABLES(): TerminalNode { return this.getToken(LogicalCalcParser.VARIABLES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogicalCalcParser.RULE_variables; }
	// @Override
	public enterRule(listener: LogicalCalcListener): void {
		if (listener.enterVariables) {
			listener.enterVariables(this);
		}
	}
	// @Override
	public exitRule(listener: LogicalCalcListener): void {
		if (listener.exitVariables) {
			listener.exitVariables(this);
		}
	}
}


export class True_symContext extends ParserRuleContext {
	public TRUE(): TerminalNode { return this.getToken(LogicalCalcParser.TRUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogicalCalcParser.RULE_true_sym; }
	// @Override
	public enterRule(listener: LogicalCalcListener): void {
		if (listener.enterTrue_sym) {
			listener.enterTrue_sym(this);
		}
	}
	// @Override
	public exitRule(listener: LogicalCalcListener): void {
		if (listener.exitTrue_sym) {
			listener.exitTrue_sym(this);
		}
	}
}


export class False_symContext extends ParserRuleContext {
	public FALSE(): TerminalNode { return this.getToken(LogicalCalcParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogicalCalcParser.RULE_false_sym; }
	// @Override
	public enterRule(listener: LogicalCalcListener): void {
		if (listener.enterFalse_sym) {
			listener.enterFalse_sym(this);
		}
	}
	// @Override
	public exitRule(listener: LogicalCalcListener): void {
		if (listener.exitFalse_sym) {
			listener.exitFalse_sym(this);
		}
	}
}


