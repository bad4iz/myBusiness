/**
 * Created by bad4iz on 13.02.2017.
 */
/////////////////////////////////
//  модель пункта menu
/////////////////////////////////
define(['backbone'], function (Backbone) {
    var MenuItem = Backbone.Model.extend({
        defaults: {
            myclass: 'class',
            title: 'title',
            href: ''
        },
        validate: function (attrs) {
            if (!$.trim(attrs.myclass)) {
                return 'Имя класса должно быть валидным!';
            }
        }
    });
    return MenuItem;
});