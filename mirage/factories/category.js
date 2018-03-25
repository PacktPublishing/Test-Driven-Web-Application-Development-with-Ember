import { Factory, faker, trait } from 'ember-cli-mirage';

export default Factory.extend({
  name(){
    return faker.commerce.department();
  },
  image(){
    return faker.image.image(250, 250);
  },
  withChildren: trait({
    afterCreate(category, server){
      category.children = server.createList('category', 3);
      category.save();
    }
  })
});