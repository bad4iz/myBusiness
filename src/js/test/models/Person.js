/**
 *      model person
 *
 */

define(['backbone'], function (Backbone) {
    var Person = Backbone.Model.extend({
        defaults: {
            name: '',
            age: '',
            occupation: ''
        }
    });
    return Person;
});