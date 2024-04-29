import _each from 'lodash/each';
import convertToFunction from "../utils/convertToFunction";

function onApplyDefinition(Class, parsedDefinition, className) {
  let schema = Class.schema;

  // Add helpers to the class.
  _each(parsedDefinition.relations, (relation, relationName) => {
	const fn = convertToFunction(relation);
    schema.relations[relationName] = fn;
    Class.prototype[relationName] = fn;
  });
};

export default onApplyDefinition;