import { FractionalNumber } from "./fractional-number";

export class FractionalNumberAdapter {
    public static stringToNumber(str: string): FractionalNumber {
        const [numerator, denominator] = str.split('/');
        if(+denominator === 0)
            throw new Error('Denominator can\'t be 0.');
        else if(!numerator && +numerator !== 0 || !denominator)
            throw new Error('Input is incorrect');
        return {
            numerator: +numerator,
            denominator: +denominator
        }
    }

    public static numberToString(num: FractionalNumber): string {
        if(num.denominator === 0) throw new Error('Denominator can\'t be 0.');
        return `${num.numerator}/${num.denominator}`
    }
}
