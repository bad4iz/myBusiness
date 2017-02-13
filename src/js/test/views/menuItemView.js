define(['backbone'], function (Backbone) {
    var MenuItemView = Backbone.View.extend({
        initialize: function () {
            this.render();
        },
        tagName: 'li',

        id: 'menu',

        template: _.template('<a class="<%= myclass %>" href="<%= href %>"> <%= title %></a>'),

        events: {
            "click .listener": "clicks" // Обработчик клика
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        clicks: function () {
            // очищаем Active в коллекции
            menuCollection.each(
                function(mod){
                    mod.set('myclass', mod.get('myclass').replace(" Active", '') )
                });

            // добавляем Active этой модели
            this.model.set('myclass', this.model.get('myclass') + ' Active', {validate:true} );
        }

    });

    return MenuItemView;
});