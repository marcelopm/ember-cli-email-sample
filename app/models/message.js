import DS from "ember-data";

var Message = DS.Model.extend({
    subject: DS.attr('String'),
    from: DS.attr('String'),
    to: DS.attr('String'),
    body: DS.attr('String'),
});

Message.reopenClass({
    FIXTURES: [
        {
            id: 1,
            type: "message",
            subject: "Welcome to Ember",
            from: "tomster@emberjs.com",
            to: "user@example.com",
            date: new Date(),
            body: "Welcome to Ember. We hope you enjoy your stay"
        }, {
            id: 2,
            type: "message",
            subject: "Great Ember Resources",
            from: "tomster@emberjs.com",
            to: "user@example.com",
            date: new Date(),
            body: "Have you seen embercasts.com? How about emberaddons.com?"
        },
        {
            id: 3,
            type: "message",
            subject: "You have one the lottery!!!111ONEONE",
            from: "419@thereallotteryhonest.com",
            to: "user@example.com",
            date: new Date(),
            body: "You have ONE the lottery! You only have to send us a small amount of monies to claim your prize"
        },
        {
            id: 4,
            type: "message",
            subject: "Should I use Ember",
            from: "user@example.com",
            to: "tomster@emberjs.com",
            date: new Date(),
            body: "Ember looks pretty good, should I use it?"
        }
    ]
});

export default Message;