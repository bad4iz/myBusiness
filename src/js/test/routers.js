/////////////////////////////////////////////
// роутер
////////////////////////////////////////////
App.Routers = Backbone.Router.extend({
    routes: {
        "": "index", // Пустой hash-тэг
        "#": "index", // Начальная страница
        "contacts": "contacts", // Блок контактов
        "other": "other" // Блок другой
    },

    // первая страница
    index: function () {
        var index = $('#index');

        //прячим назад
        $("#other").hide();

        // вывод меню
        var menuView = new App.Views.MenuView({collection: menuCollection});
        index.html(menuView.render().el);

        // выводим img
        var imgsView = new App.Views.ImagesView({collection: imagesCollection});
        index.append(imgsView.render().el);

        // выводим контент
        var text = new App.Models.Text();
        var txtView = new App.Views.TextView({model: text});
        index.append(txtView.render().el);
        index.append(txtView.render().el);
        index.append(txtView.render().el);

        //каруселька
        $(".center").slick({
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 2
        });
    },

    // вторая страница
    contacts: function () {
        var index = $('#index');

        //прячим назад
        $("#other").hide();

        //вывод контактов
        var contactCollection = new App.Collections.Contacts(persons);
        var contactsView = new App.Views.ContactsView({collection: contactCollection});
        index.html(contactsView.render().el);

        // выводим контент
        var text = new App.Models.Text();
        var txtView = new App.Views.TextView({model: text});
        index.append(txtView.render().el);
        index.append(txtView.render().el);
        index.append(txtView.render().el);


        // вывод меню
        var menuView = new App.Views.MenuView({collection: menuCollection});
        index.append(menuView.render().el);
    },

    // третья страница
    other: function () {
        var index = $('#index');

        $("#other").show();

        // выводим контент
        var text = new App.Models.Text();
        var txtView = new App.Views.TextView({model: text});
        index.html(txtView.render().el);
        index.html(txtView.render().el);
    }
});
