(function () {
    window.App = {
        Models: {},
        Views: {},
        Collection: {},
        Router: {}
    };

    // хелпер шаблона
    window.template = function (id) {
        return _.template($('#' + id).html());
    };

}());
