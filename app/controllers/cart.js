import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  shoppingCart: service(),
  actions: {
    removeFromCart(item){
      this.get('shoppingCart').remove(item);
    },
    checkOut(){
      if(this.get('shoppingCart').checkOut(this.get('customerName'))){
        this.transitionToRoute('orders');
      }
    }
  }
});
