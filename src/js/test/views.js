/*
|---------------------------------------------------
|  Global App View
|---------------------------------------------------
*/
App.Views.App = Backbone.View.extend({
    initialize: function () {
        console.log(this.collection.toJSON());
    }
});

///////////////////////////////
//  список видов контактов
///////////////////////////////
var ContactsView = Backbone.View.extend({
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
        var personView = new PersonView({
            model: person
        });
        // добавлять его в корневой элемент
        this.$el.append(personView.render().el);
    },
    remove: function () {
        this.$el.remove();
    }
});
