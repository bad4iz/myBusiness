/////////////////////////////////
//  model person
/////////////////////////////////
App.Models.Person = Backbone.Model.extend({
    defaults: {
        name: '',
        age: '',
        occupation: ''
    }
});


/////////////////////////////////
//  модель картинок
/////////////////////////////////
App.Models.Image = Backbone.Model.extend({
    defaults: {
        src: 'img/backbone.png',
        title: 'backbone',
        alt: 'backbone'
    }
});


//
//// модель меню
//App.Models.Menu = Backbone.Model.extend({
//    //validate
//});
