$(function () {
    // пространство имен
    window.App ={
        Models:{},
        Collections:{},
        Views:{}
    };

    // шаблон
    window.template = function (id) {
        return _.template( $('#' + id).html() );
    };

    App.Models.Task = Backbone.Model.extend({});
    App.Views.Task = Backbone.View.extend({
        tagName: 'li',
        render: function() {
            this.$el.html( this.model.get('title') );
            return this;
        }
    });

    App.Collections.Task = Backbone.Collection.extend({
        model: App.Models.Task
    });
    App.Views.Tasks = Backbone.View.extend({
        tagName: 'ul',
        render: function () {
            this.collection.each(this.assOne, this);
            return this;
        },
        addOne: function (task) {
            //создавать новый дочерний вид
            var taskView = new  App.Views.Task({ model: task});
            // добавлять его в корневой элемент
            this.$el.append(taskView.render().el);
        }
    });

    var task = [
        {
            title: ' sdfadf'
        },
        {
            title: ' sdfadf'
        },
        {
            title: ' sdfadf'
        }
    ];

    var tasks = new App.Collections.Task({collection: task});


    $('body').append(taskView.render().el);

});

