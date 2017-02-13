/**
 * Created by bad4iz on 13.02.2017.
 */
define(['backbone', 'image'], function (Backbone, Image) {
    var ImageCollection = Backbone.Collection.extend({
        model: Image
    });
    return ImageCollection;
});
