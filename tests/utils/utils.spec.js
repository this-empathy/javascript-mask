import { toPattern } from '../../utils/utils'

describe('Utils', () => {

    test('convert string toPattern', () => {
        expect(toPattern('08011991', '99/99/9999')).toBe('08/01/1991')
        expect(toPattern('ASD$$$', 'AAA.AAA')).toBe('ASD')
        expect(toPattern('ASDQW', 'AAAA')).toBe('ASDQ')
        expect(toPattern('Name18age', 'SSSS-99:AAA')).toBe('Name-18:age')
        expect(toPattern('NZ', 'SS')).toBe('NZ')

    });

  });