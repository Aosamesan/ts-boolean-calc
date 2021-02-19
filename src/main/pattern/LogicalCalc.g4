grammar LogicalCalc;

stmt
    :   iff_operand rest_iff*   EOF
    ;

rest_iff
    :   op=IFF_OPERATOR iff_operand
    ;

iff_operand
    :   if_operand rest_if*
    ;

rest_if
    :   op=IF_OPERATOR iff_operand
    ;

if_operand
    :   or_operand rest_or*
    ;

rest_or
    :   op=OR_OPERATOR if_operand
    ;

or_operand
    :   and_operand rest_and*
    ;

rest_and
    :   op=AND_OPERATOR or_operand
    ;

and_operand
    :   op=NOT_OPERATOR? operand
    ;

operand
    :   variables
    |   true_sym
    |   false_sym
    |   LPAREN stmt RPAREN
    ;

variables
    :   VARIABLES
    ;

true_sym
    :   TRUE
    ;

false_sym
    :   FALSE
    ;

// Lexer
VARIABLES
    :   [A-Z]
    ;

TRUE
    :   'true'
    |   'True'
    |   'TRUE'
    |   '1'
    ;

FALSE
    :   'false'
    |   'False'
    |   'FALSE'
    |   '0'
    ;

LPAREN
    :   '('
    ;

RPAREN
    :   ')'
    ;


IFF_OPERATOR
    :   '<' ('-' | '=')? '>'
    |   'iff' '.'?
    ;

IF_OPERATOR
    :   ('-' | '=')? '>'
    |   'if'
    |   'implies'
    ;

OR_OPERATOR
    :   'or'
    |   'Or'
    |   'OR'
    |   '|' '|'?
    ;

AND_OPERATOR
    :   'and'
    |   'And'
    |   'AND'
    |   '&' '&'?
    ;

NOT_OPERATOR
    :   '!'
    |   '~'
    ;

WS
    :   [ \t] -> skip
    ;