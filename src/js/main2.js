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
    App.Collections.Task = Backbone.Collection.extend({
        model: App.Models.Task
    });

    App.Views.Task = Backbone.View.extend({
        tagName: 'ul',
        render: function () {
            this.collection.each(this.addOne, this);
            return this;
        },
        addOne: function (task) {
            //создавать новый дочернии вид
            var taskView = new App.Views.Task({model: task});

            // добавлять его в корневой элемент
            this.$el.append(taskView.render().el);
        }
    });



    var tasksCollections = new App.Collections.Task([
        {
            title: "выучить джавускрипт",
            priority: 4
        },
        {
            title: "выучить backbone",
            priority: 4
        }
    ]);
    //
    // console.info(taskView.render().el);

var tasksView = new App.Views.Task({collection: tasksCollections});


tasksView.render();
$('body').html(tasksView.el);

}());