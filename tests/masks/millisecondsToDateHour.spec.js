import mask from '../../index.js'

describe('milliseconds to date and hour', () => {
  test('Mascara de Milesegundos para data e hora', () => {
    mask.millisecondsToDateHour('')
    mask.millisecondsToDateHour(1587647835661)
  });
});