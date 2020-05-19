export default(value) =>{
    value = value.toString()
    value = value.replace(/(\d{2})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\w{3})(\w{1,2})$/, '$1-$2')
    return value.toUpperCase()
}