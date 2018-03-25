import Controller, { inject as controller } from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  application: controller(),
  selectedProducts: computed('model', 'application.categoryId', function(){
    let categoryId = this.get('application.categoryId');
    if(categoryId){
      return this.get('model').filterBy('category.id', categoryId);
    }
    return this.get('model');
  }),
  init(){
    this._super(...arguments);
    this.set('compareList', []);
  },
  actions: {
    addToCompare(product){
      this.get('compareList').pushObject(product);
    }
  }
});
