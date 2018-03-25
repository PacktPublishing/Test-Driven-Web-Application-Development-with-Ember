import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  classNames: ['btn', 'btn-link'],
  keyPress(){
    this.decrementProperty('value');
  },
  click(){
    this.decrementProperty('value');
  }
});
