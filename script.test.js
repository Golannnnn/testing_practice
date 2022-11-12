import { capitalize, reverse, calculator, caesarCipher, analyzeArray } from './script';

test('capitalize: single word', () => expect(capitalize('string')).toBe('String'));
test('capitalize: multiple words', () => expect(capitalize('abc. Cba')).toBe('Abc. Cba'));

test('reverse: single word', () => expect(reverse('string')).toBe('gnirts'));
test('reverse: multiple words', () => expect(reverse('abc aBc')).toBe('cBa cba'));

test('add (1)', () => expect(calculator.add(5, 5)).toBe(10));
test('add (2)', () => expect(calculator.add(15, 3)).toBe(18));

test('subtract (1)', () => expect(calculator.subtract(5, 5)).toBe(0));
test('subtract (2)', () => expect(calculator.subtract(15, 3)).toBe(12));

test('divide (1)', () => expect(calculator.divide(5, 5)).toBe(1));
test('divide (2)', () => expect(calculator.divide(15, 3)).toBe(5));

test('multiply (1)', () => expect(calculator.multiply(5, 5)).toBe(25));
test('multiply (2)', () => expect(calculator.multiply(15, 3)).toBe(45));

test('caesarCipher: single word', () => expect(caesarCipher('abc', 1)).toBe('bcd'));
test('caesarCipher: wrap letters', () => expect(caesarCipher('z', 2)).toBe('b'));
test('caesarCipher: keep same case', () => expect(caesarCipher('a', 0)).toBe('a'));
test('caesarCipher: punctuation', () => expect(caesarCipher('a.z..c', 2)).toBe('c.b..e'));

test('analyzeArray (1)', () => { 
    expect(analyzeArray([10, 5, 2, 3]))
    .toEqual({
        average: 5,
        min: 2,
        max: 10,
        length: 4
    })
});

test('analyzeArray (2)', () => { 
    expect(analyzeArray([33, 12, 9473, 5]))
    .toEqual({
        average: 2380.75,
        min: 5,
        max: 9473,
        length: 4
    })
});

test('analyzeArray: empty array', () => expect(analyzeArray([])).toEqual({}));