//Resize title image
$(document).ready(function(){
	var $win = $(window);
    var scroll = $win.scrollTop();
    var winWidth = $win.width();
	
	$('.sz-mobile').hide();
	
	$('.gk-badge img').fadeIn(800);
	$('.content-hero').fadeIn(800);
	
	$(window).on('scroll resize', function() {   

		if ($(document).scrollTop() > 900) {
			$('#gk-header').hide();	
			$('.gk-badge').hide();
			$('.content-hero').hide();
		} else {
			$('#gk-header').show();	
			$('.gk-badge').show();
			$('.content-hero').show();
		}
		
		if ($(document).scrollTop() > 4300) {
			$('.end').fadeIn('slow');
		} else {
			$('.end').fadeOut('fast');
		}
		
        if (winWidth <= 1279)
            return;

		if ($(document).scrollTop() > 1) {
	    $('.nav-bg').css('bottom', '-220px');
	    $('footer a').css('font-size', '2rem');
	    $('nav ul').css('line-height', '80px');
    } else {
		$('.nav-bg').css('bottom', '-200px');
		$('footer a').css('font-size', '2.5rem');
		$('nav ul').css('line-height', '60px');
    }
		
		
    });
	
//fade

$(function() {
	if (winWidth >= 768) {
var target = $('.gk-badge img');
var targetHeight = target.outerHeight();

$(document).scroll(function(e){
    var scrollPercent = (targetHeight - window.scrollY + 150) / targetHeight;
    if(scrollPercent >= 0){
        target.css('opacity', scrollPercent);
    }
	});
	} else {
		return;
	}
});
	
//$(function() {
//var target = $('.content-hero');
//var targetHeight = target.outerHeight();
//
//$(document).scroll(function(e){
//    var scrollPercent = ((targetHeight + 150) - window.scrollY) / targetHeight;
//    if(scrollPercent >= 0){
//        target.css('opacity', scrollPercent);
//    }
//	});	
//});
	
$(function() {
var target = $('.hero');
var targetHeight = target.outerHeight();

$(document).scroll(function(e){
    var scrollPercent = ((targetHeight + 50) - window.scrollY) / targetHeight;
    if(scrollPercent >= 0){
        target.css('opacity', scrollPercent);
    }
	});	
});	
}); 

//Smooth scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
