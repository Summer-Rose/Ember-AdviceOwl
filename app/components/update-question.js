import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    update(question) {
      var params = {
        username: this.get('username'),
        category: this.get('category'),
        question: this.get('question'),
        date: Date.now()
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
