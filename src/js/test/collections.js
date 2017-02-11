///////////////////////////////
//  колекция контактов
///////////////////////////////
App.Collections.Contacts = Backbone.Collection.extend({
    model: App.Models.Person
});



///////////////////////////////////////
//  заглушка
//////////////////////////////////////
var persons = [
    {
        title: 'киношка'
        },
    {
        title: 'игрулька'
        },
    {
        title: 'закежка'
        }
        ];

//var contactCollection = new App.Collections.Contacts(persons);

var contactCollection = new App.Collections.Contacts(persons);
