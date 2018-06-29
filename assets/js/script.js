//Main Nav


console.clear();

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});


// selected elements
var navTrigger = document.getElementById('nav-trigger');
var nav = document.getElementById('nav');
var header = document.getElementById('header');
var heading = document.getElementById('heading');
var labels = document.getElementsByClassName('nav-label');

// sizing
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var fontSize = windowHeight*0.1;
var headingSize = windowWidth*0.1;

// Event Listening
navTrigger.addEventListener('click', navToggle);
window.addEventListener('resize', resize);

function resize() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  fontSize = windowHeight*0.07;
  headingSize = windowWidth*0.1;
  if(headingSize > windowHeight*0.3) headingSize = windowHeight*0.3; 
  
  for(var i = 0; i < labels.length; i++) {
    labels[i].style.fontSize = fontSize+'px';
    labels[i].style.height = fontSize+'px';
    labels[i].style.marginTop = '-'+fontSize*0.6+'px';
  }

  header.style.height = windowHeight+'px';
  heading.style.fontSize = headingSize+'px';
  heading.style.height = headingSize+'px';
  heading.style.marginTop = '-'+headingSize*0.6+'px';
  
}

function navToggle(e) {
  var closed = (navTrigger.className.indexOf('close') > 0); 
  if(closed) {
    navTrigger.className = 'nav-trigger open';
    nav.className = 'out';
  } else {
    navTrigger.className = 'nav-trigger close';
    nav.className = 'in';
  }
}

window.onload = resize;






//   Fade Scroll:

//   $(function() {
                
//     var documentEl = $(document),
//         fadeElem = $('.fade-scroll');
    
//     documentEl.on('scroll', function() {
//         var currScrollPos = documentEl.scrollTop();
        
//         fadeElem.each(function() {
//             var $this = $(this),
//                 elemOffsetTop = $this.offset().top;
//             if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/800);
//         }); 
//     });
    
// });



// Progress Scroll
var ProgressScroll = function () {
  var s = void 0;

  return {
    settings: function settings() {
      return {
        top: $('.progress-top'),
        right: $('.progress-right'),
        bottom: $('.progress-bottom'),
        left: $('.progress-left'),
        windowHeight: $(window).height(),
        windowWidth: $(window).width(),
        scrollHeight: $(document).height() - $(window).height(),
        progressTotal: $(window).height() * 2 + $(window).width() * 2,
        scrollPosition: $(document).scrollTop()
      };
    },
    init: function init() {
      s = this.settings();
      this.bindEvents();
    },
    bindEvents: function bindEvents() {
      $(window).on('scroll', this.onScroll);
      $(window).on('resize', this.onResize);

      this.progress();
    },
    onScroll: function onScroll() {
      s.scrollPosition = $(document).scrollTop();

      ProgressScroll.requestTick();
    },
    onResize: function onResize() {
      s.windowHeight = $(window).height();
      s.windowWidth = $(window).width();
      s.scrollHeight = $(document).height() - s.windowHeight;
      s.progressTotal = s.windowHeight * 2 + s.windowWidth * 2;

      ProgressScroll.requestTick();
    },
    requestTick: function requestTick() {
      requestAnimationFrame(this.progress);
    },
    progress: function progress() {
      var percentage = s.scrollPosition / s.scrollHeight;
      var width = s.windowWidth / s.progressTotal;
      var height = s.windowHeight / s.progressTotal;

      s.top.css('width', percentage / width * 100 + '%');
      s.right.css('height', (percentage - width) / height * 100 + '%');
      s.bottom.css('width', (percentage - width - height) / width * 100 + '%');
      s.left.css('height', (percentage - width - height - width) / height * 100 + '%');
    }
  };
}();

// Init
$(function () {
  ProgressScroll.init();
});





//btn-6
$(function() {  
  $('.btn-6')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});






$(document).ready(function(){

//   $('#section1').waypoint(function() {
//     $('#section1').addClass('fadeOut');
// }, { offset: '-51%' });

// $('#section1').waypoint(function() {
//   $('#section1').removeClass('fadeOut');
//  }, { offset: '-50%' });

//  $('#section1').waypoint(function() {
//   $('#section1').addClass('fadeIn');
//  }, { offset: '-52%' });


//  $('#section2').waypoint(function() {
//   $('#section2').addClass('fadeOut');
// }, { offset: '-51%' });

// $('#section2').waypoint(function() {
// $('#section2').removeClass('fadeOut');
// }, { offset: '-50%' });

// $('#section2').waypoint(function() {
// $('#section2').addClass('fadeIn');
// }, { offset: '-52%' });


// $('#section3').waypoint(function() {
//   $('#section3').addClass('fadeOut');
// }, { offset: '-51%' });

// $('#section3').waypoint(function() {
// $('#section3').removeClass('fadeOut');
// }, { offset: '-50%' });

// $('#section3').waypoint(function() {
// $('#section3').addClass('fadeIn');
// }, { offset: '-52%' });

// $('#section4').waypoint(function() {
//   $('#section4').addClass('fadeOut');
// }, { offset: '-51%' });

// $('#section4').waypoint(function() {
// $('#section4').removeClass('fadeOut');
// }, { offset: '-50%' });

// $('#section4').waypoint(function() {
// $('#section4').addClass('fadeIn');
// }, { offset: '-52%' });


// $('#section5').waypoint(function() {
//   $('#section5').addClass('fadeOut');
// }, { offset: '-51%' });

// $('#section5').waypoint(function() {
// $('#section5').removeClass('fadeOut');
// }, { offset: '-50%' });

// $('#section5').waypoint(function() {
// $('#section5').addClass('fadeIn');
// }, { offset: '-52%' });

// $('#section6').waypoint(function() {
//   $('#section6').addClass('fadeOut');
// }, { offset: '-51%' });

// $('#section6').waypoint(function() {
// $('#section6').removeClass('fadeOut');
// }, { offset: '-50%' });

// $('#section6').waypoint(function() {
// $('#section6').addClass('fadeIn');
// }, { offset: '-52%' });

// $('#section7').waypoint(function() {
//   $('#section7').addClass('fadeOut');
// }, { offset: '-51%' });

// $('#section7').waypoint(function() {
// $('#section7').removeClass('fadeOut');
// }, { offset: '-50%' });

// $('#section7').waypoint(function() {
// $('#section7').addClass('fadeIn');
// }, { offset: '-52%' });

// $('#section8').waypoint(function() {
//   $('#section8').addClass('fadeOut');
// }, { offset: '-51%' });

// $('#section8').waypoint(function() {
// $('#section8').removeClass('fadeOut');
// }, { offset: '-50%' });

// $('#section8').waypoint(function() {
// $('#section8').addClass('fadeIn');
// }, { offset: '-52%' });




 

  // hide our element on page load
  // $('.flower').css('opacity', 0);
 
  $('.flower').waypoint(function() {
      $('.flower').addClass('shake');
  }, { offset: '98%' });



//   $('.flower').waypoint(function() {
//     $('.flower').removeClass('shake');
// }, { offset: '99%' });


$('.boxing').css('opacity', 0);
 
$('.boxing').waypoint(function() {
    $('.boxing').addClass('zoomIn');
}, { offset: '80%' });


$('.boxing').waypoint(function() {
  $('.boxing').removeClass('zoomIn');
}, { offset: '96%' });

// $('.boxing').waypoint(function() {
//   $('.boxing').css('opacity', 1);
// }, { offset: '70%' });


  // hide our element on page load
  $('.can').css('opacity', 0);
 
  $('.can').waypoint(function() {
      $('.can').addClass('zoomInDown');
  }, { offset: '75%' });

  $('.can').waypoint(function() {
    $('.can').css('opacity', 1);
  }, { offset: '75%' });

//   $('.can').waypoint(function() {
//     $('.can').removeClass('fadeInLeft');
// }, { offset: '96%' });
 

  // hide our element on page load
  $('.project01').css('opacity', 0);
 
  $('.project01').waypoint(function() {
      $('.project01').addClass('fadeInRightBig');
  }, { offset: '70%' });

//   $('.project01').waypoint(function() {
//     $('.project01').removeClass('fadeInRight');
// }, { offset: '96%' });



  // hide our element on page load
  $('.businesspic').css('opacity', 0);
 
  $('.businesspic').waypoint(function() {
      $('.businesspic').addClass('rotateIn');
  }, { offset: '75%' });

//   $('.businesspic').waypoint(function() {
//     $('.businesspic').removeClass('rotateIn');
// }, { offset: '96%' });


  // hide our element on page load
  $('.cpic').css('opacity', 0);
 
  $('.cpic').waypoint(function() {
      $('.cpic').addClass('rollIn');
  }, { offset: '75%' });

//   $('.cpic').waypoint(function() {
//     $('.cpic').removeClass('rollIn');
// }, { offset: '96%' });


$('.coffee').css('opacity', 0);
 
$('.coffee').waypoint(function() {
    $('.coffee').addClass('rollIn');
}, { offset: '75%' });


// $('.websitetext').css('opacity', 0);
 
// $('.websitetext').waypoint(function() {
//     $('.websitetext').addClass('fadeInUp');
// }, { offset: '95%' });






// $('.bowtie').css('opacity', 0);
 
$('.bowtie').waypoint(function() {
    $('.bowtie').addClass('swing');
}, { offset: '75%' });

// $('.brandingtext').css('opacity', 0);
 
// $('.brandingtext').waypoint(function() {
//     $('.brandingtext').addClass('fadeInUp');
// }, { offset: '95%' });




$('.robot').css('opacity', 0);
 
$('.robot').waypoint(function() {
    $('.robot').addClass('rollIn');
}, { offset: '75%' });


// $('.advertisingtext').css('opacity', 0);
 
// $('.advertisingtext').waypoint(function() {
//     $('.advertisingtext').addClass('fadeInRight');
// }, { offset: '95%' });



});




//Scroll Magic



// $(document).ready(function(){

//   // Init ScrollMagic
//   var controller = new ScrollMagic.Controller();

//   // build a scene
//   var ourScene = new ScrollMagic.Scene({
//       triggerElement: '.project01'
// })
// .setClassToggle('.project01', 'fade-in') //add class to project01
// // .addIndicators({
// //   name: 'fade scene',
// //   colorTrigger: 'black',
// //   indent: 200,
// //   colorStart: '#75C695'
// // })
// .addTo(controller);


// });




(function($){
  function floatLabel(inputType){
    $(inputType).each(function(){
      var $this = $(this);
      // on focus add cladd active to label
      $this.focus(function(){
        $this.next().addClass("active");
      });
      //on blur check field and remove class if needed
      $this.blur(function(){
        if($this.val() === '' || $this.val() === 'blank'){
          $this.next().removeClass();
        }
      });
    });
  }
  // just add a class of "floatLabel to the input field!"
  floatLabel(".floatLabel");
})(jQuery);






// $(document).ready(function(){

//   var controller = new ScrollMagic.Controller();

//   //pin the intro
//   var pinIntroScene = new ScrollMagic.Scene({
//     triggerElement: '#section1',
//     triggerHook: 0
//   })
//   .setPin('#section1')
//   .addTo(controller);
  
//   //pin section2
//   var pinIntroScene = new ScrollMagic.Scene({
//     triggerElement: '#section2',
//     triggerHook: 0
//   })
//   .setPin('#section2')
//   .addTo(controller);
  



// });



// $('.button').click(function(){
//   var buttonId = $(this).attr('id');
//   $('#modal-container').removeAttr('class').addClass(buttonId);
//   $('body').addClass('modal-active');
// })

// $('#modal-container').click(function(){
//   $(this).addClass('out');
//   $('body').removeClass('modal-active');
// });

const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    imgContent[i].style.left = e.pageX + 'px';
    imgContent[i].style.top = e.pageY + 'px';
  }
};

document.addEventListener('mousemove', showImgContent);