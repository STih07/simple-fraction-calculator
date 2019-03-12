import {FractionalNumberAdapter} from "./fractional-number-adapter";
import {FractionalNumber, isFractionalNumber} from "./fractional-number";

const fracRegexp = /^\s*(-?[\d]+\/-?[\d]+|-?[\d]+)/;
const operatorRegexp = /^\s*([+\-/*])/;

export class ExpressionParser {
    public static parse(exp: string): Array<string | FractionalNumber> {
        let curExpLikeArray: Array<string | FractionalNumber> = [];
        while(exp) {
            let number = exp.match(fracRegexp);
            let lastElement = curExpLikeArray[curExpLikeArray.length-1];
            if(!number) {
                let operator = exp.match(operatorRegexp);
                if(!operator)
                    throw new Error('Unexpected input.');
                if(lastElement && !isFractionalNumber(lastElement))
                    throw new Error('Unexpected input: you can\'t have 2 operators between.');
                exp = exp.slice(operator[0].length);
                curExpLikeArray.push(operator[1]);
            } else {
                exp = exp.slice(number[0].length);
                let fractNumber = FractionalNumberAdapter.stringToNumber(number[0]);
                if(lastElement && isFractionalNumber(lastElement))
                    throw new Error('Unexpected input: you can\'t have 2 numbers between without operator.');
                curExpLikeArray.push(fractNumber);
            }
        }
        return curExpLikeArray;
    }
}
