export default(value) =>{
    if(!value) return ''
    const formatedHour = new Intl.DateTimeFormat('pt-BR',{
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(value)

    return formatedHour
}