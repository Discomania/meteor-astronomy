import classUpsert from '../utils/class_upsert.js';
import { check, Match } from 'meteor/check';

function upsert(args) {
  check(args, Match.Any);
  args = EJSON.fromJSONValue(args)

  return classUpsert(args);
};

export default upsert;