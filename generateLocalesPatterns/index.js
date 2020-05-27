const fs = require("fs");
const locales = require("./localLocales");

const obj = {};

const dataOptions = (data, code) => {
  let value = '';
  switch (data.type) {
    case "month":
      value = data.value.length == 1 ? "M" : "MM";
      break;
    case "day":
      value = data.value.length == 1 ? "D" : "DD";
      break;
    case "year":
      value = "YYYY";
      break;
    case "literal":
      value = data.value;
      break;
    case "literal":
      value = data.value;
      break;
    case "era":
      value = value;
      break;
    default:
      let error = `${data.type} and  ${data.value} is not a data type - code: ${code}`;
      console.error(error);
  }

  return value;
};

const parsePhoneFormat = (code) => {
  const formatObj = new Intl.DateTimeFormat(code).formatToParts(new Date());

  return formatObj.map((dateItem) => {
      return dataOptions(dateItem, code);
    }).join("").replace(",", "");
};

const getEra = (code) => {
  const formatObj = new Intl.DateTimeFormat(code).formatToParts(new Date());

  const era = formatObj.filter((item) => {
    return item.type === 'era'
  })

  return era.length ? era[0].value : false 
  
};

for (const key in locales) {
  if (locales.hasOwnProperty(key)) {
    const code = locales[key].code;
    obj[key] = {};

    obj[key].name = locales[key].name;
    obj[key].code = locales[key].code;
    obj[key].dateFormat = parsePhoneFormat(code);
    obj[key].era = getEra(code);
  }
}

var json = JSON.stringify(obj);
fs.writeFile("locales.json", json, "utf8", function (err) {
  if (err) {
    console.log("Error");
  } else {
    console.log("Success");
  }
});
