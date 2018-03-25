import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  price: DS.attr('number'),
  displayPrice: computed('price', function(){
    let price = parseFloat(this.get('price')),
    tax = price * 25/100;
    return price + tax;
  })
});