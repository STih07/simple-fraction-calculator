import { Calculator } from './calculator';
import { expect } from 'chai';
import 'mocha';

describe('Calculate with one operator', () => {
    it('Given "2/5". Should return "2/5"', () => {
        const result = Calculator.execute("2/5");
        expect(result).to.equal("2/5");
    });
    it('Given "1/5 + 2/5". Should return "3/5"', () => {
        const result = Calculator.execute("1/5 + 2/5");
        expect(result).to.equal("3/5");
    });
    it('Given "1/5 * 1/5". Should return "1/25"', () => {
        const result = Calculator.execute("1/5 * 1/5");
        expect(result).to.equal("1/25");
    });
    it('Given "1/5 / 1/5". Should return "1"', () => {
        const result = Calculator.execute("1/5 / 1/5");
        expect(result).to.equal("1");
    });
    it('Given "2 - 1/3". Should return "5/3"', () => {
        const result = Calculator.execute("2 - 1/3");
        expect(result).to.equal("5/3");
    });
    it('Given "3 * 1". Should return "3"', () => {
        const result = Calculator.execute("3 * 1");
        expect(result).to.equal("3");
    });
    it('Given "0 * 3". Should return "0"', () => {
        const result = Calculator.execute("0 * 3");
        expect(result).to.equal("0");
    });
    it('Given "2/5 / 1/5". Should return "2"', () => {
        const result = Calculator.execute("2/5 / 1/5");
        expect(result).to.equal("2");
    });
});

describe('Calculate with more then one operators', () => {
    it('Given "2/5 + 1/6 - 1/6". Should return "2/5"', () => {
        const result = Calculator.execute("2/5 + 1/6 - 1/6");
        expect(result).to.equal("2/5");
    });
    it('Given "1/5 + 3/5 * 1/3". Should return "2/5"', () => {
        const result = Calculator.execute("1/5 + 3/5 * 1/3");
        expect(result).to.equal("2/5");
    });
    it('Given "1/5 + 3/5 / 1/3". Should return "2"', () => {
        const result = Calculator.execute("1/5 + 3/5 / 1/3");
        expect(result).to.equal("2");
    });
    it('Given "1/5 * 1/5 - 1/25 + 4". Should return "4"', () => {
        const result = Calculator.execute("1/5 * 1/5 - 1/25 + 4");
        expect(result).to.equal("4");
    });
    it('Given "1/5 * 1/5 - 1/25 * 5". Should return "-4/25"', () => {
        const result = Calculator.execute("1/5 * 1/5 - 1/25 * 5");
        expect(result).to.equal("-4/25");
    });
    it('Given "1/5 / 1/5". Should return "1"', () => {
        const result = Calculator.execute("1/5 / 1/5");
        expect(result).to.equal("1");
    });
    it('Given "2 - 1/3". Should return "5/3"', () => {
        const result = Calculator.execute("2 - 1/3");
        expect(result).to.equal("5/3");
    });
    it('Given "3 * 1". Should return "3"', () => {
        const result = Calculator.execute("3 * 1");
        expect(result).to.equal("3");
    });
    it('Given "0 * 3". Should return "0"', () => {
        const result = Calculator.execute("0 * 3");
        expect(result).to.equal("0");
    });
    it('Given "2/5 / 1/5". Should return "2"', () => {
        const result = Calculator.execute("2/5 / 1/5");
        expect(result).to.equal("2");
    });
    it('Given "1/5 / 1/5 / -1/5". Should return "-5"', () => {
        const result = Calculator.execute("1/5 / 1/5 / -1/5");
        expect(result).to.equal("-5");
    });
});

describe('Calculate with more then one operators and brackets', () => {
    it('Given "(2/6 + 1/6) / 1/6". Should return "3"', () => {
        const result = Calculator.execute("(2/6 + 1/6) / 1/6");
        expect(result).to.equal("3");
    });
    it('Given "1/5 + 3/5 * (1/3 - 1/3)". Should return "1/5"', () => {
        const result = Calculator.execute("1/5 + 3/5 * (1/3 - 1/3)");
        expect(result).to.equal("1/5");
    });
    it('Given "-1/5 + (1 + (5/3 - 3/5))". Should return "28/15"', () => {
        const result = Calculator.execute("-1/5 + (1 + (5/3 - 3/5))");
        expect(result).to.equal("28/15");
    });
    it('Given "10/15 * (5/10 - 3 * (3/4 + 3/8))". Should return "-23/12"', () => {
        const result = Calculator.execute("10/15 * (5/10 - 3 * (3/4 + 3/8))");
        expect(result).to.equal("-23/12");
    });
    it('Given "(3/2 - 1/2) * (1/2 - 2/3) / (3/4 - 5/6)". Should return "2"', () => {
        const result = Calculator.execute("(3/2 - 1/2) * (1/2 - 2/3) / (3/4 - 5/6)");
        expect(result).to.equal("2");
    });
    it('Given "(3/2-1/2)*(1/2-2/3)/(3/4-5/6)". Should return "2"', () => {
        const result = Calculator.execute("(3/2-1/2)*(1/2-2/3)/(3/4-5/6)");
        expect(result).to.equal("2");
    });
    it('Given "((2/3) * (1/6)". Should return "error"', () => {
        const result = () => {Calculator.execute("((2/3) * (1/6)")};
	expect(result).to.throw('Syntax error');
    });
});
