import path from 'path'


function addFile(filePath, opts, callback, proceedAfterUpload) {
	const fc = this.getFilesConfig();
	if (!Meteor.isServer) {
		return fc;
	}
	if (!path.isAbsolute(filePath)) {
		const rootDir = path.resolve('.').split(`${path.sep}.meteor`)[0] + path.sep;
		filePath = path.resolve(rootDir, filePath);
	}

	return new Promise((resolve, reject) => {
		const cb = (error, fileRef) => {
			if (typeof callback === 'function') {
				callback(error, fileRef);
			}

			if (error) {
				reject(error);
			} else {
				resolve(fileRef);
			}
		};
		fc.addFile(filePath, opts, cb, proceedAfterUpload);
	});
};

export default addFile;