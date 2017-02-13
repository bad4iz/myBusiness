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
        'AppView' : "test/views"

    }
});
require(['AppView'], function (AppView) {
    new AppView;
});