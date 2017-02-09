(function () {
    // пространство имен
    window.App = {
        Models: {},
        Collections: {},
        Views: {}
    };

    //шаблон
    window.template = function (id) {
        return _.template($('#' + id).html());
    };

    App.Models.Task = Backbone.Model.extend({});
    App.Views.Task = Backbone.View.extend({
        tagName: 'li',

        render: function () {
            this.$el.html(this.model.get('title'));
            return this;
        }
    });
    App.Collection.Task = Backbone.Collections.extend({
        model: App.Models.Task
    });

    var tasks = new App.Collections.Task([
        {
            title: "sdfs",
            priority: 4
        },
        {
            title: "sdfs",
            priority: 4
        }
    ]);
    var taskView = new App.Views.Task({model: task});

    console.info(taskView.render().el);
}());