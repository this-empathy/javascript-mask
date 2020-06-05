import mask from '../../src/index.js'

describe('CPF', () => {
  test('Mascara de CPF', () => {
    mask.cpf(34786606022)
  });
});