import { FractionalNumber } from "./fractional-number";


export class Calculator {
    public static execute(exp: string): string {
        let bracketsRegexp = /\((?:[^(]*?\))/;
        let fracRegexp = /^\s*(-?[\d]+\/-?[\d]+|-?[\d]+)/;
        let operatorRegexp = /[+-/*]/;
        exp = `(${exp})`;
        let curBrackets = exp.match(bracketsRegexp);
        while(curBrackets && curBrackets.index !== undefined) {
            let curExpression = curBrackets[0].slice(1, -1);
            let curExpLikeArray = [];
            while(curExpression) {
                if(curExpression.match(fracRegexp)) {
                    let value = curExpression.match(fracRegexp)
                }
            }
            exp = exp.slice(0, curBrackets.index) + "0" + exp.slice(curBrackets.index + curBrackets[0].length);
            curBrackets = exp.match(bracketsRegexp);
        }
    }
}
