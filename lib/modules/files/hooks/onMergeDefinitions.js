import _extend from 'lodash/extend';


function onMergeDefinitions(targetDefinition, sourceDefinition, ClassName) {
	/* if (sourceDefinition.files) {
	  targetDefinition.files = sourceDefinition.files;
	} */
	if (sourceDefinition.files !== undefined) {
		targetDefinition.files = _extend(
			{},
			targetDefinition.files,
			sourceDefinition.files
		);
	}
};

export default onMergeDefinitions;