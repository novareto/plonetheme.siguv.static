$(document).ready(function(){


		$(window).scroll(function(){
		if ($(this).scrollTop() > 100) 
		{
			$('div.back-to-top-arrow').fadeIn();
		} 
		else 
		{
			$('div.back-to-top-arrow').fadeOut();
		}
	});
	

	$('.scroll-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},400);
		return false;
	});

	$('.toggle-search-form').on('click', function(){
		// var class = $(this).attr('data-class');
		// console.log('class');
		$('form.search-form--header').toggleClass("hidden");
		$('div.social-links').toggleClass("hidden");
		$('nav.main-nav--header').toggleClass("hidden");
		// $('nav.main-nav').toggleClass('mobile-visible');
		// $('body').toggleClass('freeze');
	})

	$('p.toggle-nav').on('click', function(){
		// var class = $(this).attr('data-class');
		// console.log('class');
		$('nav.main-nav').toggleClass("no-mobile-visibility");
		$('div.social-links').toggleClass("no-mobile-visibility");
		$('form.search-form--header').toggleClass("hidden");
		$(this).find('span').toggleClass("hidden");
		$('body').toggleClass('freeze');
		// $('nav.main-nav').toggleClass('mobile-visible');
		// $('body').toggleClass('freeze');
	})

	// Toggle hidden debate nav items

	// $('div.toggle-expand').on('click', function(){
	// 	$('ul.debates li.sup.hidden').removeClass('hidden');
	// 	$(this).addClass('open');
	// 	//$(this).parents('.debate-nav').find('ul').last().find('li').last().addClass('no-bottom-padding');
	// 	//$('nav.box.debate-nav').removeClass('no-bottom-padding');
	// })
	$(document).on('click', 'div.toggle-expand', function(){
		$('ul.debates li.sup.hidden').removeClass('hidden');
		$(this).addClass('open');
		$(this).find('small.toggle-expand').html('Weniger Beiträge anzeigen');
		//$(this).parents('.debate-nav').find('ul').last().find('li').last().addClass('no-bottom-padding');
		//$('nav.box.debate-nav').removeClass('no-bottom-padding');
	})
	$(document).on('click', 'div.toggle-expand.open', function(){
		$('ul.debates li.sup').addClass('hidden');
		$(this).removeClass('open');
		$(this).find('small.toggle-expand').html('Alle Beiträge anzeigen');
	})


	// Toggle lightbox cover

	$('div.article-cover').on('click', function(){
		$('div.lightbox').toggleClass('hidden');
	})
	
	$('div.lightbox').on('click', function(){
		$('div.lightbox').toggleClass('hidden');
	})

	// Toggle expandable textbox

	$.fn.toggleText = function(t1, t2){
	  if (this.text() == t1) this.text(t2);
	  else                   this.text(t1);
	  return this;
	};

	$('div.toggle-expandable-text small').on('click', function(){
		// var class = $(this).attr('data-class');
		console.log('LOL');
		$(this).parents('div.module__text.expandable').find('div.expandable-text').toggleClass('hidden');
		$(this).toggleClass('open');
		$(this).find('svg').toggleClass('turned');
		$(this).toggleText('Weiterlesen', 'Schliessen');
	})

	$('.toogle-debate-nav-open').on('click', function(){
		// var class = $(this).attr('data-class');
		// console.log('class');
		$('.debate-nav').toggleClass("open");
		// $('nav.main-nav').toggleClass('mobile-visible');
		// $('body').toggleClass('freeze');
	})

	// In-line open debate on /debatten

	$('.debates-overview a.cover').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('expanded');
		$(this).siblings().toggleClass('hidden');
		// var class = $(this).attr('data-class');
		// console.log('class');
		//$('.debate-nav').toggleClass("open");
		// $('nav.main-nav').toggleClass('mobile-visible');
		// $('body').toggleClass('freeze');
	})

	// Toggle author bio

	$('.author-card div.header').on('click', function(e){
		//e.preventDefault();
		$(this).parents('.author-card').toggleClass('expanded');
		$(this).parents('.author-card').siblings().removeClass('expanded');
		// var class = $(this).attr('data-class');
		// console.log('class');
		//$('.debate-nav').toggleClass("open");
		// $('nav.main-nav').toggleClass('mobile-visible');
		// $('body').toggleClass('freeze');
	})


//
// NEWSLETTER SIGNUP
//

$('form.newsletter-form').on("submit", function(event) {
    event.preventDefault();
    var assetSource = $('div.newsletter-signup').attr('data-asset-source');
    $('.newsletter-signup div.form').append('<div class="loader"></div>');
    // console.log(assetSource);
  	$('.newsletter-signup form').toggleClass('hidden');
    $.ajax({url: '/', type: "POST", data: $(this).serialize(), dataType:"json", success: function (data) {
    	
        if (!data.success) {
          // there was an error, do something with data
          $('div.loader').remove();
         $('.newsletter-signup p.newsletter-message').html( "Es gibt ein Problem bei der Anmeldung.<br><br><span class=\"retry\">Nochmal versuchen</span>");
         $('.newsletter-signup div.form').append('<div class="response"><img src="' + assetSource + '/uploads/newsletter-fail.svg"></div>');
        

        } else {
        	$('div.loader').remove();
          console.log('NEWSYAY');
          $('.newsletter-signup p.newsletter-message').html( "Wir haben Ihnen eine Email geschickt. Bitte klicken Sie innerhalb dieser Mail auf den Link, um die Anmeldung abzuschliessen." );
          $('.newsletter-signup div.form').append('<div class="response"><img src="' + assetSource + '/uploads/newsletter-success.svg"></div>');
        }
    }})
});
$('body').on('click', 'span.retry', function(){
	// console.log('RETRY');
	$('div.newsletter-signup p.newsletter-message').html("Jetzt den Newsletter abonnieren und alle zwei Wochen die Beiträge zur neuen Debatte erhalten.");
	$('div.newsletter-signup form').toggleClass('hidden');
	$('div.newsletter-signup div.response').remove();
})


//
// GALLERIES
//

	$( '.slick-slider-module-gallery' ).each(function() {
		var sliderId = $(this).attr('data-id');
		console.log(sliderId);
    	$(this).slick({
		//fade: true,
		arrows: true,
		mobileFirst: true,
		variableWidth: false,
		arrows: true,
		prevArrow:$('.previ_slider[data-id="'+sliderId+'"]'),
  		nextArrow:$('.nexti_slider[data-id="'+sliderId+'"]'),
		infinite: true,
	});
  });


	$('.slick-slider-module-gallery').on('afterChange', function(event, slick, currentSlide){
		var sliderId = $(this).attr('data-id');
		console.log(currentSlide + 1);
		$('div.counter[data-id="'+sliderId+'"] span.current-image-index').html(currentSlide + 1);
	  // left
	});


$('.slick-slider-cards-expanded').each(function( i ) {
	var sliderId = $(this).attr('data-id');
	$('.previ_slider[data-id="'+sliderId+'"]').attr('aria-disabled', 'true');
	$(this).slick({
		//fade: true,
		mobileFirst: true,
		//slidesToShow: 1.5,
		//centerMode: true,
		variableWidth: true,
		prevArrow:$('.previ_slider[data-id="'+sliderId+'"]'),
  		nextArrow:$('.nexti_slider[data-id="'+sliderId+'"]'),
  		infinite: false,
  		responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        arrows: false,
	        //centerMode: true,
	        //centerPadding: '40px',
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 900,
	      settings: {
	        arrows: false,
	        //centerMode: true,
	        //centerPadding: '0px',
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 1200,
	      settings: {
	        arrows: false,
	        //centerMode: true,
	        //centerPadding: '80px',
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	
});

$('.slick-slider-cards-collapsed').each(function( i ) {
	var sliderId = $(this).attr('data-id');
		$(this).slick({
		mobileFirst: true,
		//slidesToShow: 1.5,
		//centerMode: true,
		rows: 2,
		variableWidth: true,
		prevArrow:$('.previ_slider[data-id="'+sliderId+'"]'),
  		nextArrow:$('.nexti_slider[data-id="'+sliderId+'"]'),
  		infinite: false,
  		responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        arrows: false,
	        //centerMode: true,
	        //centerPadding: '40px',
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 900,
	      settings: {
	        arrows: false,
	        //centerMode: true,
	        //centerPadding: '0px',
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 1200,
	      settings: {
	        arrows: false,
	        //centerMode: true,
	        //centerPadding: '80px',
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
});

startVideo = new (function(){
	$(document).on('click', '.button-yt', function(){
		var videoId = $(this).parents('.card.video').attr('data-video-id');
		//var targetOffset = $target.offset().top - $(this).outerHeight(true);
		//$('body').addClass('video-play-state');
		//$('.card.video.open').find('iframe').remove();
		//$('.card.video.open').removeClass('open');
		$(this).parents('.card.video').addClass('open');
		//$(window).scrollTop($(this).offset().top);
		//$('body,html').animate({scrollTop:$(this).offset().top},500);
		$(this).append('<iframe width="1280" height="960" src="https://www.youtube.com/embed/' + videoId + '?feature=oembed&autoplay=1&rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>');

		//$(this).parents('.card.video').find('iframe').remove();
		//$(this).parents('.card.video').find('.button').append('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 721" xml:space="preserve" class="yt-button-svg"><path id="Triangle" fill="#FFFFFF" d="M407,493l276-143L407,206V493z"/><path id="The_Sharpness" opacity="0.12" fill="#420000" d="M407,206l242,161.6l34-17.6L407,206z"/><g id="Lozenge"><g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="512.5" y1="719.7" x2="512.5" y2="1.2" gradientTransform="matrix(1 0 0 -1 0 721)"><stop class="stop-color-1" offset="0"  /><stop class="stop-color-2" offset="1"/></linearGradient><path class="the_button" fill="url(#SVGID_1_)" d="M1013,156.3c0,0-10-70.4-40.6-101.4C933.6,14.2,890,14,870.1,11.6C727.1,1.3,512.7,1.3,512.7,1.3 h-0.4c0,0-214.4,0-357.4,10.3C135,14,91.4,14.2,52.6,54.9C22,85.9,12,156.3,12,156.3S1.8,238.9,1.8,321.6v77.5 C1.8,481.8,12,564.4,12,564.4s10,70.4,40.6,101.4c38.9,40.7,89.9,39.4,112.6,43.7c81.7,7.8,347.3,10.3,347.3,10.3 s214.6-0.3,357.6-10.7c20-2.4,63.5-2.6,102.3-43.3c30.6-31,40.6-101.4,40.6-101.4s10.2-82.7,10.2-165.3v-77.5 C1023.2,238.9,1013,156.3,1013,156.3z M407,493V206l276,144L407,493z"/></g></g></svg>');



	})
	return false;
})
	
});