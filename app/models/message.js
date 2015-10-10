import DS from "ember-data";

var Message = DS.Model.extend({
    subject: DS.attr('String'),
    from: DS.attr('String'),
    to: DS.attr('String'),
    body: DS.attr('String'),
});

export default Message;