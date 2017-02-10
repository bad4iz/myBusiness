$(function() {
    var Controller = Backbone.Router.extend({
        routes: {
            "": "one", // Пустой hash-тэг
            "!/": "one", // Начальная страница
            "!/two": "two", // Блок удачи
            "!/three": "three" // Блок ошибки
        },

        one: function () {
            $(".block").hide(); // Прячем все блоки
            $("#one").show(); // Показываем нужный
        },

        two: function () {
            $(".block").hide();
            $("#two").show();
        },

        three: function () {
            $(".block").hide();
            $("#three").show();
        }
    });

    var controller = new Controller(); // Создаём контроллер

    Backbone.history.start();  // Запускаем HTML5 History push


    var Start = Backbone.View.extend({
        el: $("#one"), // DOM элемент widget'а
        events: {
            "click": "check" // Обработчик клика на кнопке "Проверить"
        },
        check: function () {
            if (this.el.find("input:text").val() == "test") // Проверка текста
                controller.navigate("success", true); // переход на страницу success
            else
                controller.navigate("error", true); // переход на страницу error
        }
    });

    var start = new Start();



});