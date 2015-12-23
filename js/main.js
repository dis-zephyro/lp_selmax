$(function() {
    var pull = $('.nav-toggle');
    var menu = $(pull.attr("data-target"));

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle(100);
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 768 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});



$('.thumb img').click(function (event) {
    event.preventDefault();
    var arr = '.' + $(this).attr("data-target");
    var box = $(this).closest('.product-gallery');

    console.log(arr);
    console.log(box);

    box.find('.image-large-item').hide();
    box.find(arr).show();
    box.find('.thumb img').removeClass('active');
    $(this).addClass('active');
});


$('.cert ul').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});

$('.cert-nav.prev').click(function(){
    $('.cert ul').slick('slickPrev');
});
$('.cert-nav.next').click(function(){
    $('.cert ul').slick('slickNext');
});