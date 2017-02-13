/**
 *   модель картинок.
 */
define(['backbone'], function (Backbone) {
    var Image = Backbone.Model.extend({
        defaults: {
            src: 'img/backbone.png',
            title: 'backbone',
            alt: 'backbone'
        }
    });
    return Image;
});


