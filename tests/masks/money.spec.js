import mask from '../../index.js'

describe('Money', () => {
  test('mascara para dinheiro', () => {
   mask.money(1)
   mask.money(12)
   mask.money(122)
   mask.money(1221221)
   mask.money('0,00')
   mask.money(false)
   mask.money('')
  });
});