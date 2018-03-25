import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  url(){
    return faker.image.image(250, 250);
  }
});
