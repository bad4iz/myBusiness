(function () {
    window.App = {
        Models: {},
        Views: {},
        Collection: {},
        Routs: {}
    };

    // хелпер шаблона
    window.template = function (id) {
        return _.template($('#' + id).html());
    };

    /////////////////////////////////////////////
    // роутер
    ////////////////////////////////////////////
    App.Routers.Main =
        var Controller = Backbone.Router.extend({
            routes: {
                "": "index", // Пустой hash-тэг
                "#": "index", // Начальная страница
                "contacts": "contacts", // Блок удачи
                "other": "other" // Блок ошибки
            },

            index: function () {
                $(".block").hide(); // Прячем все блоки
                $("#index").show(); // Показываем нужный
            },

            contacts: function () {
                $(".block").hide();
                $("#contacts").show();
            },

            other: function () {
                $(".block").hide();
                $("#other").show();
            }
        });

    var controller = new Controller(); // Создаём контроллер

    Backbone.history.start(); // Запускаем HTML5 History push


}());
