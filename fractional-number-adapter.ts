import { FractionalNumber } from "./fractional-number";

export class FractionalNumberAdapter {
    public static stringToNumber(str: string): FractionalNumber {
        let [numerator, denominator] = str.split('/');
        if(+denominator === 0)
            throw new Error('Denominator can\'t be 0.');
        else if(denominator === undefined)
            denominator = "1";
        else if(!numerator && +numerator !== 0)
            throw new Error('Input is incorrect');
        return {
            numerator: +numerator,
            denominator: +denominator
        }
    }

    public static numberToString(num: FractionalNumber): string {
        if(num.denominator === 0) throw new Error('Denominator can\'t be 0.');
        if(num.denominator === 1) return `${num.numerator}`;
        if(num.denominator === -1) return `${num.numerator*-1}`;
        return `${num.numerator}/${num.denominator}`
    }
}
