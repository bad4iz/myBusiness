/**
 * Created by bad4iz on 13.02.2017.
 */
define(['backbone', 'Person'], function (Backbone, Person) {

    var PeopleCollection = Backbone.Collection.extend({
        model: Person
    });

    return PeopleCollection;
});
