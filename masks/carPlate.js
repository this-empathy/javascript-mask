export default(value) =>{
    if (el) el.maxLength = 8
    value = value ? value.replace(/([a-zA-Z]{3})(\w)/, '$1-$2').toUpperCase() : ''
    return value
}