
jQuery(document).ready(function(
	) {

	// Scroll to start
	jQuery('.scrolltotop').click(function(){
		jQuery('html').animate({'scrollTop' : '0px'}, 300);
		return false;
	});

	jQuery(window).scroll(function(){
		var upto = jQuery(window).scrollTop();
		if(upto > 500) {
			jQuery('.scrolltotop').fadeIn();
		} else {
			jQuery('.scrolltotop').fadeOut();
		}
	});

// Scroll to end

 //collapse the sidebar
     $('.menu-btn').click(function(){
       $('.sidebar-menu').addClass('active');
     });

     $('.close-btn').click(function(){
       $('.sidebar-menu').removeClass('active');
     });

     //lang-drop
     $("#droptrigger").click(function() {
    $(".dropcontent").toggleClass("drop-open", 3000)
  }) 

   $("#droptrigger1").click(function() {
    $(".dropcontent1").toggleClass("drop-open", 3000)
  })

   $("#droptrigger2").click(function() {
    $(".dropcontent2").toggleClass("drop-open", 3000)
  })

   $("#droptrigger3").click(function() {
    $(".dropcontent3").toggleClass("drop-open", 3000)
  })


  //tab-js
 	$(".first_tab").champ(); 

	//date-picker
  	$('#datepicker').datepicker({
        uiLibrary: 'bootstrap4'
    });

    $('#datepicker2').datepicker({
        uiLibrary: 'bootstrap4'
    }); 

    $('#datepicker3').datepicker({
        uiLibrary: 'bootstrap4'
    });

     $('#datepicker4').datepicker({
        uiLibrary: 'bootstrap4'
    }); 

     $('#datepicker5').datepicker({
        uiLibrary: 'bootstrap4'
    });

     $('#datepicker6').datepicker({
        uiLibrary: 'bootstrap4'
    });

    //active-menu
     jQuery(".popular-inner-left ul li a").click(function() {
     	jQuery(".popular-inner-left ul li a").removeClass("act1")
     	jQuery(this).addClass("act1")

     });

     jQuery(".popular-inner-left10 ul li a ").click(function() {
     	jQuery(".popular-inner-left10 ul li a").removeClass("act2")
     	jQuery(this).addClass("act2")

     });

     // carousel-1
	$("#owl-csel1").owlCarousel({
		items: 4,
		autoplay: false,
		autoplayTimeout: 3000,
		startPosition: 0,
		rtl: false,
		loop: true,
		margin: 0,
		dots: true,
		nav: true,
		navText: [
			'<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'
				],
		navContainer: '.main-content1 .custom-nav',
		responsive:{
			0: {
				items: 1,
									
			},
			767: {
				items: 1,

			},
			991: {
				items: 1,		
					
			},
			1199: {
				items: 1,		
					
			},
			1200: {
				items: 1,

			}
		}

	});

// carousel-2
	$("#owl-csel2").owlCarousel({
		items: 4,
		autoplay: false,
		autoplayTimeout: 3000,
		startPosition: 0,
		rtl: false,
		loop: true,
		margin: 15,
		dots: true,
		nav: true,
		navText: [
			'<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'
				],
		navContainer: '.main-content2 .custom-nav',
		responsive:{
			0: {
				items: 1,
									
			},
			767: {
				items: 1,

			},
			991: {
				items: 1,		
					
			},
			1199: {
				items: 1,		
					
			},
			1200: {
				items: 1,

			}
		}

	});

// carousel-3
	$("#owl-csel3").owlCarousel({
		items: 4,
		autoplay: false,
		autoplayTimeout: 3000,
		startPosition: 0,
		rtl: false,
		loop: true,
		margin: 15,
		dots: true,
		nav: true,
		navText: [
			'<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'
				],
		navContainer: '.main-content3 .custom-nav',
		responsive:{
			0: {
				items: 1,
									
			},
			767: {
				items: 1,

			},
			991: {
				items: 1,		
					
			},
			1199: {
				items: 1,		
					
			},
			1200: {
				items: 1,

			}
		}

	});

	// carousel-4
	$("#owl-csel4").owlCarousel({
		items: 4,
		autoplay: false,
		autoplayTimeout: 3000,
		startPosition: 0,
		rtl: false,
		loop: true,
		margin: 15,
		dots: true,
		nav: true,
		navText: [
			'<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'
				],
		navContainer: '.main-content4 .custom-nav',
		responsive:{
			0: {
				items: 1,
									
			},
			767: {
				items: 1,

			},
			991: {
				items: 1,		
					
			},
			1199: {
				items: 1,		
					
			},
			1200: {
				items: 1,

			}
		}

	});


//flight-drop
jQuery(".flight-detalis21").click(function() {
	jQuery(".flight-drop-inner1").toggleClass("flight-show");
		
});

jQuery(".flight-detalis22").click(function() {
	jQuery(".flight-drop-inner2").toggleClass("flight-show");
		
});

jQuery(".flight-detalis23").click(function() {
	jQuery(".flight-drop-inner3").toggleClass("flight-show");
		
});









//main
});