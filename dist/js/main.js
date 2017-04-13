jQuery(document).ready(function($) {
    $(".scroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#scrollTo").offset().top - $(".navbar-fixed-top").height()
        }, 2000);
    });

    $('.navbar-toggle').click(function(event) {

        if ($(this).hasClass('collapsed')) {
            $(this).addClass('menu-show');


        } else {
            $(this).removeClass('menu-show');


        }
    });
    $('.tabs-item>h3').click(function(event) {

        $(this).next().slideToggle(function(argument) {

            if ($(this).parent().children('h3').children('.fa').hasClass('fa-angle-down')) {
                $(this).parent().children('h3').children('.fa').removeClass('fa-angle-down');
                $(this).parent().children('h3').children('.fa').addClass('fa-angle-up');
            } else if ($(this).parent().children('h3').children('.fa').hasClass('fa-angle-up')) {
                $(this).parent().children('h3').children('.fa').removeClass('fa-angle-up');
                $(this).parent().children('h3').children('.fa').addClass('fa-angle-down');
            }

        });


    });
    var owl = $('#owl1');
    owl.owlCarousel({
        loop: true,
        margin: 33,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1,
                pagination: false,
                margin: 27,
                stagePadding: 54
            },
            540: {
                items: 2,
                pagination: false
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }



        }
    });
    var owl2 = $('#owl2');
    owl2.owlCarousel({
        loop: true,
        margin: 33,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1,
                pagination: false,
                margin: 12,
                stagePadding: 25
            },
            540: {
                items: 2,
                pagination: false
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }



        }
    })
    var owl3 = $('#owl3');
    owl3.owlCarousel({
        loop: true,
        margin: 33,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1,
                pagination: false,
                margin: 12,
                stagePadding: 25
            },
            540: {
                items: 2,
                pagination: false
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }



        }
    })
    var owl4 = $('#owl4');
    owl4.owlCarousel({
        loop: true,
        margin: 33,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1,
                pagination: false,
                margin: 12,
                stagePadding: 25
            },
            540: {
                items: 2,
                pagination: false
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }



        }
    })

    var owlRef = $('#owl-ref');
    owlRef.owlCarousel({
        loop: true,
        margin: 33,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1,
                pagination: false,
                margin: 17,
                stagePadding: 54
            },
            540: {
                items: 2,
                pagination: false
            },
            768: {
                items: 3
            }



        }
    })
});
