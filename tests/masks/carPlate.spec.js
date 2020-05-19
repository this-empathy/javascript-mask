import mask from '../../index.js'

describe('Car Plate', () => {
  test('Mascara para Placa de Carros', () => {
    mask.carPlate('qwe1111')
    mask.carPlate('')
  });
});