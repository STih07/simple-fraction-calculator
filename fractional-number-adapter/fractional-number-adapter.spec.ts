import { FractionalNumberAdapter } from "./";
import { FractionalNumber } from "../fractional-number";
import { expect } from 'chai';
import 'mocha';



describe('stringToNumber method', () => {
    it('Given "5/4".\n Should return {numerator: 5, denominator: 4}', () => {
        const result: FractionalNumber = FractionalNumberAdapter.stringToNumber("5/4");
        const expected: FractionalNumber = {numerator: 5, denominator: 4};
        expect(result).to.deep.equal(expected);
    });
    it('Given "2/10".\n Should return {numerator: 2, denominator: 10}', () => {
        const result: FractionalNumber = FractionalNumberAdapter.stringToNumber("2/10");
        const expected: FractionalNumber = {numerator: 2, denominator: 10};
        expect(result).to.deep.equal(expected);
    });
    it('Given "10". Should return {numerator: 10, denominator: 1}', () => {
        const result = FractionalNumberAdapter.stringToNumber("10");
        const expected: FractionalNumber = {numerator: 10, denominator: 1};
        expect(result).to.deep.equal(expected);
    });
    it('Given "0". Should return {numerator: 0, denominator: 1}', () => {
        const result = FractionalNumberAdapter.stringToNumber("0");
        expect(result).to.deep.equal({numerator: 0, denominator: 1});
    });
    it('Given "0/5". Should return {numerator: 0, denominator: 5}', () => {
        const result: FractionalNumber = FractionalNumberAdapter.stringToNumber("0/5");
        const expected: FractionalNumber = {numerator: 0, denominator: 5};
        expect(result).to.deep.equal(expected);
    });
    it('Given "10/0". Should throw error "Denominator can\'t be 0."', () => {
        const result = () => {FractionalNumberAdapter.stringToNumber("10/0")};
        expect(result).to.throw('Denominator can\'t be 0.');
    });
});

describe('numberToString method', () => {
    it('Given {numerator: 1, denominator: 3}.\n Should return "1/3"', () => {
        const result: string = FractionalNumberAdapter.numberToString({numerator: 5, denominator: 4});
        const expected: string = "5/4";
        expect(result).to.deep.equal(expected);
    });
    it('Given {numerator: 2, denominator: 10}.\n Should return "2/10"', () => {
        const result: string = FractionalNumberAdapter.numberToString({numerator: 2, denominator: 10});
        const expected: string = "2/10";
        expect(result).to.deep.equal(expected);
    });
    it('Given {numerator: 5, denominator: 1}.\n Should return "5"', () => {
        const result: string = FractionalNumberAdapter.numberToString({numerator: 5, denominator: 1});
        const expected: string = "5";
        expect(result).to.deep.equal(expected);
    });
    it('Given {numerator: -6, denominator: -1}.\n Should return "6"', () => {
        const result: string = FractionalNumberAdapter.numberToString({numerator: -6, denominator: -1});
        const expected: string = "6";
        expect(result).to.deep.equal(expected);
    });
    it('Given {numerator: 2, denominator: 0}. Should throw error "Denominator can\'t be 0."', () => {
        const result = () => {FractionalNumberAdapter.numberToString({numerator: 2, denominator: 0})};
        expect(result).to.throw('Denominator can\'t be 0.');
    });
    it('Given {numerator: 0, denominator: 1}. Should return 0', () => {
        const result = FractionalNumberAdapter.numberToString({numerator: 0, denominator: 1});
        expect(result).to.deep.equal("0");
    });
});
