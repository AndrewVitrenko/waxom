$(window).ready(function() {
    $('.slider').slick({
        dots: true,
        slidesToShow: 1,
        infinite: false,
    })

        $('.banner').css('height', $('.banner__background').outerHeight())
    $('.presentation').css('height', $('.presentation__background').outerHeight())
    $('.partners').css('height', $('.partners__background').outerHeight())

    $('.burger').removeClass('active')

    $('.burger').click(function() {
        $(this).toggleClass('active')
        $('.nav').toggleClass('visible')
        $('.nav').css('padding-top', $('header').outerHeight())
    })
})

$(window).resize(function() {
    $('.banner').css('height', $('.banner__background').outerHeight())
    $('.presentation').css('height', $('.presentation__background').outerHeight())
    $('.partners').css('height', $('.partners__background').outerHeight())
})