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

if($('.question__list').length){

  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.question__top');
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
        $el.find('.question__bottom').not($next).slideUp().parent().removeClass('open');
      };
    } 

    var accordion = new Accordion($('.question__list'), false);
  });

}

if($('.question__list').length){

  for (var i = 0; i<3; i++){
    var question__item = $('.question__item').eq(i);
    question__item.addClass('special');
    question__item.find(".question__title").append("<div class='guestion__digit'>" + (i+1) + "</div>").append("<div class='guestion__arrow'></div>");
  }
}


if($('.school__list').length){

  function big(e){
    var school__item = $('.school__item');
    var articles = [];
    $('.school__tab--all').addClass('active');
    school__item.addClass('all');
    for (var i=0; i<3; i++) {
      school__item[i].classList.add('big');
    }
    for (var i=3; i < $('.school__item').length; i++) {
      school__item[i].classList.add('small');
    }
  }
  big();

  // function smallPagination(){
  //   var articles = 10;
  //   var smallCount = Math.ceil($('.school__item.small').length/articles);
  //   for(var i=1; i<smallCount+1; i++){
  //     $('.school__count').append('<span class="school__number">'+i+'</span>');
  //   }
  //   $('.school__number').click(function(){
  //     var b = $(this).text();
  //   });
  // }
  // smallPagination();
  
  // function checkSmall(e){
  //   if($('.school__item.small').length>10){
  //     $('.school__count').addClass('active');
  //   } else {
  //     $('.school__count').removeClass('active');
  //   }
  // }
  // checkSmall();  

  var selectedClass = "";
  $(".school__tab").click(function(e){ 
    $(".school__tab").removeClass('active');
    $('.advice').removeClass('clicked');
    $(this).addClass('active');
    $(".school__item").removeClass('big preview__show small');
    selectedClass = $(this).attr("data-rel"); 
    if(selectedClass === 'all'){
      $(".school__item").not("."+selectedClass).css('display', 'none');
      $('.advice').removeClass('clicked');
      var selected = $('.all');
      for (var i=0; i<3; i++) {
        selected[i].classList.add('big');
      }
      for (var i=3; i<$('.all').length; i++) {
        selected[i].classList.add('small');
      }
      selected.css('display','inline-block');
    } else {
      $(".school__item").not("."+selectedClass).css('display', 'none');
      $('.advice').addClass('clicked');
      var selected = $("."+selectedClass);
      for (var i=0; i<1; i++) {
        selected[i].classList.add('big', 'preview__show');
      }
      for (var i=1; i<selected.length; i++) {
        selected[i].classList.add('small');
      }
      selected.css('display','inline-block');
    }
    checkSmall();
  });
  
}

$(document).ready(function(){

  //how much items per page to show
  var show_per_page = 7;
  //getting the amount of elements inside content div
  var number_of_items = $('#content').children().size();
  //calculate the number of pages we are going to have
  var number_of_pages = Math.ceil(number_of_items/show_per_page);

  //set the value of our hidden input fields
  $('#current_page').val(0);
  $('#show_per_page').val(show_per_page);

  //now when we got all we need for the navigation let's make it '

  /*
  what are we going to have in the navigation?
    - link to previous page
    - links to specific pages
    - link to next page
  */
  var navigation_html = '';
  var current_link = 0;
  while(number_of_pages > current_link){
    navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
    current_link++;
  }
  navigation_html += '';

  $('#page_navigation').html(navigation_html);

  //add active_page class to the first page link
  $('#page_navigation .page_link:first').addClass('active_page');

  //hide all the elements inside content div
  $('#content').children().css('display', 'none');

  //and show the first n (show_per_page) elements
  $('#content').children().slice(0, show_per_page).css('display', 'block');

});

function previous(){

  new_page = parseInt($('#current_page').val()) - 1;
  //if there is an item before the current active link run the function
  if($('.active_page').prev('.page_link').length==true){
    go_to_page(new_page);
  }

}

function next(){
  new_page = parseInt($('#current_page').val()) + 1;
  //if there is an item after the current active link run the function
  if($('.active_page').next('.page_link').length==true){
    go_to_page(new_page);
  }

}
function go_to_page(page_num){
  //get the number of items shown per page
  var show_per_page = parseInt($('#show_per_page').val());

  //get the element number where to start the slice from
  start_from = page_num * show_per_page;

  //get the element number where to end the slice
  end_on = start_from + show_per_page;

  //hide all children elements of content div, get specific items and show them
  $('#content').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');

  /*get the page link that has longdesc attribute of the current page and add active_page class to it
  and remove that class from previously active page link*/
  $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');

  //update the current page input field
  $('#current_page').val(page_num);
}


$('.input').on("focusin focusout", function() {
    $(this).parent().toggleClass('active');
});

$('#remember').on("click", function() {
    $(this).siblings('label').find('.chk-span').toggleClass('checked');
});

$('.question__button button').on("click", function() {
    $('.question__outter').addClass('active');
    $('.question__form').addClass('active');
});

$('.contact_btn').on("click", function() {
    $('.question__form').removeClass('active');
    $('.response').addClass('active');
});

$('.response__close').on("click", function() {
    $('.question__outter').removeClass('active');
    $('.response').removeClass('active');
});

if($('.why__video--outter').length){
  var video = $('.video')[0];
  var cover = $('.why__video--cover');
  var outter = $('.why__video--outter');
  var play = $('.video__play');
  play.on('click', function(){
    outter.addClass('active');
    cover.addClass('hidden');
    video.play();
  });
}

if($('.advice').length){
  var advice = $('.advice__text').length;
  var adviceRandom = Math.floor(Math.random()*(advice));
  $('.advice__text').eq(adviceRandom).addClass('active');
}