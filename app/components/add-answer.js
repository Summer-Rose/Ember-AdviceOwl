import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        username: this.get('username') ? this.get('username') : "",
        answer: this.get('answer') ? this.get('answer') : "",
        question: this.get('question') ? this.get('question') : "",
        date: this.get('date') ? this.get('date') : "",
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
