
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
// Вид списка контактов
///////////////////////////////
App.Views.ContactsView = Backbone.View.extend({
    initialize: function () {
        this.collection.on('add', this.addOne, this);
    },
    tagName: 'ul',

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
    }
});


///////////////////////////////
// Вид картинки
///////////////////////////////

App.Views.ImageView = Backbone.View.extend({
    template: _.template('<img src="<%= src %>" alt="<%= alt %>">'),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});


///////////////////////////////
// Вид списка картинок
///////////////////////////////
App.Views.ImagesView = Backbone.View.extend({
    initialize: function () {
        this.collection.on('add', this.addOne, this);

    },
    tagName: 'section',
    className: 'center slider',
    render: function () {
        this.collection.each(this.addOne, this);
        return this;
    },
    addOne: function (mod) {
        //создавать новый дочерний вид
        var imageView = new App.Views.ImageView({
            model: mod
        });
        // добавлять его в корневой элемент
        this.$el.append(imageView.render().el);

    },

});


/////////////////////////////////
//  вид text
/////////////////////////////////
App.Views.TextView = Backbone.View.extend({
    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.model.get('text'));
        return this;
    }
});


/////////////////////////////////
//  вид пункта menu
/////////////////////////////////
App.Views.MenuItemView = Backbone.View.extend({
    tagName: 'li',

    attributes : function () {
        // Return model data
        return {
            class : this.model.get( 'class' )
        };
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.model.get('title'));
        return this;
    }
})
;


///////////////////////////////
// Вид списка картинок
///////////////////////////////
App.Views.MenuView = Backbone.View.extend({
    initialize: function () {
        this.collection.on('add', this.addOne, this);
    },
    //прослушка за меню
    events: {
        "click .index": "index", // Обработчик клика  "index"
        "click .contacts": "contacts", // Обработчик клика  "contacts"
        "click .other": "other" // Обработчик клика  "other"
    },

    tagName: 'ul',

    id: 'menu',

    render: function () {
        this.collection.each(this.addOne, this);
        return this;
    },

    addOne: function (item) {
        //создавать новый дочерний вид
        var menuItemsView = new App.Views.MenuItemView({
            model: item
        });
        // добавлять его в корневой элемент
        this.$el.append(menuItemsView.render().el);
    },
    index: function () {
        controller.navigate("", true); // переход на страницу
    },
    contacts: function () {
        controller.navigate("contacts", true); // переход на страницу contacts
    },
    other: function () {
        controller.navigate("other", true); // переход на страницу other
    }
});
