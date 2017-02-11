/////////////////////////////////
//  model person
/////////////////////////////////
var Person = Backbone.Model.extend({
    defaults: {
        name: 'Dima',
        age: 23,
        occupation: 'web developer'
    }
});



App.Models.Contact = Backbone.Model.extend({
    //validate
});

// модель ссылок картинок
App.Models.Image = Backbone.Model.extend({
    //validate
});

// модель меню
App.Models.Menu = Backbone.Model.extend({
    //validate
});
