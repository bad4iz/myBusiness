///////////////////////////////
//  колекция контактов
///////////////////////////////
App.Collections.Contacts = Backbone.Collection.extend({
    model: App.Models.Person
});

///////////////////////////////
//  заглушка контактов
///////////////////////////////
var persons = [
    {
        name: 'Dima',
        age: 23,
        occupation: 'web developer'
    },
    {
        name: 'Вася',
        age: 18,
        occupation: 'Супер-Синьер'
    },
    {
        name: 'Лена',
        age: 20,
        occupation: 'бухгалтер'
    }
];

var contactCollection = new App.Collections.Contacts(persons);


///////////////////////////////
//  колекция картинок
///////////////////////////////
App.Collections.Images = Backbone.Collection.extend({
    model: App.Models.Image
});

///////////////////////////////
//  заглушка картинок
///////////////////////////////
var images = [
    {
        src: '#',
        title: '#'
    },
    {
        src: '#',
        title: '#'
    },
    {
        src: '#',
        title: '#'
    },
    {
        src: '#',
        title: '#'
    },
    {
        src: '#',
        title: '#'
    }
];

var imagesCollection = new App.Collections.Images(images);
