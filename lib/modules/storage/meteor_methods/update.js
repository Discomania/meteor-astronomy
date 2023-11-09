import classUpdate from '../utils/class_update.js';
import { check, Match } from 'meteor/check';

function update(args) {
  check(args, Match.Any);
  args = EJSON.fromJSONValue(args)

  return classUpdate(args);
};

export default update;