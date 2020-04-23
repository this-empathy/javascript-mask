import mask from '../../index.js'

describe('Phone', () => {
  test('Mascara para testar Telefone com o 9', () => {
    mask.phone(11945309090)
  });

  test('Mascara para testar Telefone sem o 9', () => {
    mask.phone(1145309090)
  });
});