import Utils from '../../utils/utils'

describe('Utils', () => {

    test('convert string toPattern', () => {
        expect(Utils.toPattern('08011991', '99/99/9999')).toBe('08/01/1991')
        expect(Utils.toPattern('ASD$$$', 'AAA.AAA')).toBe('ASD')
        expect(Utils.toPattern('ASDQW', 'AAAA')).toBe('ASDQ')
        expect(Utils.toPattern('Name18age', 'SSSS-99:AAA')).toBe('Name-18:age')
        expect(Utils.toPattern('NZ', 'SS')).toBe('NZ')

    });

  });