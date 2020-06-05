import mask from '../../src/index.js'

describe('Car Plate', () => {
  test('Mascara para Placa de Carros', () => {
    mask.carPlate('qwe1111')
    mask.carPlate('')
  });
});