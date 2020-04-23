export default(value) =>{
  let result

  if (typeof value === 'number') value = String(value)
  if (typeof value !== 'string') return value

  value = value.replace(/\D/g,'')
  value = new String(Number(value))

  if (value.length === 1)
    value = value.replace(/(\d)/,'0.0$1')
  else if (value.length === 2)
    value = value.replace(/(\d)/,'0.$1')
  else if (value.length > 2)
    value = value.replace(/(\d{2})$/,'.$1')
  
  value = value.replace(/\D/g, '')
  value = value.replace(/([0-9]{2})$/g, ',$1')

  if (value.length > 6)
    value = value.replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.')

  if (value === '0,00')
    result = ''
  else
    result = value.length === 0 ? value : 'R$ ' + value

  return result
}