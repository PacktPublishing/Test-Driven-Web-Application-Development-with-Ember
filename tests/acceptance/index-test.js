import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /', async function(assert) {
    server.createList('product', 10);

    await visit('/');

    assert.equal(currentURL(), '/');
    assert.equal(this.element.querySelectorAll('.thumbnail').length, 10);
  });

  test('clicking the thumbnail', async function(assert){

    server.create('product', { name: "My awesome product" });

    await visit('/');
    await click('a.thumbnail');

    assert.equal(this.element.querySelector('h2').textContent, "My awesome product");
  });
});
