import Validator from '../../validator.js';


Validator.create({
	name: 'trim',
	isValid({ doc, name, nestedName, value }) {
		const isString = value => typeof value === 'string' || value instanceof String;

		if (!isString(value)) {
			return false;
		}
		
		const v = value.trim();
		if (v.length === 0) {
			return false;
			// delete doc[nestedName];
			// doc[nestedName] = null;
		} else {
			doc[nestedName] = v;
		}
		
		return true;
	},
	resolveError({ name }) {
		return `"${name}" must be a non-empty string`;
	}
});
