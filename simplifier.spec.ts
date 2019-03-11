import { Simplifier } from "./simplifier";
import { FractionalNumber } from "./fractional-number";
import { expect } from 'chai';
import 'mocha';

describe('Simplifier.simplify method', () => {
    it('Given 5/10. \nShould return 1/2', () => {
        const a: FractionalNumber = {numerator: 5, denominator: 10};
        const result: FractionalNumber = Simplifier.simplify(a);
        expect(result).to.deep.equal({numerator: 1, denominator: 2});
    });
    it('Given 10/5. \nShould return 2/1', () => {
        const a: FractionalNumber = {numerator: 10, denominator: 5};
        const result: FractionalNumber = Simplifier.simplify(a);
        expect(result).to.deep.equal({numerator: 2, denominator: 1});
    });
    it('Given 4/6. \nShould return 2/3', () => {
        const a: FractionalNumber = {numerator: 4, denominator: 6};
        const result: FractionalNumber = Simplifier.simplify(a);
        expect(result).to.deep.equal({numerator: 2, denominator: 3});
    });
    it('Given 21/77. \nShould return 3/11', () => {
        const a: FractionalNumber = {numerator: 21, denominator: 77};
        const result: FractionalNumber = Simplifier.simplify(a);
        expect(result).to.deep.equal({numerator: 3, denominator: 11});
    });
    it('Given 217/21. \nShould return 31/3', () => {
        const a: FractionalNumber = {numerator: 217, denominator: 21};
        const result: FractionalNumber = Simplifier.simplify(a);
        expect(result).to.deep.equal({numerator: 31, denominator: 3});
    });
    it('Given 425385/83325. \nShould return 28359/5555', () => {
        const a: FractionalNumber = {numerator: 425385, denominator: 83325};
        const result: FractionalNumber = Simplifier.simplify(a);
        expect(result).to.deep.equal({numerator: 28359, denominator: 5555});
    });
    it('Given 100000000/10000000000. \nShould return 1/100', () => {
        const a: FractionalNumber = {numerator: 100000000, denominator: 10000000000};
        const result: FractionalNumber = Simplifier.simplify(a);
        expect(result).to.deep.equal({numerator: 1, denominator: 100});
    });
});
