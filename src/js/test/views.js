/////////////////////////////////
//  вид person
/////////////////////////////////
App.Views.
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

App.Views.



/////////////////////////////////
//  вид text
/////////////////////////////////
App.Views.


/////////////////////////////////listener
//  вид пункта menu
/////////////////////////////////
App.Views.

///////////////////////////////
// Вид списка картинок
///////////////////////////////
App.Views.
