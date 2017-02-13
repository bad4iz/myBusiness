define(['backbone'], function (Backbone) {
    var PersonView = Backbone.View.extend({
        tagName: 'li',

        template: _.template('<strong><%= name %></strong> (<%= age %>) - <%= occupation %>'),


        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return PersonView;
});