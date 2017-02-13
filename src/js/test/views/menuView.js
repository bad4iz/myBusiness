/**
 * Created by bad4iz on 13.02.2017.
 */
define(['menuItemView', 'backbone'], function (MenuItemView, Backbone) {
    var MenuView = Backbone.View.extend({
        tagName: 'ul',

        id: 'menu',

        render: function () {
            this.collection.each(this.addOne, this);
            return this;
        },

        addOne: function (item) {
            //создавать новый дочерний вид
            var menuItemsView = new MenuItemView({
                model: item
            });

            // добавлять его в корневой элемент
            this.$el.append(menuItemsView.render().el);
        }
    });
    return MenuView;
});