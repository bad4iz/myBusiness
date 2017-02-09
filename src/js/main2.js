(function () {
   // пространство имен
    window.App = {
        Models: {},
        Collections:{},
        Views:{}
    };

    //шаблон
    window.template = function (id) {
        return _.template($('#' + id).html());
    };

    App.Models.Task = Backbone.Model.extend({

    });
    App.Views.Task = Backbone.Views.extend({});
}());