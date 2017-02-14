require.config({
    paths: {
        jquery: "lib/jquery-1.8.3",
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        slick: '../slick/slick',

        // models
        'image': "test/models/Image",
        'menuItem': "test/models/MenuItem",
        'person': "test/models/Person",
        'text': "test/models/Text",

        // collections
        'menuCollection': 'test/collections/menuCollection',
        'imageCollection': 'test/collections/imageCollection',
        'peopleCollection': 'test/collections/peopleCollection',

        // views
        'imageView': 'test/views/imageView',
        'imagesView': 'test/views/imagesView',
        'menuItemView': 'test/views/menuItemView',
        'menuView': 'test/views/menuView',
        'personView': 'test/views/personView',
        'peoplesView': 'test/views/peoplesView',
        'textView': 'test/views/textView',

        'indexPageView': 'test/views/indexPageView',
        'twoPageView': 'test/views/twoPageView',


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

    new Controller(); // Создаём контроллер

    Backbone.history.start(); // Запускаем HTML5 History push

});