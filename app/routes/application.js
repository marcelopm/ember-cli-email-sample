import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // this.store.push({
    //   data: [{
    //     id: 'Inbox',
    //     type: 'mailbox',
    //     attributes: {
    //       name: 'Inbox',
    //     }
    //   }]
    // });

    return this.store.findAll('mailbox');
  }
});