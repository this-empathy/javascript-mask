export default(value) =>{
    value = value.replace(/[^a-zA-Z\s/]+$/g, '')
    return value
}