import {FractionalNumberAdapter} from "./fractional-number-adapter";
import {FractionalNumber, isFractionalNumber} from "./fractional-number";

const fracRegexp = /^\s*(-?[\d]+\/-?[\d]+|-?[\d]+)/;
const operatorRegexp = /^\s*([+\-/*])/;

export class ExpressionParser {
    public static parse(exp: string): Array<string | FractionalNumber> {
        let curExpLikeArray: Array<string | FractionalNumber> = [];
        while(exp) {
            exp = exp.trim();
            let lastElement = curExpLikeArray[curExpLikeArray.length - 1];
            if (lastElement && isFractionalNumber(lastElement)) {
                let operator = exp.match(operatorRegexp);
                if (!operator)
                    throw new Error('Unexpected input.');
                exp = exp.slice(operator[0].length);
                curExpLikeArray.push(operator[1]);
            } else {
                let number = exp.match(fracRegexp);
                if (!number) {
                    throw new Error('Unexpected input.');
                }
                exp = exp.slice(number[0].length);
                let fractNumber = FractionalNumberAdapter.stringToNumber(number[0]);
                curExpLikeArray.push(fractNumber);

            }
        }
        return curExpLikeArray;
    }
}
