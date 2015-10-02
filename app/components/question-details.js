import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
  saveAnswer(params) {
   this.sendAction('saveAnswer', params);
 },

 deleteOKAY(answer) {
   if(confirm('Are you sure you want to delete this answer?')) {
     this.sendAction('deleteAnswer', answer);
   }
 }
}
});
