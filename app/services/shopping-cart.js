import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  token: null,
  itemsCount: computed('token', function(){
    return Object.keys(this.get('items')).length;
  }),
  init(){
    this._super(...arguments);
    if(localStorage.getItem('cartItems')){
      this.set('items', JSON.parse(localStorage.getItem('cartItems')));
    } else {
      this.set('items', {});
    }
  },
  add(item){
    let items = this.get('items'),
    itemId = item.id;

    if(items[itemId]){
      items[itemId].quantity += 1;
    } else {
      items[itemId] = { quantity: 1, item: item };
    }
    this.set('token', Math.random());
    this.set('items', items);
    localStorage.setItem('cartItems', JSON.stringify(items));
  },
  remove(item){
    let items = this.get('items'),
    itemId = item.id;
    delete items[itemId];

    this.set('items', {});
    this.set('token', Math.random());
    this.set('items', items);
  }
});