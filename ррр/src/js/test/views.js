/*
|---------------------------------------------------
|  Global App View
|---------------------------------------------------
*/
App.Views.App = Backbone.View.extend({
    initialize: function() {
        console.log( this.collection.toJSON() );
    }
});

App.Views.Index = Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
        console.log('sfsafdsa');
    },

    render: function () {
        return "sdfafasfda";
    }
});

// одно отображение
App.Views.Image = Backbone.View.extend({
    initialize: function () {

    },
    tagName: 'li',
    render: function() {
        this.$el.html( this.model.get('link'));
        return this;
    }
});

App.Views.Images = Backbone.View.extend({
    tagName: 'ul',

    initialize: function () {
    },

    render: function () {
        this.collection.each(this.addOne, this);
        return this;
    },
    addOne: function (img) {
        //создавать новый дочерний вид
        var imgView = new  App.Views.Image({ model: img});
        // добавлять его в корневой элемент
        this.$el.append(imgView.render().el);
    }
});

//  меню
var Start = Backbone.View.extend({
    el: $("#menu"), // DOM элемент widget'а
    events: {
        "click .index": "clickIndex", // Обработчик клика на кнопке "start"
        "click .contacts": "clickContacts", // Обработчик клика на кнопке "contacts"
        "click .other": "clickOther" // Обработчик клика на кнопке "other"
    },
    clickIndex: function () {
        controller.navigate("index", true); // переход на страницу index
        console.log('clickIndex');
    },
    clickContacts: function () {
        controller.navigate("contacts", true); // переход на страницу contacts
        console.log('clickContacts');
    },
    clickOther: function () {
        controller.navigate("other", true); // переход на страницу other
        console.log('clickOther');
    }
});
