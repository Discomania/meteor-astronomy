import Validator from '../../validator.js';
import Class from "../../../../core/class.js";


Validator.create({
	name: 'unique',
	parseParam(param) {
		if (param && !Match.test(param, { class: Match.Optional(String), field: Match.Optional(String), value: Match.Optional(String) })) {
			throw new TypeError(
				`Parameter for the "unique" validator has to be a Object`
			);
		}
	},
	isValid({ doc, ParentDoc, name, nestedName, value, param }) {
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
		const fld = param.field || nestedName || name;
		const val = param.value || value;

		console.log('----------------------------------');
		console.log('doc:', doc.constructor.className, doc.constructor.findOne);
		console.log('ParentDoc:', ParentDoc.constructor.className, ParentDoc.constructor.findOne);
		console.log('field:', fld);
		console.log('val:', val);
		console.log('doc:', doc);

		if (cls === undefined) {
			console.log('cls undefined')
			return false;
		}

		console.log('class find:', param.class, cls.className, typeof cls.findOne === 'function');

		if (doc._isNew) {
			var model = cls.findOne({ [fld]: val });
		} else {
			var model = cls.findOne({ [fld]: val, _id: { $ne: doc._id } });
		}

		console.log('model:', model);
		return !model;
	},
	resolveError({ nestedName }) {
		return `"${nestedName}" is not unique`;
	},
});