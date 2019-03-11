import { Main } from './main';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {
    it('should return 1', () => {
        const test: Main = new Main();
        const result = test.test();
        expect(result).to.equal(1);
    });
});
