$(document).ready(function ()
{
    $('.header').height($(window).height());

    $(window).resize(function(){

        $('.header').height($(window).height());

        $('.intro').css('paddingTop',($(window).height() - $('.intro').height())/2)


    });

    $('.intro').css('paddingTop',($(window).height() - $('.intro').height())/2)


    //button Show More

    $('.our-works .show-more').click(function()
    {
        $('.our-works .hidden').fadeIn(1000);
        $(this).addClass('disabled')
    });


    // Testim
    var arrowRight = $('.fa-chevron-right'),
        arrowleft = $('.fa-chevron-left');

        function checkArrow()
        {
            $('.testim:first').hasClass('active') ? arrowleft.fadeOut():arrowleft.fadeIn();
            $('.testim:last').hasClass('active') ? arrowRight.fadeOut():arrowRight.fadeIn();    
        }

        checkArrow();


        arrowRight.click(function()
        {
            $('.testimonials .active').fadeOut(1000,function()
            {
                $(this).removeClass('active').next().addClass('active').fadeIn();
                checkArrow();
            });
        });

        arrowleft.click(function()
        {
            $('.testimonials .active').fadeOut(1000,function()
            {
                $(this).removeClass('active').prev().addClass('active').fadeIn();
                checkArrow();
            });
        });

        // Smooth Scroll
        $('.fa-chevron-down').click(function()
        {
            $('html,body').animate(
            {
                scrollTop: $('.features').offset().top
            },1000)
        })

        $('.header .buttons button:first').click(function()
        {
            $('html,body').animate(
            {
                scrollTop: $('.our-team').offset().top
            },2000)
        })

        
        $('.header .buttons button:last').click(function()
        {
            $('html,body').animate(
            {
                scrollTop: $('.our-works').offset().top
            },2000)
        })

        // NiceScroll
        $('html').niceScroll({
            cursorcolor: '#dd4b39',
            cursorborder: "1px solid #dd4b39",
            cursorwidth:'7px',
            cursorminheight:200
        });
});

