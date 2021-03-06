export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.namespace = '/api';

  this.get('/productes');
  this.get('/productes/:id');
  this.get('/categories');
  this.get('/images/:id');
  this.post('/carts');
  this.post('/cart-items');
  this.patch('/cart-items/:id');
  this.del('/cart-items/:id');
  this.get('/orders');
  this.post('/orders');
  this.post('/order-items');

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
