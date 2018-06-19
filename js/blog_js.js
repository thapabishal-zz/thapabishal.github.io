$( document ).ready(function() {
  console.log( "document ready!" );

  var $sticky = $('.sticky');
  var $stickyrStopper = $('.sticky-stopper');
  if (!!$sticky.offset()) { // make sure ".sticky" element exists

    var generalSidebarHeight = $sticky.innerHeight();
    var stickyTop = $sticky.offset().top;
    var stickOffset = 0;
    var stickyStopperPosition = $stickyrStopper.offset().top;
    var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
    var diff = stopPoint + stickOffset;
    var stickyWidth=$sticky.width();
    $(window).scroll(function(){ // scroll event
      var windowTop = $(window).scrollTop(); // returns number
    
      if (stopPoint < windowTop) {
          $sticky.css({ position: 'absolute', top: (diff-55),});
      } else if (stickyTop < windowTop+stickOffset) {
          $sticky.css({ position: 'fixed', top: '65px',width:stickyWidth });
      } else {
          $sticky.css({position: 'relative', top: 'initial'});
      }
    });

  }
});