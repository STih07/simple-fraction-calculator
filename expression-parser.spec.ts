import { ExpressionParser } from "./expression-parser";
import { expect } from 'chai';
import 'mocha';

describe('ExpressionParser.parse method', () => {
    it('Given "1". Should return [1/1]', () => {
        const value = ExpressionParser.parse("1");
        const expected = [{numerator: 1, denominator: 1}];
        expect(value).to.deep.equal(expected);
    });
    it('Given "1/6". Should return [1/6]', () => {
        const value = ExpressionParser.parse("1/6");
        const expected = [{numerator: 1, denominator: 6}];
        expect(value).to.deep.equal(expected);
    });
    it('Given "1 - 1". Should return [1/1, "-", 1/1]', () => {
        const value = ExpressionParser.parse("1 - 1");
        const expected = [{numerator: 1, denominator: 1}, "-", {numerator: 1, denominator: 1}];
        expect(value).to.deep.equal(expected);
    });
    it('Given "1/4/-1/5*3". Should return [1/4, "/", -1/5, "*", 3/1]', () => {
        const value = ExpressionParser.parse("1/4/-1/5*3");
        const expected = [{numerator: 1, denominator: 4}, "/", {numerator: -1, denominator: 5}, "*", {numerator: 3, denominator: 1}];
        expect(value).to.deep.equal(expected);
    });
    it('Given "-1/-41/-5". Should return [-1/-41, "/", -5]', () => {
        const value = ExpressionParser.parse("-1/-41/-5");
        const expected = [{numerator: -1, denominator: -41}, "/", {numerator: -5, denominator: 1}];
        expect(value).to.deep.equal(expected);
    });
    it('Given "-1//5". Should throw "Unexpected input: you can\'t have 2 operators between."', () => {
        const value = () => { ExpressionParser.parse("-1//5") };
        expect(value).to.throw("Unexpected input: you can't have 2 operators between.");
    });
    it('Given "-1 5". Should throw "Unexpected input: you can\'t have 2 numbers between without operator."', () => {
        const value = () => { ExpressionParser.parse("-1 5") };
        expect(value).to.throw("Unexpected input: you can't have 2 numbers between without operator.");
    });
    it('Given "-1/5 + 4/3 /42 dfglfdg ". Should throw "Unexpected input."', () => {
        const value = () => { ExpressionParser.parse("-1/5 + 4/3 /42 dfglfdg ") };
        expect(value).to.throw("Unexpected input.");
    });
});
