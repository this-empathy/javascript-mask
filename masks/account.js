export default(value) =>{
    value = this.number(value).toString()
    if(value.length <= 5) return value
    var len = value.length
    value = value.substring(0, len-1) + '-' + value.substring(len-1)

    return value
}