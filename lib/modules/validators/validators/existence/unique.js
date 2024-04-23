import Validator from '../../validator.js';
import Class from "../../../../core/class.js";


Validator.create({
	name: 'unique',
	parseParam(param) {
		if (param !== undefined && !Match.test(param, { class: Match.Optional(String), field: Match.Optional(String), value: Match.Optional(String) })) {
			throw new TypeError(
				`Parameter for the "unique" validator has to be a Object`
			);
		}
	},
	isValid({ doc, ParentDoc, name, nestedName, value, param = {} }) {
		const getClass = () => {
			const objArray = [
				Class.get(param.class),
				doc.constructor,
				ParentDoc.constructor,
			];
			for (const elemento of objArray) {
				if (typeof elemento === "object" || typeof elemento === "function") {
					if (elemento.hasOwnProperty("findOne") && typeof elemento.findOne === "function") {
						return elemento;
					}
				}
			}
			return undefined;
		}

		const cls = getClass();
		const fld = param.field || name || nestedName;
		const val = param.value || value;

		if (cls === undefined) {
			return false;
		}

		// build selector
		const selector = fld.split('.').reduceRight((accumulator, currentValue) => {
			if (currentValue.match(/\d+/g)) {
				return { $elemMatch: accumulator };
			} else {
				return { [currentValue]: accumulator };
			}
		}, val);

		// add same id exclusion
		if (doc._id) {
			selector._id = { $ne: doc._id };
		}

		// find model
		var model = cls.findOne(selector);
		return !model;
	},
	resolveError({ nestedName }) {
		return `"${nestedName}" is not unique`;
	},
});