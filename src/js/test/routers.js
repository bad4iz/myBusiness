/////////////////////////////////////////////
// роутер
////////////////////////////////////////////
App.Routers = Backbone.Router.extend({
    routes: {
        "": "index", // Пустой hash-тэг
        "#": "index", // Начальная страница
        "#": "index", // Начальная страница
        "contacts": "contacts", // Блок контактов
        "other": "other" // Блок другой
    },

    // первая страница
    index: function () {
        var index = $('#index');

        // menu
        var menuView = new App.Views.MenuView({collection: menuCollection});
        // img
        var imgsView = new App.Views.ImagesView({collection: imagesCollection});
        // text
        var text = new App.Models.Text();
        var txtView = new App.Views.TextView({model: text});

        $("#other").hide();  //прячим назад
        index.html(menuView.render().el);  // вывод меню
        index.append(imgsView.render().el);  // выводим img
        index.append(txtView.render().el); // выводим контент

        //каруселька
        $(".center").slick({
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000
        });
    },

    // вторая страница
    contacts: function () {
        var index = $('#index');
        // contacts
        var contactCollection = new App.Collections.Contacts(persons);
        var contactsView = new App.Views.ContactsView({collection: contactCollection});
        // text
        var text = new App.Models.Text();
        var txtView = new App.Views.TextView({model: text});
        // menu
        var menuView = new App.Views.MenuView({collection: menuCollection});

        $("#other").hide();  //прячим назад
        index.html(contactsView.render().el); //вывод контактов
        index.append(txtView.render().el); // выводим контент
        index.append(menuView.render().el); // вывод меню
    },

    // третья страница
    other: function () {
        var index = $('#index');
        // текст
        var text = new App.Models.Text();
        var txtView = new App.Views.TextView({model: text});

        $("#other").show(); //показ назад
        index.html(txtView.render().el); // выводим контент
    }
});
