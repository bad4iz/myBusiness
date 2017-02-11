///////////////////////////////
//  колекция контактов
///////////////////////////////
var Contacts = Backbone.Collection.extend({
    model: Person
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

var contactCollection = new Contacts(persons);
