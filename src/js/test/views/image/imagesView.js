/**
 * Created by bad4iz on 13.02.2017.
 */
define([ 'imageView', 'backbone' ], function (ImageView, Backbone) {
    var ImagesView = Backbone.View.extend({
        initialize: function () {
            this.collection.on('add', this.addOne, this);
        },

        tagName: 'section',

        className: 'center slider',

        render: function () {

            this.collection.each(this.addOne, this);
            return this;
        },

        addOne: function (mod) {
            //создавать новый дочерний вид
            var imageView = new ImageView({
                model: mod
            });
            // добавлять его в корневой элемент
            this.$el.append(imageView.render().el);
        }
    });
    return ImagesView;
});