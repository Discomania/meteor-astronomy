function upload(config) {
	return this.getFilesConfig().insert(config)
};

export default upload;