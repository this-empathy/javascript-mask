import mask from '../../src/index.js'

describe('CNPJ', () => {
  test('Mascara de CNPJ', () => {
   mask.cnpj(86736949000170)
  });
});