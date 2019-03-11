import { Calculator } from "./calculator";
import { expect } from 'chai';
import { FractionalNumber } from "./fractional-number";
import 'mocha';


describe('Calculator.plus method', () => {
    it('Given 3/10 and 1/10.\n Should return 4/10.', () => {
        const [a, b]: FractionalNumber[] = [{numerator: 3, denominator: 10}, {numerator: 1, denominator: 10}];
        const result: FractionalNumber = Calculator.plus(a, b);
        expect(result).to.deep.equal({numerator: 4, denominator: 10});
    });

    it('Given 5/4 and 1/5.\n Should return 29/20.', () => {
        const [a, b]: FractionalNumber[] = [{numerator: 5, denominator: 4}, {numerator: 1, denominator: 5}];
        const result = Calculator.plus(a, b);
        expect(result).to.deep.equal({numerator: 29, denominator: 20});
    });
});


describe('Calculator.minus method', () => {
    it('Given 3/10 and 1/10.\n Should return 2/10.', () => {
        const [a, b]: FractionalNumber[] = [{numerator: 3, denominator: 10}, {numerator: 1, denominator: 10}];
        const result: FractionalNumber = Calculator.minus(a, b);
        expect(result).to.deep.equal({numerator: 2, denominator: 10});
    });

    it('Given 5/4 and 1/5.\n Should return 21/20.', () => {
        const [a, b]: FractionalNumber[] = [{numerator: 5, denominator: 4}, {numerator: 1, denominator: 5}];
        const result = Calculator.minus(a, b);
        expect(result).to.deep.equal({numerator: 21, denominator: 20});
    });

    it('Given -5/6 and 1/50.\n Should return -256/300.', () => {
        const [a, b]: FractionalNumber[] = [{numerator: -5, denominator: 6}, {numerator: 1, denominator: 50}];
        const result = Calculator.minus(a, b);
        expect(result).to.deep.equal({numerator: -256, denominator: 300});
    });
});

describe('Calculator.mult method', () => {
    it('Given 3/10 and 1/10.\n Should return 3/100.', () => {
        const [a, b]: FractionalNumber[] = [{numerator: 3, denominator: 10}, {numerator: 1, denominator: 10}];
        const result: FractionalNumber = Calculator.mult(a, b);
        expect(result).to.deep.equal({numerator: 3, denominator: 100});
    });

    it('Given 5/4 and 1/5.\n Should return 5/20.', () => {
        const [a, b]: FractionalNumber[] = [{numerator: 5, denominator: 4}, {numerator: 1, denominator: 5}];
        const result = Calculator.mult(a, b);
        expect(result).to.deep.equal({numerator: 5, denominator: 20});
    });

    it('Given -5/6 and 1/50.\n Should return -5/300.', () => {
        const [a, b]: FractionalNumber[] = [{numerator: -5, denominator: 6}, {numerator: 1, denominator: 50}];
        const result = Calculator.mult(a, b);
        expect(result).to.deep.equal({numerator: -5, denominator: 300});
    });
});

describe('Calculator.divide method', () => {
    it('Given 3/10 and 1/10.\n Should return 30/10.', () => {
        const [a, b]: FractionalNumber[] = [{numerator: 3, denominator: 10}, {numerator: 1, denominator: 10}];
        const result: FractionalNumber = Calculator.divide(a, b);
        expect(result).to.deep.equal({numerator: 30, denominator: 10});
    });

    it('Given 5/4 and 1/5.\n Should return 25/4.', () => {
        const [a, b]: FractionalNumber[] = [{numerator: 5, denominator: 4}, {numerator: 1, denominator: 5}];
        const result = Calculator.divide(a, b);
        expect(result).to.deep.equal({numerator: 25, denominator: 4});
    });

    it('Given -5/6 and 1/50.\n Should return -250/6.', () => {
        const [a, b]: FractionalNumber[] = [{numerator: -5, denominator: 6}, {numerator: 1, denominator: 50}];
        const result = Calculator.divide(a, b);
        expect(result).to.deep.equal({numerator: -250, denominator: 6});
    });
});
