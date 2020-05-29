const fs = require('fs')
const locales = require('./localLocales')

const obj = {}

const dataOptions = (data, code) => {
	const valueOptions = {
		month: data.value.length == 1 ? 'M' : 'MM',
		day: data.value.length == 1 ? 'D' : 'DD',
		year: 'YYYY',
		literal: data.value,
		default: () => {
			return console.error(
				`${data.type} and  ${data.value} is not a data type - code: ${code}`
			)
		},
	}

	return valueOptions[data.type] || valueOptions.default()
}

const parsePhoneFormat = (code, formatObj) => {
	return formatObj
		.map((dateItem) => dataOptions(dateItem, code))
		.join('')
		.replace(',', '')
}

const getDatesPositions = (format) => {
	let position = 0
	const obj = {}
	format.forEach((item) => {
		if (item.type == 'year' || item.type == 'day' || item.type == 'month') {
			obj[item.type] = position++
		}
	})

	return obj
}

const hasEra = (formatObj) => {
	const era = formatObj.filter((item) => item.type === 'era')
	return !!era.length
}

for (const key in locales) {
	if (locales.hasOwnProperty(key)) {
		const code = locales[key].code
		const formatObj = new Intl.DateTimeFormat(code).formatToParts(new Date())

		obj[key] = {
			name: locales[key].name,
			code: locales[key].code,
			dateFormat: parsePhoneFormat(code, formatObj),
			splitedPositions: getDatesPositions(formatObj),
			era: hasEra(formatObj),
		}
	}
}

const json = JSON.stringify(obj)
fs.writeFile('./locales/locales.json', json, 'utf8', function (err) {
	err ? new Error(err) : console.log('Success')
})
