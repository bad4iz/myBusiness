define(
    [
        'slick',
        'menuView',
        'imagesView',
        'text',
        'textView',
        'peoplesView',


        'indexPageView',
        'twoPageView',

        'peopleCollection',
        'imageCollection',
        'menuCollection',
        'backbone'
    ], function (slick,
                 MenuView,
                 ImagesView,
                 Text,
                 TextView,
                 PeoplesView,

                 IndexPageView,
                 TwoPageView,

                 PeopleCollection,
                 ImageCollection,
                 MenuCollection,
                 Backbone) {

        var text = new Text();



        // text
        var txtView = new TextView({model: text});
        // contacts


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