export default(value) =>{
    let _newValue = value.toString()
    _newValue = _newValue.replace(/\D/g, '')
    _newValue = _newValue.replace(/^(\d{2})(\d)/, '$1.$2')
    _newValue = _newValue.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    _newValue = _newValue.replace(/\.(\d{3})(\d)/, '.$1/$2')
    _newValue = _newValue.replace(/(\d{4})(\d)/, '$1-$2')
    return _newValue
}