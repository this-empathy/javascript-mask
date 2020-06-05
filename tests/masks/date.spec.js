import mask from '../../src/index.js'

describe('Date', () => {
  test('Verify if all the props of the return are not Undefined', () => {
    const date = mask.date('08011991')
    
    expect(date.value).not.toBeUndefined()
    expect(date.opt).not.toBeUndefined()
    expect(date.opt.format).not.toBeUndefined()
    expect(date.opt.era).not.toBeUndefined()
    expect(date.opt.positions).not.toBeUndefined()
    expect(date.opt.positions.year).not.toBeUndefined()
    expect(date.opt.positions.month).not.toBeUndefined()
    expect(date.opt.positions.day).not.toBeUndefined()
  });

  test('Mascara para data pt-BR', () => {
    expect(mask.date('08011991').value).toBe('08/01/1991')    
    expect(mask.date('08011991', 'null').value).toBe('08/01/1991')
    expect(mask.date('08011991', 'pt-BR').value).toBe('08/01/1991')
  });

  test('Mascara para data es-CL', () => {
    expect(mask.date('08011991', 'es-CL').value).toBe('08-01-1991')
  });

  test('Mascara para data en_US', () => {
    expect(mask.date('10081991', 'en_US').value).toBe('10/08/1991')
    expect(mask.date('11081991', 'en_US').value).toBe('11/08/1991')
  });

  test('Mascara para data rw', () => {
    expect(mask.date('19910801', 'rw').value).toBe('1991-08-01')
  });
});
