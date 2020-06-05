import mask from '../../src/index.js'

describe('Phone', () => {
  test('Mascara para testar Telefone sem numero', () => {
    mask.phone('')
    mask.phone('asdasdasd')
  });

  test('Mascara para testar 4 e 3 digitos', () => {
    mask.phone(5638)
    mask.phone(56)
  });

  test('Mascara para testar Telefone com o 9', () => {
    mask.phone(11945309090)
  });

  test('Mascara para testar Telefone sem o 9', () => {
    mask.phone(1145309090)
  });
});