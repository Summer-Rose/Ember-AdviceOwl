import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        username: this.get('username') ? this.get('username') : "",
        questionTitle: this.get('question') ? this.get('question') : "",
        category: this.get('category') ? this.get('category') : "",
        date: this.get('date') ? this.get('date') : "",
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
