import { FractionalNumber } from "./fractional-number";

export class Simplifier {

    public static simplify(num: FractionalNumber): FractionalNumber {
        if(num.numerator % num.denominator === 0) {
            num.numerator /= num.denominator;
            num.denominator = 1;
        } else if(num.denominator % num.numerator === 0) {
            num.denominator /= num.numerator;
            num.numerator = 1;
        } else {
            // TODO It really hurts on big numbers. Optimize it
            let simpleNumbers: number[] = [];
            for(let i = 2; i <= (Math.min(num.numerator, num.denominator)/2); i++) {
                simpleNumbers.push(i);
            }
            // Just remove all not-simple numbers from the array
            for(let i = 0; simpleNumbers[i]**2 <= (Math.min(num.numerator, num.denominator)); i++) {
                simpleNumbers.filter(x => x % simpleNumbers[i] !== 0 || x === simpleNumbers[i]);
            }
            for(let number of simpleNumbers) {
                while(num.denominator % number === 0 && num.numerator % number === 0) {
                    num.denominator /= number;
                    num.numerator /= number;
                }
            }
        }

        return num;
    }
}
