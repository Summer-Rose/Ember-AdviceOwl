import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        username: this.get('username') ? this.get('username') : "",
        question: this.get('question') ? this.get('question') : "",
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
