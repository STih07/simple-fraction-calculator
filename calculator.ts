import { FractionalNumber } from "./fractional-number";
import { FractionalNumberAdapter } from "./fractional-number-adapter";
import { ExpressionParser } from "./expression-parser";
import {CalculatorService} from "./calculator-service";
import {Simplifier} from "./simplifier";

const bracketsRegexp = /\((?:[^(]*?\))/;
const fracRegexp = /^\s*(-?[\d]+\/-?[\d]+|-?[\d]+)/;


export class Calculator {
    /* Magic code, don't touch */
    public static execute(exp: string): string {
        exp = `(${exp})`;
        let curBrackets = exp.match(bracketsRegexp);
        while(curBrackets && curBrackets.index !== undefined) {
            let curExpression = curBrackets[0].slice(1, -1);
            let manual = ExpressionParser.parse(curExpression);
            let primaryOperations: {x:string, index:number}[] = [];
            manual.map((x, index) => {
                if(x === "/" || x === "*") primaryOperations.push({x, index});
            });
            let counter = 0;
            primaryOperations.map(el => {
                let [a, b] = [manual[el.index-1-counter], manual[el.index+1-counter]];
                let value: FractionalNumber;
                if(el.x === "*") value = CalculatorService.mult(<FractionalNumber>a, <FractionalNumber>b);
                else value = CalculatorService.divide(<FractionalNumber>a, <FractionalNumber>b);
                manual.splice(el.index-1-counter, 3, value);
                counter += 2;
            });
            let secondaryOperations: {x:string, index:number}[] = [];
            manual.map((x, index) => {
                if(x === "+" || x === "-") secondaryOperations.push({x, index});
            });
            counter = 0;
            secondaryOperations.map(el => {
                let [a, b] = [manual[el.index-1-counter], manual[el.index+1-counter]];
                let value: FractionalNumber;
                if(el.x === "+") value = CalculatorService.plus(<FractionalNumber>a, <FractionalNumber>b);
                else value = CalculatorService.minus(<FractionalNumber>a, <FractionalNumber>b);
                manual.splice(el.index-1-counter, 3, value);
                counter += 2;
            });
            if(manual.length === 1) {
                let value: FractionalNumber = Simplifier.simplify(manual[0] as FractionalNumber);
                exp = exp.slice(0, curBrackets.index) + ' ' + FractionalNumberAdapter.numberToString(value) + ' ' + exp.slice(curBrackets.index + curBrackets[0].length);
                curBrackets = exp.match(bracketsRegexp);
            } else {
                throw new Error('Unexpected input.')
            }
        }
        if( exp.match(fracRegexp) ) return exp.trim();
        else throw new Error('Unexpected input.');
    }
}
