jQuery(function($) {

  // Breakpoints
  // --------------------------------------------------
    var $bpSmaller = 480;
    var $bpSmall   = 768;
    var $bpMedium  = 1024;
    var $bpLarge   = 1300;

  // Pages
  // --------------------------------------------------
    var home = $('body').hasClass('home');
    var cbt = $('body').hasClass('cbt');
    var grooveshark = $('body').hasClass('grooveshark');
    var usaf = $('body').hasClass('usaf');
    var dmm = $('body').hasClass('dmm');
    var stax = $('body').hasClass('stax');
    var oca = $('body').hasClass('oca');
    var flowtype = $('body').hasClass('flowtype');

  // Window Width
  // --------------------------------------------------
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $(window).resize(function() {
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
    });

  // Let's scroll faster
  // --------------------------------------------------
  if(!Modernizr.touch) {
    var body = document.body,
        timer;

    window.addEventListener('scroll', function() {
      clearTimeout(timer);
      if(!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover')
      }
      
      timer = setTimeout(function(){
        body.classList.remove('disable-hover')
      },250);
    }, false);
  }
  
  // Preload
  // --------------------------------------------------
  $.preloadImages = function() {
    for (var i = 0; i < arguments.length; i++) {
      $("<img />").attr("src", arguments[i]);
    }
  }

  // Images loaded
  // --------------------------------------------------
  imagesLoaded('main', function() {
    console.log('images loaded');
    setTimeout(function() {
      $('html').removeClass('loading');
    }, 1000);
  });


  // Navigation
  // --------------------------------------------------
  if(windowWidth < $bpSmall) {
    var control = $('nav .control');
    control.on('click', function() {
      $('body').toggleClass('fixed');
      $(this).parents('.banner').toggleClass('open');
    });
  }

  // Hero
  // --------------------------------------------------

    if(home) {
      //$(window).stellar();

      if(!Modernizr.touch) {
        $('.bug').show();
        console.log('what?');
      }

      $('.banner a').on('click', function (e) {
        e.preventDefault();
        var scrollPos = $($(this).attr('href')).offset().top;
        console.log(scrollPos);
        $('html,body').animate({
          scrollTop: scrollPos
        }, 1000);
      });

      
    }

  // Work tiles
  // --------------------------------------------------

  $(document).ready(function(){

    $('.container .work:first-child').height($('.container .work:first-child').width() * 0.75);
    $('.work').height($('.container .work:first-child').width() * 0.75);

    $(window).resize(function() {
      $('.container .work:first-child').height($('.container .work:first-child').width() * 0.75);
      $('.work').height($('.container .work:first-child').width() * 0.75);
    });


    $('.work').each(function() {
      var bg = $(this).attr('data-bg');
      var gif = '/img/case-studies/'+$(this).attr('data-img')+'.gif';
      var videoContainer = $('video', this);

      $(this).css('background-color', bg);


      if(!Modernizr.touch) {

        if($('video', this).length) {
          var video = $('video', this).attr('id');
          var player = videojs(video);

          $(this).hover(function() {
            player.play();
            videoContainer.addClass('active');
          });

          $(this).mouseout(function() {
            videoContainer.removeClass('active');
            setTimeout(function() {

              player.pause();
            }, 1500);
          });
        }


      } else {

        if($(this).attr('data-img')) {
          $(this).prepend('<span class="a"></span>');
          $('.a', this).css('background-image', 'url('+gif+')');
        }

      }

    });
  });

  // Scrollin'
  //------------------------------------------------
  $(document).ready(function(){
    setTimeout(function () {
      $('.scroll').addClass('visible');
    }, 1500);
    $(document).on('scroll', function () {
      var scroll = $(this).scrollTop();
      if(scroll > 50) {
         $('.scroll').removeClass('visible');
      } else {
         $('.scroll').addClass('visible');
      }
    });

    $('.scroll').on('click', function () {
      scrollPos = $($('#hero').next('section')).offset().top;
      console.log(scrollPos);
      $('html,body').animate({
        scrollTop: scrollPos
      }, 1000);
    });
  });

  // Contact
  // --------------------------------------------------
  var contact = function() {
    $('#contact .location').each(function() {
      $(this).height($(this).width()*0.75);
    });
  };
  $(document).ready(contact);
  $(window).resize(contact);

  // Fitvids
  // --------------------------------------------------
  $('.video-container').fitVids();

  // Forms
  // --------------------------------------------------
  function focusProjectInquiry() {
    var iframe = $("#project-inquiry")[0];
    iframe.contentWindow.focus();
  }
  function focusPassionProjectInquiry() {
    var iframe = $("#passion-project-inquiry")[0];
    iframe.contentWindow.focus();
  }

  $(document).on('click', '.project-inquiry', function(e) {
    e.preventDefault();
    if(!$('.iframe-close').length) {
      $('body').append('<a href="#" class="iframe-close">&times;</a>');
    }
    $('#project-inquiry').addClass('active');
    setTimeout(focusProjectInquiry, 100);
    setTimeout(function() {
      $('.iframe-close').addClass('active');
    }, 200);
    return false;
  });

  $(document).on('click', '.passion-project-inquiry', function(e) {
    e.preventDefault();
    if(!$('.iframe-close').length) {
      $('body').append('<a href="#" class="iframe-close">&times;</a>');
    }
    $('#passion-project-inquiry').addClass('active');
    setTimeout(function() {
      $('.iframe-close').addClass('active');
    }, 200);
  });

  $(document).on('click', '.iframe-close', function(e) {
    e.preventDefault();
    $('.contact-frame').removeClass('active');
    $('.iframe-close').removeClass('active');
    setTimeout(function() {
      $('.iframe-close').remove();
    }, 500);
  });

  // Sections
  // --------------------------------------------------
  $('section').each(function() {
    var section = $(this);
    $(this).waypoint(function() {
      console.log('section activated');

      section.addClass('active');

      // Load images
      $('img', this).each(function() {
        var imgSrc = $(this).attr('data-src');
        if(imgSrc) {
          $(this).attr('src', imgSrc);
        }
      });

      // Load background images
      $('.image', this).each(function() {
        var style = $(this).attr('data-style');
        if(style) {
          $(this).attr('style', style);
        }
      });

    }, { offset: '70%' });
  });

  console.log('testing');

  // Case study footer
  // -------------------------------------------------
  if (document.location.hostname == "localhost") {
    var originalFilename = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    var filename = originalFilename.slice(0, -4)+'.html';
  } else {
    var filename = window.location.href.substr(window.location.href.lastIndexOf("/")+1)+'.html';
  }
  console.log(filename);
  var caseStudies = ['cross-browser-testing.html', 'grooveshark.html', 'orthodox-church-in-america.html', 'stax-museum.html'];
  caseStudies = jQuery.grep(caseStudies, function(value) {
    return value != filename;
  });
  console.log(caseStudies);
  $('footer.case-study').load('_cards/'+caseStudies[Math.floor(Math.random() * caseStudies.length)]);

  //  =============================================================================
  //  Case Studies
  //  =============================================================================

    // CBT
    //------------------------------------------------
    if(cbt) {
      $(document).ready(function(){

        $('.browser-icon').each(function () {
            var randomtop = Math.floor(Math.random() * ($(window).height() - $(this).height() - 20)),
                randomleft = Math.floor(Math.random() * ($(window).width() - $(this).width() - 20)),
                randomzindex = Math.floor(Math.random() * 30),
                randomnumber = Math.floor(Math.random() * (5 - 2 + 1)) + 2;;
            $(this).css({
                "top": randomtop,
                "left": randomleft,
                "z-index": randomzindex
            }).attr('data-stellar-ratio',randomnumber);
        });

        if(!Modernizr.touch) {
          $.stellar();
        }
        
      });
    }

    // DMM
    // --------------------------------------------------
    if(dmm) {

      

      if(!Modernizr.touch) {
        $.stellar();
      }

      // card slideshow
      $('.cards').flexslider({
        selector: 'ul > li',
        animation: 'slide',
        directionNav: false,
        slideshow: false
      });

      // Boards slideshow
      $('.moodboards').flexslider({
        selector: 'ul > li',
        animation: 'slide',
        directionNav: false,
        smoothHeight: true,

      });

    }

    // Grooveshark
    // --------------------------------------------------
    if(grooveshark) {
      if(!Modernizr.touch) {
        $.stellar();
      }
    }

    // USAF
    // --------------------------------------------------
    if(usaf) {

      if(!Modernizr.touch) {
        $.stellar();
      }

      $('#results header').bigtext({
        maxfontsize: 80
      });

    }

    // Stax
    // --------------------------------------------------
    if(stax) {

      if(!Modernizr.touch) {
        $.stellar();
      }

    }

    // OCA
    // --------------------------------------------------
    if($('body').hasClass('oca')) {
      
      if(!Modernizr.touch) {
        $.stellar();
      }

      var $container = $('#patterns .container');
      // init
      $container.packery({
        itemSelector: '.item',
        gutter: 10
      });

    }

    // Flowtype
    // --------------------------------------------------
    if(flowtype) {
      $(function() {
        $( "#demo-control" ).slider({
           max     : 100,
           min     : 20,
           step    : 0.1,
           value   : 60,
           slide: function( event, ui ) {
                    $('#demo-wrap').css("width",ui.value + "%");
                    $('#hint-triangle').animate({
                      top: 20
                   });
                 }
        });
     });

     $('.demo-article').bind('mousewheel DOMMouseScroll', function(e) {
        var scrollTo = null;
        if (e.type == 'mousewheel') {
           scrollTo = (e.originalEvent.wheelDelta * -1);
        } else if (e.type == 'DOMMouseScroll') {
           scrollTo = 40 * e.originalEvent.detail;
        } if (scrollTo) {
           e.preventDefault();
           $(this).scrollTop(scrollTo + $(this).scrollTop());
        }
     });
    }

});