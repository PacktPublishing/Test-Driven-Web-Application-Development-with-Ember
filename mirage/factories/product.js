import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  name(){
    return faker.commerce.product();
  },
  image: association(),
  afterCreate(product){
    product.createImage({ url: faker.image.image(250, 250) });
    product.save();
  }
});
