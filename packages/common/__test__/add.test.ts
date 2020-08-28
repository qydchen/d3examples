import add from '../src';

describe("add", () => {
    it('should add 1 and 2 to make 3', () => {
        expect(add(1, 2)).toEqual(3);
    })
})