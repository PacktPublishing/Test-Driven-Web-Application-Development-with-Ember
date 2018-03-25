import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ['categoryId'],
  categoryId: undefined,
  shoppingCart: service(),
  categoryFiltered: computed('categoryId', function(){
    return this.get('categoryId') != undefined;
  }),
  rootCategories: computed('model', function(){
    return this.get('model').rejectBy('parent.id');
  }),
  actions: {
    showAllProducts(){
      this.set('categoryId', undefined);
    }
  }
});
