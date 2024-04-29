import _has from 'lodash/has';

function hasRelation(relationName) {
  return _has(this.schema.relations, relationName);
};

export default hasRelation;