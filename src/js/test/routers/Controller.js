define(
    [
        'text',
        'textView',

        'indexPageView',
        'twoPageView',

        'backbone'
    ], function (
                 Text,
                 TextView,

                 IndexPageView,
                 TwoPageView,

                 Backbone) {

        var text = new Text();
        // text
        var txtView = new TextView({model: text});

        var Controller = Backbone.Router.extend({
            routes: {
                "": "index", // Пустой hash-тэг
                "contacts": "contacts", // Блок контактов
                "other": "other", // Блок другой
                "*oth": "index" // Блок другой
            },

            // первая страница
            index: function () {
                new IndexPageView;
            },

            // вторая страница
            contacts: function () {
               new TwoPageView;
            },

            // третья страница
            other: function () {
                var index = $('#index');

                $("#other").show(); //показ назад
                index.html(txtView.render().el); // выводим контент
            }
        });


        return Controller;
    });