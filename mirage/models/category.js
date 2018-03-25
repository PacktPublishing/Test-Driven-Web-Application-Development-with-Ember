import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  children: hasMany('category', { inverse: 'parent' }),
  parent: belongsTo('category', { inverse: 'children' })
});