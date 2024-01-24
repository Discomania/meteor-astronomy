import _each from 'lodash/each';
import isEmpty from 'lodash/isempty';
import { FilesCollection } from 'meteor/ostrio:files';
import collectionSchema from '../schema'

import addFile from '../class_static_methods/addFile';
import link from '../class_static_methods/link';
import upload from '../class_static_methods/upload';

import protoLink from '../class_prototype_methods/link';


function onApplyDefinition(Class, parsedDefinition, className) {
	let schema = Class.schema;

	if (!isEmpty(parsedDefinition.files)) {

		Class.extend({
			fields: collectionSchema,
		}, ['fields']);

		// Add files to the class.
		schema.files = new FilesCollection(parsedDefinition.files);

		Class.addFile = addFile;
		Class.link = link;
		Class.upload = upload;

		Class.prototype.link = protoLink;

	}
};

export default onApplyDefinition;