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
  },
  checkOut(name){
    return this.get('store').createRecord('order', { name: name }).save().then((order) => {
      this.get('cart.items').forEach(item => {
        this.get('store').createRecord('order-item', { order: order, product: item.get('product'), name: item.get('product.name'), amount: item.get('product.price'), quantity: item.get('quantity') }).save();
      });
      return this.get('cart.items').invoke('destroyRecord');
    });
  },
});