import { Factory, faker, trait, association } from 'ember-cli-mirage';

export default Factory.extend({
  name(){
    return faker.commerce.department();
  },
  image: association(),
  withChildren: trait({
    afterCreate(category, server){
      category.children = server.createList('category', 3);
      category.save();
    }
  }),
  afterCreate(category, server){
    category.createImage({ url: faker.image.image(250, 250) });
    category.products = server.createList('product', 3);
    category.save();
  }
});