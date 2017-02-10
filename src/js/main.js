(function () {
    window.App = {
        Models: {},
        Views: {},
        Collection: {}
    };

    // хелпер шаблона
    window.template = function (id) {
        return _.template($('#' + id).html());
    };

    // Модель человека
    App.Models.Person = Backbone.Model.extend({
        defaults: {
            names: 'Вася',
            age: '20',
            job: 'супер- пупeр программист'
        }
    });

    var person = new App.Models.Person();

// Список людей (колекция)
    App.Collection.People = Backbone.Collection.extend({
        model: App.Models.Person
    });

// вид представление списка людей
    App.Views.People = Backbone.View.extend({
        tagName: 'ul',
        initialize: function () {
            // console.info(this.collection);
        },
        render: function () {
            // 1 пройтись пр всему списку и срендерить каждый PresonView
            this.collection.each(function (person) {
                var personView = new App.Views.Person({model: person});
                this.$el.append(personView.render().el);
                // console.log(this.collection);
            }, this);

            return this;
            // 2 вставить в главный тег ul (this.$el)

        }

    });

    // вид представления одного человека
    App.Views.Person = Backbone.View.extend({
        tagName: 'li',

        template: template('person-id'),

        initialize: function () {
            // при инициализации
            this.render();
        },

        render: function () {
            // антипатерн
            // this.$el.html(this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('job') );

            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

// заглушка прихода данных с сервера
    var people = [
        {
            name: 'Петя',
            age: 21,
            job: 'Сварщик'
        },
        {
            name: 'Анна',
            age: 18,
            job: 'бухгалтер'
        },
        {
            name: 'Вася',
            age: 16,
            job: 'Супур-пупер программист'
        }
    ];
    var peopleCollection = new  App.Collection.People(people);
    var peopleView = new App.Views.People({collection: peopleCollection});

    $('body').append(peopleView.render().el);


}());