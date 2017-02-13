/**
 * Created by bad4iz on 13.02.2017.
 */
/////////////////////////////////
//  модель пункта menu
/////////////////////////////////
App.Models.MenuItem = Backbone.Model.extend({
    defaults: {
        myclass: 'class',
        title: 'title',
        href: ''
    },
    validate: function( attrs ) {
        if ( ! $.trim(attrs.myclass) ) {
            return 'Имя класса должно быть валидным!';
        }
    }
});

