App.Collections.Contacts = Backbone.Collection.extend({
    model: App.Models.Contact,
    // url: '/contacts'
});

App.Collections.Images = Backbone.Collection.extend({
    model:App.Models.Image
});

// заглушка
images = [
    {
        link: 'one'
    },
    {
        link: 'two'
    },
    {
        link: 'three'
    },
    {
        link: 'four'
    }
];

var imagesCollection = new App.Collections.Images(images);

// менюшки
App.Collections.Menu = Backbone.Collection.extend({
    model:App.Models.Menu
});
var menus =   [
    { title: 'index'},
    { title: 'contacts'},
    { title: 'three'}
];
var memuCollections = App.Collections.Menu(menus);
