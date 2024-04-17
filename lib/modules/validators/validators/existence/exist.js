import Validator from '../../validator.js';
import Class from "../../../../core/class.js";


Validator.create({
	name: 'exist',
	parseParam(param) {
		if (!Match.test(param, { class: Match.Optional(String), field: Match.Optional(String), value: Match.Optional(String) })) {
			throw new TypeError(
				`Parameter for the "exist" validator has to be a Object`
			);
		}
	},
	isValid({ doc, name, nestedName, value, param }) {
		const cls = Class.get(param.class) || doc;
		const fld = param.field || nestedName || name;
		const val = param.value || value;

		const model = cls.findOne({ [fld]: val });

		return model;
	},
	resolveError({ name }) {
		return `"${name}" not exist`;
	},
});