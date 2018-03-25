import { Factory, faker, trait, association } from 'ember-cli-mirage';

export default Factory.extend({
  name(){
    return faker.commerce.department();
  },
  image: association(),
  afterCreate(category){
    category.createImage({ url: faker.image.image(250, 250) });
    category.save();
  },
  withChildren: trait({
    afterCreate(category, server){
      category.children = server.createList('category', 3);
      category.save();
    }
  })
});