function addValidator(fieldName, validator) {
	let Class = this;

	if (!Match.test(fieldName, String)) {
		throw TypeError(
			'The first argument of the "addValidator" function has to be a string'
		);
	}
	if (!Match.test(validator, Object)) {
		throw TypeError(
			'The second argument of the "addValidator" function has to be an Object'
		);
	}
	if (!Class.schema.validators[fieldName]) {
		Class.schema.validators[fieldName] = [];
	}

	Class.schema.validators[fieldName].push(validator);
};

export default addValidator;