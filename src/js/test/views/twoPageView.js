define(
    [
        'text',
        'menuCollection',
        'peopleCollection',

        'textView',
        'menuView',
        'peoplesView',

        'backbone'
    ], function (Text,
                 MenuCollection,
                 PeopleCollection,

                 TextView,
                 MenuView,
                 PeoplesView,

                 Backbone) {
        var menu = [
            {
                href: '#',
                myclass: 'index listener',
                title: 'Начало'
            },
            {
                href: '#contacts',
                myclass: 'contacts listener Active',
                title: 'Контакты'
            },
            {
                href: '#other',
                myclass: 'other',
                title: 'Другое'
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

        var menuCollection = new MenuCollection(menu);
        var text = new Text();
        var contactCollection = new PeopleCollection(persons);

        var TwoPage = Backbone.View.extend({
            initialize: function () {
                var index = $('#index');

                // menu
                var menuView = new MenuView({collection: menuCollection});
                // contacts
                var contactsView = new PeoplesView({collection: contactCollection});
                // text
                var txtView = new TextView({model: text});

                $("#other").hide();  //прячим назад
                index.html(contactsView.render().el); //вывод контактов
                index.append(txtView.render().el); // выводим контент
                index.append(menuView.render().el); // вывод меню
            }
        });
        return TwoPage;
    });