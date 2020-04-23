export default(value) =>{
    return value ? value.toString().replace(/\D/g, '') : ''
}