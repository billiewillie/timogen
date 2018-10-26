$(document).ready(function() {
    $('.menu').click(function(e) {
        $(this).toggleClass('open');
        $('.header__menu').toggleClass('open');
        $('.wrapper').toggleClass('active');
        $('.page__main .main').toggleClass('hidden');
        $('footer.footer').toggleClass('hidden');
        $('.menu__item').toggleClass('active');
    });

    $('.search__mob').click(function(e) {
        $(".header__search--mob").toggleClass('active');
        $(".form__mob--text").focus();
        e.stopPropagation();
    });
    $('.form__mob--close').click(function(e) {
        $(".header__search--mob").removeClass('active');
    });

    $(".header__search--mob").click(function(e) {
        e.stopPropagation();
    });

    $(document).click(function() {
        $(".header__search--mob").removeClass('active');
    });


    // year
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    $('.year').html(year);
    // year


    $('.main__content .tab__item').hide();
    $('.main__content .tab__item:nth-child(1)').show();
    $('.tab').click(function(e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
            others = $this.siblings('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).find('.tab__item').hide();
        $(target).show();
    });

    $('.buy__bottom--block--2').hide();
    $('.buy__bottom--block--1').show();
    $('.buy__btn').click(function(e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.buy__btn--list').data('tabgroup'),
            others = $this.siblings('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).find('.buy__bottom--block').hide();
        $(target).show();
    });

    // $('.buy__table').hide();
    // $('#city-tab1').show();
    // $('.city').click(function(e) {
    //     e.preventDefault();
    //     var $this = $(this),
    //         tabgroup = '#' + $this.parents('.cities').data('tabgroup'),
    //         others = $this.siblings('a'),
    //         target = $this.attr('href');
    //     others.removeClass('active');
    //     $this.addClass('active');
    //     $(tabgroup).find('.buy__table').hide();
    //     $(target).show();
    // });

    if($('.school__list').length){

      $('.school__tab--all').addClass('active');

      function big(e){
        var school__item = $('.school__item');
        for (var i=0; i<3; i++) {
          school__item[i].classList.add('big');
        }
      }
      big();

    }

    

    if (window.innerWidth > 991 && $('.page__promo').length) {
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
            browser: ['animation-duration', '-webkit-animation-duration'],
            // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
            // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body',
            transition: function(url) { window.location.href = url; }
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
            browser: ['animation-duration', '-webkit-animation-duration'],
            // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
            // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body',
            transition: function(url) { window.location.href = url; }
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
            browser: ['animation-duration', '-webkit-animation-duration'],
            // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
            // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body',
            transition: function(url) { window.location.href = url; }
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
            browser: ['animation-duration', '-webkit-animation-duration'],
            // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
            // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body',
            transition: function(url) { window.location.href = url; }
        });
    }

});

$(window).mousemove(function(e) {

    if (window.innerWidth > 991) {
        var change;
        var xpos = e.clientX;
        var ypos = e.clientY;
        var left = change * 20;
        var xpos = xpos * 2;
        var ypos = ypos * 2;
        $('.product__item').css({
            'left': ((50 + (xpos / 1000)) + "%"),
        });
        $('.snot').css({
            'left': ((55 + (xpos / 4000)) + "%"),
        });
        $('.bush1').css({
            'left': ((-1 + (xpos / 16000)) + "%"),
        });
        $('.bush2').css({
            'left': ((1 + (xpos / 16000)) + "%"),
        });
        $('.bush3').css({
            'left': ((0 + (xpos / 8000)) + "%"),
        });
        $('.rabbits').css({
            'left': ((0 + (xpos / 4000)) + "%"),
        });
        $('.rabbit').css({
            'left': ((0 + (xpos / 4000)) + "%"),
        });
        $('.bush5').css({
            'left': ((-1 + (xpos / 8000)) + "%"),
        });
        $('.bush4').css({
            'left': ((0 + (xpos / 2000)) + "%"),
        });
        $('.bush6').css({
            'left': ((0 + (xpos / 2000)) + "%"),
        });
        $('.bush7').css({
            'left': ((-2 + (xpos / 2000)) + "%"),
        });
    }
});

$(window).on('scroll', function(e) {

    var height = $(document).height();
    var bottomHeight = $('.sick__how').height();
    var headerHeight = $('.header').height();
    var buttonHeight = $('.sick__button').height();
    var footerHeight = $('footer').height();
    var client_h = $(window).height();
    var doc_h = $(document).scrollTop();
    if (doc_h > 2) {
        $('.header').addClass('active');
        $('.header__inner').addClass('active');
        $('.page__main .main').addClass('active');
    } else {
        $('.header').removeClass('active');
        $('.header__inner').removeClass('active');
        $('.page__main .main').removeClass('active');
    }

    if (doc_h + client_h > (height - footerHeight)) {
        $('.warning__fixed').addClass('hidden');
    } else {
        $('.warning__fixed').removeClass('hidden');
    }

});


if ($('.wow').length){
  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    mobile: false,
    duration: 5000,
  })
  wow.init();
}

if (window.innerWidth < 768){

  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.menu__title');
      // Evento
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
        $this = $(this),
        $next = $this.next();

      $next.slideToggle('fast');
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      };
    } 

    var accordion = new Accordion($('#accordion'), false);
  });

}

if($('.school__list').length){

  var selectedClass = "";
  $(".school__tab").click(function(e){ 
    $(".school__tab").removeClass('active');
    $(this).addClass('active');
    $(".school__list").toggleClass('hidden');
    $(".school__item").removeClass('big');
    selectedClass = $(this).attr("data-rel"); 
    if(selectedClass === 'all'){
      $(".school__item").not("."+selectedClass).fadeOut();
      setTimeout(function() {
        var selected = $('.all');
        for (var i=0; i<3; i++) {
          selected[i].classList.add('big');
        }
        selected.fadeIn();
        $(".school__list").toggleClass('hidden');
      }, 100); 
    } else {
      $(".school__item").not("."+selectedClass).fadeOut();
      setTimeout(function() {
        var selected = $("."+selectedClass);
        for (var i=0; i<1; i++) {
          selected[i].classList.add('big');
        }
        selected.fadeIn();
        $(".school__list").toggleClass('hidden');
      }, 100); 
    }
  });
}