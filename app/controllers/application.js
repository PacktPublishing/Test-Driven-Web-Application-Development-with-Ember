import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  shoppingCart: service(),
  rootCategories: computed('model', function(){
    return this.get('model').rejectBy('parent.id');
  })
});
