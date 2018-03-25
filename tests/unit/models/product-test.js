import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | product', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('product', {}));
    assert.ok(model);
  });

  test('it displays price with tax', function(assert){
    let price = parseFloat(Math.random() * 1000),
    tax = price * 25/100;
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('product', { price: price }));

    assert.equal(model.get('displayPrice'), price + tax);
  });

});
