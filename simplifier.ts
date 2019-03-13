import { FractionalNumber } from "./fractional-number";

export class Simplifier {

    public static simplify(num: FractionalNumber): FractionalNumber {
        let [a, b] = [Math.abs(num.numerator), Math.abs(num.denominator)];
        while(a !== 0 &&  b !== 0) {
            if(a > b) a %= b;
            else b %= a;
        }
        num.denominator /= a+b;
        num.numerator /= a+b;
        return num;
    }
}
