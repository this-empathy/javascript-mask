import cpf from './cpf'
import cnpj from './cnpj'

export default(value) =>{
    return value.length < 15 ? cpf(value) : cnpj(value)  
}