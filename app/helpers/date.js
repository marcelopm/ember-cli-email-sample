import Ember from 'ember';

export default Ember.Helper.helper(function (date) {
    return moment(date[0]).format('MMM Do');
});