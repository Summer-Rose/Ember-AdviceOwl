import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    update(question) {
      debugger;
      var params = {
        username: this.get('username'),
        category: this.get('category'),
        questionTitle: this.get('questionTitle'),
        date: this.get('date'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
