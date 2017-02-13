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

        //
        'Image': "test/models/Image",
        'MenuItem': "test/models/MenuItem",
        'Person': "test/models/Person",
        'Text': "test/models/Text",

        // route
        'Controller': 'test/routers/Controller'

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
require(['backbone', 'Controller'], function (Backbone, Controller) {

    var controller = new Controller(); // Создаём контроллер

    Backbone.history.start(); // Запускаем HTML5 History push

});