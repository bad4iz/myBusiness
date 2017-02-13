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
        'Text': "test/models/Text"

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
require(['Text'], function (TextModel) {
    var text = new TextModel;
    console.log(text);
});