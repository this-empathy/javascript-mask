import mask from '../../src/index.js'

describe('Numbers', () => {
  test('Mascar só para numeros', () => {
    mask.number('')
    mask.number(12312312)
  });
});