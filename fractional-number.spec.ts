import { isFractionalNumber } from "./fractional-number";
import { expect } from 'chai';
import 'mocha';

describe('isFractionalNumber function', () => {
    it('Given "+". Should return false', () => {
        const value = isFractionalNumber("+");
        expect(value).to.false;
    });
    it('Given "4". Should return false', () => {
        const value = isFractionalNumber("4");
        expect(value).to.false;
    });
    it('Given {denominator: 3, numerator: 5}. Should return true', () => {
        const value = isFractionalNumber({denominator: 3, numerator: 5});
        expect(value).to.true;
    });
});
