/**
 * Created by bad4iz on 13.02.2017.
 */
define(['backbone', 'menuItem'], function (Backbone, MenuItem) {
    var Menu = Backbone.Collection.extend({
        model: MenuItem
    });
    return Menu;
});
