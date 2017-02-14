define(['backbone'], function (Backbone) {
    var TextView = Backbone.View.extend({
        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.model.get('text'));
            return this;
        }
    });
    return TextView;
});