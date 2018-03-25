import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  rootCategories: computed('model', function(){
    return this.get('model').rejectBy('parent.id');
  })
});
