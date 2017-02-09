// Модель человека
var Person;
Person = Backbone.Model.extend({
    defaults: {
        names: 'Вася',
        age: '20',
        job: 'супер- пупeр программист'
    },
    validate: function (attrs) {
        if (attrs.age <= 0) {
            return "Возраст должен быть положительный";
        }
        if (!attrs.name) {
            return "имя уже сушествует";
        }
    },
    walk: function () {
        return this.get('names') + ' is walking';
    }
});

// Список людей (колекция)
var PeopleCollection = Backbone.Collection.extend({
    model: Person
});


// вид представления одного человека
PersonView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#person-id').html()),
    initialize: function () {
        // при инициализации
    },
    render: function () {
        // антипатерн
        // this.$el.html(this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('job') );

        this.$el.html(this.template(this.model.toJSON()));

    }
});

// заглушка прихода данных с сервера
var peopls = [
    {
        name: '',
        age: 21,
        job: ''
    },
    {
        name: 'ertewt',
        age: 21,
        job: ''
    }
];

var peoplCollection = new PeopleCollection(peopls);


var person = Person();

person.on('error', function (model, error) {
    console.error(error);
});

var personView = new PersonView({model: person});