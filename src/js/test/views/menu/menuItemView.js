define(['backbone'], function (Backbone) {

    var MenuItemView = Backbone.View.extend({
        initialize: function () {
            this.render();
        },
        tagName: 'li',

        id: 'menu',

        template: _.template('<a class="<%= myclass %>" href="<%= href %>"> <%= title %></a>'),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return MenuItemView;
});