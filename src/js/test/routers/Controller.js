define(
    [
        'vent',
        'text',
        'textView',

        'indexPageView',
        'twoPageView',

        'backbone'
    ], function (
                 vent,
                 Text,
                 TextView,

                 IndexPageView,
                 TwoPageView,

                 Backbone) {



        var text = new Text();
        // text
        var txtView = new TextView({model: text});

        // инициализация прослушки на события
        new IndexPageView;
        new TwoPageView;

        var Controller = Backbone.Router.extend({

            routes: {
                "": "index", // Пустой hash-тэг
                "contacts": "contacts", // Блок контактов
                "other": "other", // Блок другой
                "*oth": "index" // Блок другой
            },

            // первая страница
            index: function () {
                $("#other").hide();  //прячим назад
                vent.trigger('index:show');
            },


            // вторая страница
            contacts: function () {
                $("#other").hide();  //прячим назад
                vent.trigger('contacts:show');
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