import DS from 'ember-data';

export default DS.Model.extend({
  cart: DS.belongsTo('cart'),
  product: DS.belongsTo('product'),
  quantity: DS.attr('number')
});
