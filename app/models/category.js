import DS from 'ember-data';
import Imageable from './imageable';

export default Imageable.extend({
  name: DS.attr('string'),
  products: DS.hasMany('product'),
  children: DS.hasMany('category', { inverse: 'parent' }),
  parent: DS.belongsTo('category', { inverse: 'children' })
});
