// Navigation
  // --------------------------------------------------
  $(document).ready(function(){
    if($(window).width() < 768) {
      var control = $('nav .control');
      control.on('click', function() {
        $('body').toggleClass('fixed');
        $(this).parents('.banner').toggleClass('open');
      });
    }
  });


// Demo Area
// =========

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

   var $root = $('html, body');
   $('a').click(function(){
     $root.animate({scrollTop: $( $.attr(this, 'href') ).offset().top + 20}, 500);
     return false;
   });

// FlowType.JS
// ===========

// For the entire page
   $('body').flowtype({
     minFont   : 16,
     maxFont   : 40,
     fontRatio : 65
   });

// For the demo only
   $('#demo-wrap').flowtype({
     fontRatio : 36
   });

// For the large demo site
  $('.featured-article').flowtype({
    minFont   : 12,
    fontRatio : 20
  });
  $('.half-article').flowtype({
    minFont   : 16,
    fontRatio : 30
  });
  $('.large-article').flowtype({
    minFont   : 16,
    fontRatio : 28
  });
  $('.main-article').flowtype({
    minFont   : 16,
    fontRatio : 28
  });
  $('.quarter-article-a,.quarter-article-b').flowtype({
    minFont   : 10,
    fontRatio : 20
  });
  $('.side-stories').flowtype({
    minFont   : 10,
    fontRatio : 20
  });
  $('.triad,.triad-last').flowtype({
    minFont   : 16,
    fontRatio : 22
  });