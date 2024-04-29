import _each from 'lodash/each';

function onMergeDefinitions(targetDefinition, sourceDefinition, ClassName) {
  _each(sourceDefinition.relations, function(relation, relationName) {
    targetDefinition.relations[relationName] = relation;
  });
};

export default onMergeDefinitions;