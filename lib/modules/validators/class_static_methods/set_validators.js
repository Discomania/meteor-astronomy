function setValidators(validators) {
	let Class = this;

	if (!Match.test(validators, Object)) {
		throw TypeError(
			'The first argument of the "setValidators" function has to be an Object'
		);
	}

	Class.schema.validators = validators;
};

export default setValidators;