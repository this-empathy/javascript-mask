import mask from '../../src/index.js'

describe('CEP', () => {
  test('Mascara para cep', () => {
    mask.cep('09750040')
  });
});