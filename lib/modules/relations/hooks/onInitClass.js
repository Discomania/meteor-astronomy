// import deprecated from '../../core/utils/deprecated';

// Class static Relations.
import getRelation from '../class_static_methods/getRelation.js';
import getRelations from '../class_static_methods/getRelations.js';
import hasRelation from '../class_static_methods/hasRelation.js';

function onInitClass(Class, className) {
  // Class static Relations.
  Class.getRelation = getRelation;
  Class.getRelations = getRelations;
  Class.hasRelation = hasRelation;
};

export default onInitClass;