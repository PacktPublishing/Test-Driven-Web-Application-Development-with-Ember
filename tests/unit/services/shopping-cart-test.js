import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { run } from "@ember/runloop";

module('Unit | Service | shopping-cart', function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    run(this, function(){
      let service = this.owner.lookup('service:shopping-cart');
      assert.ok(service);
    });
  });
});

