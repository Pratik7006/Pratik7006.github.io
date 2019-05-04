/*********************************************************************************
    Template Name: Porta - Free Bootstrap4 Minimal Portfolio Template
    Template URI: https://demo.curlyarts.com/porta/
    Description: Porta is a Bootstrap4 minimal portfolio template by CurlyArts, absolutely free for download !
    Author: CurlyArts
    Author URI: https://curlyarts.com/
    Version: 1.0

    Note: This is scripts js, all custom scripts included here

**********************************************************************************/
/*===============================================================================*/

(function ($) {
    'use strict';

    /* Button Effect */
    function buttonEffect() {
        $('<b></b>').appendTo('.cr-btn');
        $('.cr-btn')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('b').css({
                    top: relY,
                    left: relX
                });
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('b').css({
                    top: relY,
                    left: relX
                });
            });
        $('[href="#"]').click(function () {
            return false;
        });
    }
    buttonEffect();
    

    /* Sticky Header */
    $(window).on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        if (scrollPos > 300) {
            $('.sticky-header').addClass('is-sticky');
        } else {
            $('.sticky-header').removeClass('is-sticky');
        }
    });
    

    // Contact Form Message Popup
    function contactFormPopup() {
        var trigger = $('#contact-form [type="submit"]'),
            container = $('.cr-contact-message-modal');

        trigger.on('click', function () {
            container.addClass('is-visible');
        });

        $('<button><i class="icofont icofont-close"></i></button>').appendTo(container).on('click', function () {
            container.removeClass('is-visible');
        });
    }
    contactFormPopup();

    $(function(){
    $("ul#ticker01").liScroll();
});


})(jQuery);

jQuery.fn.liScroll = function(settings) {
    settings = jQuery.extend({
        travelocity: 0.04    
        }, settings);        
        return this.each(function(){
                var $strip = jQuery(this);
                $strip.addClass("newsticker")
                var stripHeight = 1;
                $strip.find("li").each(function(i){
                    stripHeight += jQuery(this, i).outerHeight(true); // thanks to Michael Haszprunar and Fabien Volpi
                });
                var $mask = $strip.wrap("<div class='mask'></div>");
                var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");                                
                var containerHeight = $strip.parent().parent().height();    //a.k.a. 'mask' width     
                $strip.height(stripHeight);            
                var totalTravel = stripHeight;
                var defTiming = totalTravel/settings.travelocity;    // thanks to Scott Waye        
                function scrollnews(spazio, tempo){
                $strip.animate({top: '-='+ spazio}, tempo, "linear", function(){$strip.css("top", containerHeight); scrollnews(totalTravel, defTiming);});
                }
                scrollnews(totalTravel, defTiming);                
                $strip.hover(function(){
                jQuery(this).stop();
                },
                function(){
                var offset = jQuery(this).offset();
                var residualSpace = offset.top + stripHeight;
                var residualTime = residualSpace/settings.travelocity;
                scrollnews(residualSpace, residualTime);
                });            
        });    
};

$(function(){
    $("ul#ticker01").liScroll();
});