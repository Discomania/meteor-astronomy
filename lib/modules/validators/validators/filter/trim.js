import Validator from '../../validator.js';


Validator.create({
	name: 'trim',
	isValid({ doc, name, nestedName, value }) {
		if (typeof value !== 'string' || !(value instanceof String)) {
			return false;
		}
		const v = value.trim();
		if (v.length === 0) {
			delete doc[nestedName];
			// doc[nestedName] = null;
		}

		return true;
	},
	resolveError({ name }) {
		return `"${name}" must be a string`;
	}
});

