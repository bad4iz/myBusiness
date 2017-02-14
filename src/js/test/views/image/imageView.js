/**
 * Created by bad4iz on 13.02.2017.
 */
define(['backbone'], function (Backbone) {
    var ImageView = Backbone.View.extend({
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
    return ImageView;
});