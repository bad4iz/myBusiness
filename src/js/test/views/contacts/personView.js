define(['backbone'], function (Backbone) {
    var PersonView = Backbone.View.extend({

        tagName: 'li',

        template: _.template('<strong><%= name %></strong> (<%= age %>) - <%= occupation %>'),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return PersonView;
});