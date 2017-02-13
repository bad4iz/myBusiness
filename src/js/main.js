// (function () {
//     window.App = {
//         Models: {},
//         Views: {},
//         Collections: {},
//         Router: {}
//     };
//
//     // хелпер шаблона
//     window.template = function (id) {
//         return _.template($('#' + id).html());
//     };
//
// }());


require.config({
    paths: {
        jquery: "lib/jquery-1.8.3",
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',

        // models
        'image': "test/models/Image",
        'menuItem': "test/models/MenuItem",
        'person': "test/models/Person",
        'text': "test/models/Text",

        // collections
        'menuCollection': 'test/collections/menuCollection',
        'imageCollection': 'test/collections/imageCollection.js',
        'peopleCollection': 'test/collections/peopleCollection',

        // views
        'imagesView': 'test/views/imagesView',
        'imageView': 'test/views/imageView',
        'menuItemView': 'test/views/menuItemView',
        'menuView': 'test/views/menuView',
        'peopleView': 'test/views/peopleView',
        'personView': 'test/views/personView',
        'textView': 'test/views/textView',


        // route
        'controller': 'test/routers/Controller'

    }, shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});
require(['backbone', 'controller'], function (Backbone, Controller) {

    var controller = new Controller(); // Создаём контроллер

    Backbone.history.start(); // Запускаем HTML5 History push

});