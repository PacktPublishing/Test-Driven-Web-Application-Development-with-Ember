import DS from 'ember-data';

export default DS.Model.extend({
  order: DS.belongsTo('order'),
  product: DS.belongsTo('product'),
  name: DS.attr('string'),
  amount: DS.attr('number'),
  quantity: DS.attr('number')
});
