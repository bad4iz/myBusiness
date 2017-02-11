(function () {
    window.App = {
        Models: {},
        Views: {},
        Collection: {},
        Router: {}
    };

    // хелпер шаблона
    window.template = function (id) {
        return _.template($('#' + id).html());
    };

    /////////////////////////////////////////////
    // роутер
    ////////////////////////////////////////////
    var Controller = Backbone.Router.extend({
            routes: {
                "": "index", // Пустой hash-тэг
                "#": "index", // Начальная страница
                "contacts": "contacts", // Блок контактов
                "other": "other" // Блок другой
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
