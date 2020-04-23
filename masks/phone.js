export default(value) =>{
    let _newValue = value.toString().replace(/\D/g, '')
    let _re = /^(?:0?(\d{2}))(9?\d{0,4})(\d{0,4})/.exec(_newValue)

    if (_re) {
      if (_re[2] && _re[2].length > 0) {
        _newValue = '(' + _re[1]
        _newValue += ') ' + _re[2]
      }
      if (_re[3] && _re[3].length > 0) {
        _newValue += '-' + _re[3]
      }
    }
    
    return _newValue.trim()
}