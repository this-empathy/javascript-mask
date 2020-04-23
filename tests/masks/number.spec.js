import mask from '../../index.js'

describe('Numbers', () => {
  test('Mascar só para numeros', () => {
    mask.number(12312312)
  });
});