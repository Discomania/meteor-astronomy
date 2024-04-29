function getRelation(relationName) {
  return this.schema.relations[relationName];
};

export default getRelation;