$(document).ready( function() {
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(window).scroll(function(){
    if($(window).scrollTop() > 0){
    	 $(".navbar-default").css({"opacity":0.8});   
    }
    else{
         $(".navbar-default").css({"opacity":1});   
        }
    });

  /*  var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize) {
            //if the window is greater than 440px wide then turn on jScrollPane..
          $('.textboxgreen').css('height',$('.imagegreen').innerHeight());
          $('.textboxpink').css('height',$('.imagepink').innerHeight());
          $('.textboxblue').css('height',$('.imageblue').innerHeight());
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
*/
$(function(){
  var $ppc = $('.progress-pie-chart'),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/100;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents span').html(percent+'%');
});
   

});

function popitup(url) {
  window.open(url);
}

