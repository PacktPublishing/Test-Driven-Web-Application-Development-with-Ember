import Service, { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),
  init(){
    this._super(...arguments);
    this.get('store').createRecord('cart').save().then((cart) =>{
      this.set('cart', cart);
    });
  },
  add(item){
    let cartItem = this.get('cart.items').findBy('product.id', item.id);
    if(cartItem){
      cartItem.incrementProperty('quantity');
    } else {
      cartItem = this.get('store').createRecord('cart-item', { cart: this.get('cart'), product: item, quantity: 1 });
    }
    cartItem.save();
  },
  remove(item){
    item.destroyRecord();
  }
});