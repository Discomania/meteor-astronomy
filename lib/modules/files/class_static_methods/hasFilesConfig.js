import _has from 'lodash/has';

function hasFilesConfig() {
  return _has(this.schema, 'files');
};

export default hasFilesConfig;