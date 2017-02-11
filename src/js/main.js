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


    //////////////////////////////////
    //  наблюдение за менюшкой
    //////////////////////////////////
    var Start = Backbone.View.extend({
        el: $("nav"), // DOM элемент widget'а
        events: {
            "click .index": "index", // Обработчик клика  "index"
            "click .contacts": "contacts", // Обработчик клика  "index"
            "click .other": "other" // Обработчик клика  "index"
        },
        index: function () {
            controller.navigate("", true); // переход на страницу
        },
        contacts: function () {
            controller.navigate("contacts", true); // переход на страницу
        },
        other: function () {
            controller.navigate("other", true); // переход на страницу
        },
    });

    var start = new Start();

    /////////////////////////////////
    //  model person
    /////////////////////////////////
    var Person = Backbone.Model.extend({
        defaults: {
            name: 'Dima',
            age: 23,
            occupation: 'web developer'
        }
    });

    /////////////////////////////////
    //  вид person
    /////////////////////////////////


    var PersonView = Backbone.View.extend({
        tagName: 'li',

        template: template('person-id'),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });


//    var contactsView = new ContactsView({
//        collection: contactCollection
//    });
//




    var controller = new Controller(); // Создаём контроллер

    Backbone.history.start(); // Запускаем HTML5 History push


}());
