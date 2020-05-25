const fs = require("fs");
const locales = require("./localLocales");

const obj = {};

const dataOptions = (item) => {
    console.log(item);
    

    return {
        month: () => item.value.length === 1 ? 'M' : 'MM',
        day: () => item.value.length === 1 ? 'D' : 'DD',
        year : 'YYYY',
        literal: item.value,
        default: () => {
            console.error('is not a data type')
            return item.value
        }
    }
}

const parsePhoneFormat = (code) => {
  const formatObj = new Intl.DateTimeFormat(code).formatToParts(new Date("1 1 2020"));

  return formatObj.map(dateItem => {
    return dataOptions(dateItem)[dateItem.type]
  }).join('').replace(',', '')

};

for (const key in locales) {
  if (locales.hasOwnProperty(key)) {
    const code = locales[key].code;
    obj[key] = {};

    obj[key].name = locales[key].name;
    obj[key].code = locales[key].code;
    obj[key].dateFormat = parsePhoneFormat(code);
  }
}


var json = JSON.stringify(obj);
fs.writeFile('locales.json', json, 'utf8', function(err){
    console.log('err', err);
});
