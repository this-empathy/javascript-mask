import mask from '../../index.js'

describe('Date', () => {
  test('Mascara para data', () => {
    mask.date('08011991')
    mask.date('08011991', 'es-CL')
    mask.date('1081991', 'en_US')
    mask.date('19910801', 'rw')
    mask.date('08011991', 'null')
  });
});
