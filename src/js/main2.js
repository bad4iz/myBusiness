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

    App.Collection.Task = Backbone.Collection.extend({
        model: App.Models.Task
    });
    App.Views.Tasks = Backbone.View.extend({
        tagName: 'ul',
        render: function () {
            this.
        },
        add
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

    var tasks = new App.Collection.Task({collection: task});

    var taskView = new  App.Views.Task({ model: task});

    console.log(taskView.render().el);
    $('body').append(taskView.render().el);

});

