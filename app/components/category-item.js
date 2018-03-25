import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',
  classNames: ['list-group-item'],
  click(){
    this.set('activeCategoryId', this.get('category.id'));
    return false;
  }
});
