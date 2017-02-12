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
    tagName: 'div',

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

    attributes: function () {
        // Return model data
        return {
            class: this.model.get('class')
        };
    },

    initialize: function () {
        this.render();
    },
    events: {
        // "click": "click" // Обработчик клика

    },
    render: function () {
        this.$el.html(this.model.get('title'));
        return this;
    },
    click: function () {
    menuCollection.each(
        function(mod){
            mod.set('class', mod.get('class').replace(" Active", ' ') )});
    this.model.set('class', this.model.get('class') + ' Active', {validate:true} );
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
    events: {
        "click .index": "index", // Обработчик клика  "index"
        "click .contacts": "contacts", // Обработчик клика  "index"
        "click .other": "other" // Обработчик клика  "index"
    },
    tagName: 'ul',
    render: function () {


        this.collection.each(this.addOne, this);
        return this;
    },
    id: 'menu',
    addOne: function (item) {
        //создавать новый дочерний вид
        var menuItemsView = new App.Views.MenuItemView({
            model: item
        });


        // добавлять его в корневой элемент
        this.$el.append(menuItemsView.render().el);
    },
    index: function () {
        // удаляем у всех моделей Active
        menuCollection.each(function(mod){
            mod.set('class', mod.get('class').replace(" Active", ' ') )
        });

        // получаем модель меню
        var modelMenu = menuCollection.models[0];


        // добавляем только этой модели Active
        modelMenu.set('class', modelMenu.get('class') + ' Active', {validate:true} );

        controller.navigate("", true); // переход на страницу
    },
    contacts: function () {
        // удаляем у всех моделей Active
        menuCollection.each(function(mod){
            mod.set('class', mod.get('class').replace(" Active", ' ') )
        });

        // получаем модель меню
        var modelMenu = menuCollection.models[1];


        // добавляем только этой модели Active
        modelMenu.set('class', modelMenu.get('class') + ' Active', {validate:true} );

        controller.navigate("contacts", true); // переход на страницу contacts
    },
    other: function () {
        controller.navigate("other", true); // переход на страницу other
    }
});

