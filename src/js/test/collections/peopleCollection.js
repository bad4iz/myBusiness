define(['backbone', 'person'], function (Backbone, Person) {
    var PeopleCollection = Backbone.Collection.extend({
        model: Person
    });
    return PeopleCollection;
});