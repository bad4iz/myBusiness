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
    App.Views.Task = Backbone.Views.extend({
        tagName: 'li',

        render: function () {
            this.$el.html(this.model.get('title'));
            return this;
        }
    });

    var task = new App.Models.Task({
        title: 'сходить в магазин',
        priority: 4
    });
    var taskView = new App.Views.Task({model: task});

    console.info(taskView.render().el);
}());