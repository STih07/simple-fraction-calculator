import { FractionalNumber } from "./fractional-number";

export class Simplifier {

    public static simplify(num: FractionalNumber): FractionalNumber {
        let [a, b] = [num.numerator, num.denominator];
        while(a !== b) {
            if(a > b) a -= b;
            else b -= a;
        }
        num.denominator /= a;
        num.numerator /= a;
        return num;
    }
}
