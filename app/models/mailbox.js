import DS from "ember-data";

var Mailbox = DS.Model.extend({
    name: DS.attr('string'),
    messages: DS.hasMany('message', {async: true})
});

Mailbox.reopenClass({
    FIXTURES: [
        {
            name: "Inbox",
            id: "inbox",
            type: "mailbox",
            messages: [
                {
                    id: 1,
                    type: "message"
                }, {
                    id: 2,
                    type: "message"
                }
            ]
        }, {
            name: "Spam",
            id: "spam",
            messages: [
                {
                    id: 3,
                    type: "message"
                }
            ]
        }, {
            name: "Sent Mail",
            id: "sent-mail",
            messages: [
                {
                    id: 4,
                    type: "message"
                }
            ]
        }
    ]
});

export default Mailbox;