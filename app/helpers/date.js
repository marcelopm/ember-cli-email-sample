// Handlebars helper
export default Ember.Helper.helper(function (date) {
    return moment(date[0]).format('MMM Do');
});