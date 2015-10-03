import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  date: DS.attr(),
  category: DS.attr(),
  questionTitle: DS.attr(),
  answers: DS.hasMany('answer', { async: true})
});
