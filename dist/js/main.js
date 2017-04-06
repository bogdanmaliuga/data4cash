jQuery(document).ready(function($) {
	$(".scroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#scrollTo").offset().top - $(".navbar-fixed-top").height()
        }, 2000);
    });

    var owl = $('#owl1');
    owl.owlCarousel({
        loop: true,
        margin: 33,
        responsive: {
            0: {
                items: 1,
                pagination: true,
                margin: 12,
                stagePadding: 25
            },
            540: {
                items: 2,
                pagination: true
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
        responsive: {
            0: {
                items: 1,
                pagination: true,
                margin: 12,
                stagePadding: 25
            },
            540: {
                items: 2,
                pagination: true
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }



        }
    })
});