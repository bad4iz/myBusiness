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

    index: function () {
        $(".block").hide(); // Прячем все блоки
        $("#index").show(); // Показываем нужный


        // выводим img
        var imgsView = new App.Views.ImagesView({collection: imagesCollection });
        $('#images').html(imgsView.render().el);

        // выводим контент
        var text =new App.Models.Text();
        var txtView = new App.Views.TextView({model: text});
        $('.content').html(txtView.render().el);


    },

    contacts: function () {
        $(".block").hide();
        $("#contacts").show();
        var contactCollection = new App.Collections.Contacts(persons);

        var contactsView = new App.Views.ContactsView({
            collection: contactCollection
        });

        $('#list-contacts').html(contactsView.render().el);
    },

    other: function () {
        $(".block").hide();
        $("#other").show();
    }
});
