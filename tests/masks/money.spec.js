import mask from '../../index.js'

describe('Money', () => {
  test('mascara para dinheiro', () => {
   mask.money(1221221)
  });
});