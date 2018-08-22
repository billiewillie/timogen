$(document).ready(function() {
	$('.menu').click(function(e){
		$(this).toggleClass('open');
		$('.header__menu').toggleClass('open');
		$('.wrapper').toggleClass('active');
		$('.page__main .main').toggleClass('hidden');
		$('.menu__item').toggleClass('active');
	});

	$('.search__mob').click(function(e){
    $(".header__search--mob").toggleClass('active');
    $(".form__mob--text").focus();
     e.stopPropagation();
	});
	$('.form__mob--close').click(function(e){
    $(".header__search--mob").removeClass('active');
	});

	$(".header__search--mob").click(function(e){
	    e.stopPropagation();
	});

	$(document).click(function(){
	    $(".header__search--mob").removeClass('active');
	});


	// year
	var currentTime = new Date();
	var year = currentTime.getFullYear();
	$('.year').html(year);
	// year


	$('.main__content .tab__item').hide();
	$('.main__content .tab__item:nth-child(1)').show();
	$('.tab').click(function(e){
	  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.siblings('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).find('.tab__item').hide();
    $(target).show();
	})
	
	if(window.innerWidth>991 && $('.page__promo').length){
	  $(".animsition__left").animsition({
	    inClass: 'fade-in-left-sm',
	    outClass: 'fade-out-left-sm',
	    inDuration: 800,
	    outDuration: 800,
	    linkElement: '.animsition-link',
	    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	    loading: true,
	    loadingParentElement: 'body', //animsition wrapper element
	    loadingClass: 'animsition-loading',
	    loadingInner: '', // e.g '<img src="loading.svg" />'
	    timeout: false,
	    timeoutCountdown: 5000,
	    onLoadEvent: true,
	    browser: [ 'animation-duration', '-webkit-animation-duration'],
	    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	    overlay : false,
	    overlayClass : 'animsition-overlay-slide',
	    overlayParentElement : 'body',
	    transition: function(url){ window.location.href = url; }
	  });

	  $(".animsition__right").animsition({
	    inClass: 'fade-in-right-sm',
	    outClass: 'fade-out-right-sm',
	    inDuration: 800,
	    outDuration: 800,
	    linkElement: '.animsition-link',
	    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	    loading: true,
	    loadingParentElement: 'body', //animsition wrapper element
	    loadingClass: 'animsition-loading',
	    loadingInner: '', // e.g '<img src="loading.svg" />'
	    timeout: false,
	    timeoutCountdown: 5000,
	    onLoadEvent: true,
	    browser: [ 'animation-duration', '-webkit-animation-duration'],
	    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	    overlay : false,
	    overlayClass : 'animsition-overlay-slide',
	    overlayParentElement : 'body',
	    transition: function(url){ window.location.href = url; }
	  });

	  $(".animsition__zoom").animsition({
	    inClass: 'zoom-in-sm',
	    outClass: 'zoom-out-sm',
	    inDuration: 2000,
	    outDuration: 800,
	    linkElement: '.animsition-link',
	    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	    loading: true,
	    loadingParentElement: 'body', //animsition wrapper element
	    loadingClass: 'animsition-loading',
	    loadingInner: '', // e.g '<img src="loading.svg" />'
	    timeout: false,
	    timeoutCountdown: 5000,
	    onLoadEvent: true,
	    browser: [ 'animation-duration', '-webkit-animation-duration'],
	    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	    overlay : false,
	    overlayClass : 'animsition-overlay-slide',
	    overlayParentElement : 'body',
	    transition: function(url){ window.location.href = url; }
	  });

	  $(".animsition__rotate").animsition({
	    inClass: 'rotate-in-sm',
	    outClass: 'rotate-out-sm',
	    inDuration: 1500,
	    outDuration: 800,
	    linkElement: '.animsition-link',
	    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	    loading: true,
	    loadingParentElement: 'body', //animsition wrapper element
	    loadingClass: 'animsition-loading',
	    loadingInner: '', // e.g '<img src="loading.svg" />'
	    timeout: false,
	    timeoutCountdown: 5000,
	    onLoadEvent: true,
	    browser: [ 'animation-duration', '-webkit-animation-duration'],
	    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	    overlay : false,
	    overlayClass : 'animsition-overlay-slide',
	    overlayParentElement : 'body',
	    transition: function(url){ window.location.href = url; }
	  });
  }

});

$(window).mousemove(function(e) {
	
	if(window.innerWidth>991){
		var change;
	  var xpos=e.clientX;
	  var ypos=e.clientY;
	  var left=change*20;
	  var xpos=xpos*2;
	  var ypos=ypos*2;
	  $('.product__item').css({
	  	'left':(( 50+(xpos/1000))+"%"),
	  });
	  $('.snot').css({
	  	'left':((55+(xpos/4000))+"%"),
	  });
	  $('.bush1').css({
	  	'left':((-1+(xpos/16000))+"%"),
	  });
	  $('.bush2').css({
	  	'left':((1+(xpos/16000))+"%"),
	  });        
	  $('.bush3').css({
	  	'left':((0+(xpos/8000))+"%"),
	  });
	  $('.rabbits').css({
	  	'left':((0+(xpos/4000))+"%"),
	  }); 
	  $('.rabbit').css({
	  	'left':((0+(xpos/4000))+"%"),
	  });  
	  $('.bush5').css({
	  	'left':((-1+(xpos/8000))+"%"),
	  });
	  $('.bush4').css({
	  	'left':((0+(xpos/2000))+"%"),
	  });
	  $('.bush6').css({
	  	'left':((0+(xpos/2000))+"%"),
	  }); 
	  $('.bush7').css({
	  	'left':((-2+(xpos/2000))+"%"),
	  });
	}

});

$(window).on('scroll', function(e){

	var headerHeight = $('.header').height();
	var doc_h = $(document).scrollTop();
	if(doc_h>2){
		$('.header').addClass('active');
		$('.header__inner').addClass('active');
		$('.page__main .main').addClass('active');
	} else {
		$('.header').removeClass('active');
		$('.header__inner').removeClass('active');
		$('.page__main .main').removeClass('active');
	}

})