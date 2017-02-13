define(['personView', 'backbone'], function (PersonView, Backbone) {
    var PeopleView = Backbone.View.extend({

        tagName: 'ul',

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
        }
    });
    return PeopleView;
});