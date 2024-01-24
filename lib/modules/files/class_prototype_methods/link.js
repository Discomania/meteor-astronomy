function link(config) {
	const Class = this.constructor;
	const collection = Class.getFilesConfig();
	const doc = collection.findOne(this._id);

	return doc.link(config)
};

export default link;