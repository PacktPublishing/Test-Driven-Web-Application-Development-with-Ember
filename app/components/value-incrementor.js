import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  classNames: ['btn', 'btn-link'],
  keyPress(){
    this.incrementProperty('value');
  },
  click(){
    this.incrementProperty('value');
  }
});
