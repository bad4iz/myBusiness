define(
    [
        'slick',
        'menuView',
        'imagesView',
        'text',
        'textView',
        'peoplesView',


        'indexView',

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

                 IndexView,

                 PeopleCollection,
                 ImageCollection,
                 MenuCollection,
                 Backbone) {
        var images = [
            {
                src: 'img/backbone.png',
                title: '#'
            },
            {
                src: 'img/backbone1.png',
                title: '#'
            },
            {
                src: 'img/backbone2.jpg',
                title: '#'
            },
            {
                src: 'img/backbone3.jpg',
                title: '#'
            },
            {
                src: 'img/backbone4.png',
                title: '#'
            },
            {
                src: 'img/le.jpg',
                title: '#'
            }
        ];
        var persons = [
            {
                name: 'Dima',
                age: 23,
                occupation: 'web developer'
            },
            {
                name: 'Вася',
                age: 18,
                occupation: 'Супер-Синьер'
            },
            {
                name: 'Лена',
                age: 20,
                occupation: 'бухгалтер'
            }
        ];
        var menu = [
            {
                href: '#',
                myclass: 'index listener Active',
                title: 'Начало'
            },
            {
                href: '#contacts',
                myclass: 'contacts listener',
                title: 'Контакты'
            },
            {
                href: '#other',
                myclass: 'other',
                title: 'Другое'
            }
        ];

        var imagesCollection = new ImageCollection(images);
        var menuCollection = new MenuCollection(menu);
        var contactCollection = new PeopleCollection(persons);
        var text = new Text();


        // menu
        var menuView = new MenuView({collection: menuCollection});
        // img
        var imgsView = new ImagesView({collection: imagesCollection});
        // text
        var txtView = new TextView({model: text});
        // contacts
        var contactsView = new PeoplesView({collection: contactCollection});


        var Controller = Backbone.Router.extend({
            routes: {
                "": "index", // Пустой hash-тэг
                "contacts": "contacts", // Блок контактов
                "other": "other", // Блок другой
                "*oth": "index" // Блок другой
            },

            // первая страница
            index: function () {
                new IndexView;
            },

            // вторая страница
            contacts: function () {
                var index = $('#index');

                $("#other").hide();  //прячим назад
                index.html(contactsView.render().el); //вывод контактов
                index.append(txtView.render().el); // выводим контент
                index.append(menuView.render().el); // вывод меню
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