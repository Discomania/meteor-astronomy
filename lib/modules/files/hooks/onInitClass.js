// import deprecated from '../../core/utils/deprecated';

// Class static helpers.
import getFilesConfig from '../class_static_methods/getFilesConfig';
import hasFilesConfig from '../class_static_methods/hasFilesConfig';

function onInitClass(Class, className) {
	Class.getFilesConfig = getFilesConfig;
	Class.hasFilesConfig = hasFilesConfig;
};

export default onInitClass;