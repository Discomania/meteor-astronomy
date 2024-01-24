const schema = {
	_id: {
		type: String
	},
	size: {
		type: Number
	},
	name: {
		type: String
	},
	type: {
		type: String
	},
	path: {
		type: String
	},
	isVideo: {
		type: Boolean
	},
	isAudio: {
		type: Boolean
	},
	isImage: {
		type: Boolean
	},
	isText: {
		type: Boolean
	},
	isJSON: {
		type: Boolean
	},
	isPDF: {
		type: Boolean
	},
	extension: {
		type: String,
		optional: true
	},
	ext: {
		type: String,
		optional: true
	},
	extensionWithDot: {
		type: String,
		optional: true
	},
	mime: {
		type: String,
		optional: true
	},
	'mime-type': {
		type: String,
		optional: true
	},
	_storagePath: {
		type: String
	},
	_downloadRoute: {
		type: String
	},
	_collectionName: {
		type: String
	},
	public: {
		type: Boolean,
		optional: true
	},
	meta: {
		type: Object,
		optional: true
	},
	userId: {
		type: String,
		optional: true
	},
	updatedAt: {
		type: Date,
		optional: true
	},
	versions: {
		type: Object,
	}
};

export default schema;