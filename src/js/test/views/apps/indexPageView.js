define(
    [
        'slick',
        'text',
        'menuCollection',
        'imageCollection',


        'textView',
        'menuView',
        'imagesView',

        'backbone'
    ], function (slick,
                 Text,
                 MenuCollection,
                 ImageCollection,

                 TextView,
                 MenuView,
                 ImagesView,

                 Backbone) {
        var images = [
            {
                src: 'img/backbone.png',
                title: '#'
            },
            {
                src: 'img/backbone1.png',
                title: '#'
            },
            {
                src: 'img/backbone2.jpg',
                title: '#'
            },
            {
                src: 'img/backbone3.jpg',
                title: '#'
            },
            {
                src: 'img/backbone4.png',
                title: '#'
            },
            {
                src: 'img/le.jpg',
                title: '#'
            }
        ];
        var menu = [
            {
                href: '#',
                myclass: 'index listener Active',
                title: 'Начало'
            },
            {
                href: '#contacts',
                myclass: 'contacts listener',
                title: 'Контакты'
            },
            {
                href: '#other',
                myclass: 'other',
                title: 'Другое'
            }
        ];

        var imagesCollection = new ImageCollection(images);
        var menuCollection = new MenuCollection(menu);
        var text = new Text();





        var IndexView = Backbone.View.extend({
            initialize: function () {


                var index = $('#index');

                // menu
                var menuView = new MenuView({collection: menuCollection});
                // img
                var imgsView = new ImagesView({collection: imagesCollection});
                // text
                var txtView = new TextView({model: text});

                $("#other").hide();  //прячим назад
                index.html(menuView.render().el);  // вывод меню
                index.append(imgsView.render().el);  // выводим img
                index.append(txtView.render().el); // выводим контент

                //каруселька
                $(".center").slick({
                    dots: true,
                    infinite: true,
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000
                });
            }


        });


        return IndexView;
    });