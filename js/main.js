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
            breakpoint: 767,
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


// Map

ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [53.9588,27.7370],
        zoom: 14,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark([53.9588,27.7370], {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/template/img/placemark.png',
        iconImageSize: [36, 52],
        iconImageOffset: [-18, -52]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.geoObjects.add(myPlacemark);
}


$(".btn-modal").fancybox({
    'padding' : 0
});



$('.btn.by').click(function(){
    $('.product-hide.by').slideToggle('fast');
});

$('.btn.rus').click(function(){
    $('.product-hide.rus').slideToggle('fast');
});


$(document).ready(function() {

    $('.btn-send').click(function() {

        $('body').find('form:not(this)').children('div').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).closest('form').get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).closest('form'),
                name    =    $('input[name="name"]', $form).val(),
                phone   =    $('input[name="phone"]', $form).val(),
                message =    $('textarea[name="message"]', $form).val();
            console.log(name, phone, message);
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone, message: message}
            }).done(function(msg) {
                console.log(name, phone, message);
                $('form').find('input[type=text], textarea').val('');
                console.log('удачно');
                $.fancybox(
                    '<div class="done">'+ '<span class="done-title">Спасибо, Ваша заявка принята!</span><br/>В скором времени с вами свяжутся наши менеджеры' +'</div>',
                    {
                        'autoDimensions'  : false,
                        'padding': 0,
                        'minWidth': 600,
                        'transitionIn'    : 'none',
                        'transitionOut'   : 'none'
                    }
                );
                setTimeout("$.fancybox.close()", 3000);
            });
        }

        var h = $(window).height();
    });

});