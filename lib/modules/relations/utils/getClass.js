import Class from "../../../core/class";

export default function getClass(defClass) {
	if (typeof defClass === 'string') {
		return Class.get(defClass);
	} else {
		return defClass;
	}
}
