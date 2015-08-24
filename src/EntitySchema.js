'use strict';

function EntitySchema(key, options) {
  if (!key || typeof key !== 'string') {
    throw new Error('A string non-empty key is required');
  }

  options = options || {};

  this._idAttribute = options.idAttribute || 'id';
  this._key = key;
}

EntitySchema.prototype.getKey = function () {
  return this._key;
};

EntitySchema.prototype.getIdAttribute = function () {
  return this._idAttribute;
};

EntitySchema.prototype.define = function (nestedSchema) {
  for (var key in nestedSchema) {
    if (nestedSchema.hasOwnProperty(key)) {
      this[key] = nestedSchema[key];
    }
  }
};

module.exports = EntitySchema;