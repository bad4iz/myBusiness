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
        // вывод меню
        var menuView = new App.Views.MenuView({collection: menuCollection});
        $('#index').html(menuView.render().el);

        // выводим img
        var imgsView = new App.Views.ImagesView({collection: imagesCollection});
        $('#index').append(imgsView.render().el);

        // выводим контент
        var text = new App.Models.Text();
        var txtView = new App.Views.TextView({model: text});
        $('#index').append(txtView.render().el);

        //каруселька
        $(".regular").slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
        $(".center").slick({
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
        $(".variable").slick({
            dots: true,
            infinite: true,
            variableWidth: true
        });


    },

    // вторая страница
    contacts: function () {
        //вывод контактов
        var contactCollection = new App.Collections.Contacts(persons);
        var contactsView = new App.Views.ContactsView({collection: contactCollection});
        $('#index').html(contactsView.render().el);


        // выводим контент
        var text = new App.Models.Text();
        var txtView = new App.Views.TextView({model: text});
        $('#index').append(txtView.render().el);


        // вывод меню
        var menuView = new App.Views.MenuView({collection: menuCollection});
        $('#index').append(menuView.render().el);

    },

    // третья страница
    other: function () {
        $("#other").show();

        // выводим контент
        var text = new App.Models.Text();
        var txtView = new App.Views.TextView({model: text});
        $('#index').html(txtView.render().el);

    }
});
