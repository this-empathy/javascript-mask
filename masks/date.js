import Locales from '../locales/locales.json'
import { toPattern } from '../utils/utils'

export default (value, locale = 'pt_BR') => {
	locale = locale.replace('-', '_')
	const format = Locales[locale] ? Locales[locale] : Locales.pt_BR

	const literal = /\W|_/g.exec(format.dateFormat)[0]
	const opt = {
		literal: literal,
		format: format.dateFormat,
		era: format.era,
		positions: format.splitedPositions,
	}

	// 9 is the code with represent just numbers on toPattern function
	const pattern = format.dateFormat.replace(/[A-Z]/g, '9')
	return { value: toPattern(value, pattern), opt }
}
