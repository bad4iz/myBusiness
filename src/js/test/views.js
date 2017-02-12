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
    }
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

// todo засунуть шаблон сюда
    template: template('img'),

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
        this.carusel();
    },
    carusel: function () {
        //каруселька
        $(".regular").slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
        $(".center").slick({
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
        $(".variable").slick({
            dots: true,
            infinite: true,
            variableWidth: true
        });
    }
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
//  вид menu
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
