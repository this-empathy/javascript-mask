import cpf from "./cpf";
import cnpj from "./cnpj";

export default (value) => {
  value = value.toString();
  return value.length < 14 ? cpf(value) : cnpj(value);
};
