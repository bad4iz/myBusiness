//////////////////////////////////
//  наблюдение за менюшкой
//////////////////////////////////
App.Views.Start = Backbone.View.extend({
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
var start = new App.Views.Start();

/////////////////////////////////
//  вид person
/////////////////////////////////


App.Views.PersonView = Backbone.View.extend({
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

///////////////////////////////
//  список видов контактов
///////////////////////////////
App.Views.ContactsView = Backbone.View.extend({
    initialize: function () {
        this.model.on('destroy', this.remove, this);
    },
    tagName: 'ul',

    events: {
        'click nav': 'destroy'
    },
    destroy: function () {
        console.lof("destroy: function ()");
        this.model.destroy();
    },

    initialize: function () {
        this.collection.on('add', this.addOne, this);
    },

    render: function () {
        this.collection.each(this.addOne, this);
        return this;
    },
    addOne: function (person) {
        //создавать новый дочерний вид
        var personView = new App.Views.PersonView({
            model: person
        });
        // добавлять его в корневой элемент
        this.$el.append(personView.render().el);
    },
    remove: function () {
        this.$el.remove();
    }
});
