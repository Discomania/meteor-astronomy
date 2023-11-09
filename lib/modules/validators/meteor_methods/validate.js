import documentValidate from '../utils/document_validate.js';
import { check, Match } from 'meteor/check';
import { EJSON } from 'meteor/ejson';

function validate(options) {
  check(options, Match.Any);
  options = EJSON.fromJSONValue(options)

  return documentValidate(options);
};

export default validate;