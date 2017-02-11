(function () {
    window.App = {
        Models: {},
        Views: {},
        Collections: {},
        Router: {}
    };

    // хелпер шаблона
    window.template = function (id) {
        return _.template($('#' + id).html());
    };

}());
