import numberM from './number'

export default(value) =>{
    value = numberM(value).toString()
    if(value.length <= 5) return value
    var len = value.length
    value = value.substring(0, len-1) + '-' + value.substring(len-1)

    return value
}