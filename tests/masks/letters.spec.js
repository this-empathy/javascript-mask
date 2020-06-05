import mask from '../../src/index.js'

describe('Letters', () => {
  test('Mascara só para letras', () => {
    mask.letters('asdasda')
  });
});