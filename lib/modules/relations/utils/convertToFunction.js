import getClass from "./getClass";

function convertToFunction({ type, local, foreign, class: defClass, options = {} }) {
	const relClass = getClass(defClass);

	switch (type) {
		case 'one':
			return function (filter = {}) {
				return relClass.findOne({
					[foreign]: this[local],
					...filter
				}, options);
			};
			break;
		case 'many':
		default:
			return function (filter = {}) {
				return relClass.find({
					[foreign]: this[local],
					...filter
				}, options);
			};
			break;
		case 'many-many-local':
			return function (filter = {}) {
				return relClass.find({
					[foreign]: { $in: this[local] },
					...filter
				}, options);
			};
			break;
		case 'many-many-foreign':
			return function (filter = {}) {
				return relClass.find({
					[foreign]: { $elemMatch: this[local] },
					...filter
				}, options);
			};
			break;
	}
}

export default convertToFunction;