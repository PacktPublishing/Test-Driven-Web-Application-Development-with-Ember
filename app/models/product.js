import DS from 'ember-data';
import Imageable from './imageable';
import { computed } from '@ember/object';

export default Imageable.extend({
  name: DS.attr('string'),
  price: DS.attr('price'),
  traits: DS.attr('array'),
  category: DS.belongsTo('category'),
  displayPrice: computed('price', function(){
    let price = parseFloat(this.get('price')),
    tax = price * 25/100;
    return price + tax;
  }),
});