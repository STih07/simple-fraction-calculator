import { FractionalNumber } from "./fractional-number";

export class CalculatorService {
    public static plus (a: FractionalNumber, b: FractionalNumber): FractionalNumber {
        let result: FractionalNumber;
        if(a.denominator === b.denominator) {
            result = {
                numerator: a.numerator + b.numerator,
                denominator: a.denominator
            };
        } else {
            result = {
                numerator: a.numerator*b.denominator + b.numerator*a.denominator,
                denominator: a.denominator * b.denominator
            };
        }
        return result;
    };

    public static minus (a: FractionalNumber, b: FractionalNumber): FractionalNumber {
        let result: FractionalNumber;
        if(a.denominator === b.denominator) {
            result = {
                numerator: a.numerator - b.numerator,
                denominator: a.denominator
            };
        } else {
            result = {
                numerator: a.numerator*b.denominator - b.numerator*a.denominator,
                denominator: a.denominator * b.denominator
            };
        }
        return result;
    };

    public static mult (a: FractionalNumber, b: FractionalNumber): FractionalNumber {
        return {
            numerator: a.numerator * b.numerator,
            denominator: a.denominator * b.denominator
        }
    };


    public static divide (a: FractionalNumber, b: FractionalNumber): FractionalNumber {
        return {
            numerator: a.numerator * b.denominator,
            denominator: a.denominator * b.numerator
        }
    };
}
