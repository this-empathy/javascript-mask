import mask from '../../src/index.js'

describe('CPF & CNPJ', () => {
  test('Mascara para testes de CPF', () => {
    mask.cpfCnpj(34786606022)
  });

  test('Mascara para testes de CNPJ', () => {
    mask.cpfCnpj(81712592000176)
  });
});