$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times')
        $('.narbar').toggleClass('nav-toggle')
    });

    $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times')
        $('.narbar').removeClass('nav-toggle')

        if($(window).scrollTop() > 30){
            $('.header').addClass('header-active')
        }else{
            $('.header').removeClass('header-active')
        }
    })
});