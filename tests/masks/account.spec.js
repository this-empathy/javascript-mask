import mask from '../../src/index.js'

describe('Account', () => {
  test('Mascara de Conta de Banco', () => {
    mask.account(1234)
    mask.account(123456)
  });
});