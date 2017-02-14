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
        'imageView': 'test/views/image/imageView',
        'imagesView': 'test/views/image/imagesView',
        'menuItemView': 'test/views/menu/menuItemView',
        'menuView': 'test/views/menu/menuView',
        'personView': 'test/views/contacts/personView',
        'peoplesView': 'test/views/contacts/peoplesView',
        'textView': 'test/views/text/textView',

        'indexPageView': 'test/views/apps/indexPageView',
        'twoPageView': 'test/views/apps/twoPageView',

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