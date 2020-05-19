export default(value) =>{
    value = value ? value.replace(/([a-zA-Z]{3})(\w)/, '$1-$2').toUpperCase() : ''
    return value
}