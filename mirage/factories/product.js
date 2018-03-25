import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(){
    return faker.commerce.product();
  },
  image(){
    return faker.image.image();
  }
});
