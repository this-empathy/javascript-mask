export default(value) =>{
    value = value.toString()
    value = this.number(value)
    value = value.replace(/(\d{4})(\d)/, '$1-$2')
    return value
}