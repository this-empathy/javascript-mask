export default(value) =>{
    if(!value) return ''
    const formatedHour = new Intl.DateTimeFormat('pt-BR',{
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }).format(value)

    return formatedHour
}