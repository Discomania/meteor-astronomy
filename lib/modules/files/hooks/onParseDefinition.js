import _has from 'lodash/has';
import _each from 'lodash/each';
import _includes from 'lodash/includes';
// import deprecated from '../../core/utils/deprecated';
import throwParseError from '../../core/utils/throw_parse_error.js';
// import reservedKeywords from '../../../core/reserved_keywords.js';


function onParseDefinition(parsedDefinition, definition, className) {
	// Check existence and validity of the "files" property.
	if (definition.files !== undefined) {
		if (!Match.test(definition.files, Object)) {
			throwParseError([{
				'class': className
			}, {
				'property': 'files'
			},
				'Files definition has to be an object'
			]);
		}
		parsedDefinition.files = definition.files;
	}
};

export default onParseDefinition;