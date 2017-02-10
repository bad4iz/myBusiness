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

    // модель
    App.Models.Task = Backbone.Model.extend({
        initialize: function () {
            console.log('initialize');

        },
        defaults: {
            title: 'Вася'
        },
        validate: function( attrs ) {
            console.log('ddddddddddddddddddddddddddddddddddddddddddd');
        },
        walk: function () {
            console.log('гуляй вася');
        }
    });

    // одно отображение
    App.Views.Task = Backbone.View.extend({
        initialize: function () {
            this.model.on('change', this.render, this);
        },
        tagName: 'li',
        template: template('taskTemplate'),
        render: function() {
            var template = this.template(this.model.toJSON());
            this.$el.html( template );
            return this;
        },
        events:{
            'click .edit': 'editTask'
        },
        editTask: function () {
           var newTaskTitle = prompt('как обозвать задачу', this.model.get('title'));
           this.model.set('title', newTaskTitle);
        }
    });

    // коллекция задач
    App.Collections.Task = Backbone.Collection.extend({
        model: App.Models.Task
    });

    App.Views.Tasks = Backbone.View.extend({
        tagName: 'ul',
        render: function () {
            this.collection.each(this.addOne, this);
            return this;
        },
        addOne: function (task) {
            //создавать новый дочерний вид
            var taskView = new  App.Views.Task({ model: task});
            // добавлять его в корневой элемент
            this.$el.append(taskView.render().el);
        }
    });

    // заглушка
    var tet = [
        {
            title: 'киношка'
        },
        {
            title: 'игрулька'
        },
        {
            title: 'закежка'
        }
    ];

    var tasksCollection = new App.Collections.Task(tet);


    var tasksView = new App.Views.Tasks({collection: tasksCollection});
    $('.tasks').html(tasksView.render().el);

});

