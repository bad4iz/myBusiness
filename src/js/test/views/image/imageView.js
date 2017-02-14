/**
 * Created by bad4iz on 13.02.2017.
 */
define(['backbone', 'vent'], function (Backbone, vent) {
    var ImageView = Backbone.View.extend({
        tagName: 'div',

        template: _.template('<img src="<%= src %>" alt="<%= alt %>">'),

        initialize: function () {
            // this.on('all', this.clear(), this);
            // this.remove();
            // this.clear();
            this.render();

        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            // this.remove();
            // this.clear();
            return this;
        },

        // Удаление DOM элемента
        remove: function() {
            this.$el.remove();
        },
        // Удаление элемента и модели
        clear: function() {
            this.model.clear();
        }
    });
    return ImageView;
});