App.Router = Backbone.Router.extend({
    routes: {
        '' : 'index',
        '#' : 'index',
        'contacts' : 'contacts',
        'other' : 'other',
        '*ddd' : 'index'
    },

    index: function() {
        console.log('Index!!!');
        // var index = new App.Views.Index();
        // $('body').html(index.render().el);

        var imagesView = new App.Views.Images({collection: imagesCollection});

        $('#one').html(imagesView.render().el);

        if (Views.index != null) {
            Views.index.render();
        }

    },
    contacts: function() {
        console.log('contacts');
        if (Views.contacts != null) {
            Views.contacts.render();
        }
    },
    other: function() {
        console.log('other');
        if (Views.other != null) {
            Views.other.render();
        }
    }

});

