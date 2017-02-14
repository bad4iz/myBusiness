define(['vent',
    'text',
    'textView',

    'indexPageView',
    'twoPageView',

    'backbone'
], function (vent,
             Text,
             TextView,
             IndexPageView,
             TwoPageView,
             Backbone) {


    var text = new Text();
    // text
    var txtView = new TextView({model: text});

    // инициализация прослушки на события
    new IndexPageView;
    new TwoPageView;

    var MyController = Backbone.Controller.extend({

        routes: {
            "": "index", // Пустой hash-тэг
            "contacts": "contacts", // Блок контактов
            "other": "other", // Блок другой
            "*oth": "index" // Блок другой
        },

        // первая страница
        index: function () {
            $("#other").hide();  //прячим назад
            console.log(3423423);
            vent.trigger('index:show');
        },

        // вторая страница
        contacts: function () {
            $("#other").hide();  //прячим назад
            vent.trigger('contacts:show');
        },

        // третья страница
        other: function () {
            var index = $('#index');

            $("#other").show(); //показ назад
            index.html(txtView.render().el); // выводим контент
        }
    });
    return MyController;
});
//
// // Управление памятью Zombies
// var baseView = Backbone.View.extend({
//     nested: [], initialize: function () {
//         Backbone.View.prototype.initialize.call(this);
//     }, register: function (sub) {
//         if (sub instanceof Backbone.View) {
//             this.nested.push(sub);
//         }
//     }, remove: function () {
//         var viewsCount = this.nested.length;
//         if (viewsCount) {
//             for (var i = 0; i < viewsCount; i++) {
//                 this.nested[i].remove();
//             }
//         }
//         this.$el.empty();
//         Backbone.View.prototype.remove.call(this);
//     }
// });