import Locales from '../utils/locales'

export default(value) =>{

    console.log(Locales.pt_BR.co)

    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, '$1/$2')
    value = value.replace(/(\d{2})(\d)/, '$1/$2')

    console.log(value)
    return value
}