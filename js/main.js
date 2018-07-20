$(document).ready(function() {
	if(window.innerWidth>991){
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
	  	// 'top':((50+(ypos/1000))+"%"),
	  	'left':(( 50+(xpos/1000))+"%"),
	  });
	  $('.snot').css({
	  	// 'top':((-1+(ypos/1000))+"%"),
	  	'left':((55+(xpos/4000))+"%"),
	  });
	  $('.bush1').css({
	  	// 'top':((-1+(ypos/1000))+"%"),
	  	'left':((-1+(xpos/16000))+"%"),
	  });
	  $('.bush2').css({
	  	// 'top':((-1+(ypos/1000))+"%"),
	  	'left':((1+(xpos/16000))+"%"),
	  });        
	  $('.bush3').css({
	  	// 'top':((0+(ypos/500))+"%"),
	  	'left':((0+(xpos/8000))+"%"),
	  });
	  $('.rabbits').css({
	  	// 'top':((0+(ypos/300))+"%"),
	  	'left':((0+(xpos/4000))+"%"),
	  }); 
	  $('.rabbit').css({
	  	// 'top':((0+(ypos/300))+"%"),
	  	'left':((0+(xpos/4000))+"%"),
	  });  
	  $('.bush5').css({
	  	// 'top':((1+(ypos/500))+"%"),
	  	'left':((-1+(xpos/8000))+"%"),
	  });
	  $('.bush4').css({
	  	// 'top':((0+(ypos/200))+"%"),
	  	'left':((0+(xpos/2000))+"%"),
	  });
	  $('.bush6').css({
	  	// 'top':((0+(ypos/200))+"%"),
	  	'left':((0+(xpos/2000))+"%"),
	  }); 
	  $('.bush7').css({
	  	// 'top':((0+(ypos/200))+"%"),
	  	'left':((-2+(xpos/2000))+"%"),
	  });
	}
});
