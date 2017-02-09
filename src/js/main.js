// Модель человека
var Person;
Person = Backbone.Model.extend({
    defaults: {
        names: 'Вася',
        age: '20',
        job: 'супер- пупeр программист'
    }
});

var person = new Person();

// Список людей (колекция)
var PeopleCollection = Backbone.Collection.extend({
    model: Person
});

// вид представление списка людей
var PeopleView = Backbone.View.extend({
    tagName:'ul',
    initialize: function () {
        // console.info(this.collection);
    },
    render: function () {
        // 1 пройтись пр всему списку и срендерить каждый PresonView
        this.collection.each(function (person) {
            var personView = new PersonView({model: person});
            this.$el.append(personView.el);
            console.log(this.collection);
        }, this);

        // 2 вставить в главный тег ul (this.$el)

    }

});

// вид представления одного человека
var PersonView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#person-id').html()),
    initialize: function () {
        // при инициализации
        this.render();
    },
    render: function () {
        // антипатерн
        // this.$el.html(this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('job') );

        this.$el.html(this.template(this.model.toJSON()));

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
var peopleCollection = new PeopleCollection(people);
var peopleView = new PeopleView({collection: peopleCollection});