import Locales from "../generateLocalesPatterns/locales.json";
import Utils from "../utils/utils"

export default (value, locale = 'pt_BR') => {
  locale = locale.replace('-', '_')
  const dateFormat = Locales[locale] ? Locales[locale].dateFormat : Locales.pt_BR.dateFormat
  const literal = /\W|_/g.exec(dateFormat)[0];
  
  const opt = {
    literal: literal,
    format: dateFormat
  }

  // 9 is the code with represent just numbers on toPattern function
  const pattern = dateFormat.replace(/[A-Z]/g, '9')
  return {value: Utils.toPattern(value, pattern), opt: opt}
};


