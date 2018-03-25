import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    return parseFloat(serialized).toFixed(2);
  },

  serialize(deserialized) {
    return parseFloat(deserialized);
  }
});
