// jQuery .removeClassRegEx function
(function($){
	$.fn.removeClassRegEx = function(regex){
		return this.each(function(){
			var classes = $(this).attr('class');
			if( !classes || !regex){return false;}
			var classArray = [];
			classes = classes.split(' ');
			for(var i=0, len=classes.length; i<len; i++){
				if(!classes[i].match(regex)){
					classArray.push(classes[i]);
				}
			}
			$(this).attr('class', classArray.join(' '));
		});
	};
})(jQuery);


$(document).ready(function() {

	// header menu colors app
  let paletteColors = [`$palette-lRed-color`, `$palette-dRed-color`, `$palette-lGreen-color`, `$palette-dGreen-color`, `$palette-lBlue-color`, `$palette-dBlue-color`, `$palette-orange-color`, `$palette-purple-color`]
//   let paletteColors = [`red`, `blue`, `green`, `purple`, `orange`, `pink`, `pink`, `pink`]



  let headerSubItemClassInput = function() {
    let randomPalletteNumber = (Math.floor(Math.random() * paletteColors.length) + 1)
    return(` header__sub-item-link_active${randomPalletteNumber}`)
  }

	let headerClassInput = function() {
		let randomPalletteNumber = (Math.floor(Math.random() * paletteColors.length) + 1)
		return(` header__item-link_active${randomPalletteNumber}`)
	}

	let footerClassInput = function() {
		let randomPalletteNumber = (Math.floor(Math.random() * paletteColors.length) + 1)
		return(` footer-categories__link_active${randomPalletteNumber}`)
	}

	let socialsClassInput = function() {
		let randomPalletteNumber = (Math.floor(Math.random() * paletteColors.length) + 1)
		return(` socials__item_active${randomPalletteNumber}`)
	}




  $('a.header__sub-item-link')
    .mouseenter(function(){
      var tempClass = headerSubItemClassInput()
      $(this).addClass(tempClass)
    }).mouseleave(function(){
      $(this).removeClassRegEx(/header\_\_sub\-item\-link\_active/)
    })

	$('a.header__nav-item-link')
    .mouseenter(function(){
      var tempClass = headerClassInput()
      $(this).addClass(tempClass)
    }).mouseleave(function(){
      $(this).removeClassRegEx(/header\_\_\item\-link\_active/)
	})

  $('a.footer-categories__link')
    .mouseenter(function(){
      var tempClass = footerClassInput()
      $(this).addClass(tempClass)
    }).mouseleave(function(){
      $(this).removeClassRegEx(/footer\-categories\_\_link\_active/)
		})
		
		$('a.socials__item')
    .mouseenter(function(){
      var tempClass = socialsClassInput()
      $(this).addClass(tempClass)
    }).mouseleave(function(){
      $(this).removeClassRegEx(/socials\_\_item\_active/)
    })

	


// media max 768px header hidden menu access
	$('li.header__main-nav-ul-container')
		.click(function() {
			$('ul.header__main-nav-ul').toggleClass('header__main-nav-ul_hidden');
		});

// feature scroll app
	let content1 = 'content1';
	let content2 = 'content2';
	let content3 = 'content3';
	let currentContent = content1;

	var interval = setInterval(function() {
	  exitLeft();
 	}, 5000);

 	function exitLeft() {
		if (currentContent == content1){
			$('.feature-scroll__slide-1').removeClass('fadeOutLeft fadeInLeft fadeInRight feature-scroll__slide_hidden').addClass('fadeOutRight');
			$('.feature-scroll__slide-2').removeClass('fadeOutLeft fadeOutRight fadeInRight feature-scroll__slide_hidden').addClass('fadeInLeft');
			currentContent = content2;
		}
		else if (currentContent == content2){
			$('.feature-scroll__slide-2').removeClass('fadeOutLeft fadeInLeft fadeInRight feature-scroll__slide_hidden').addClass('fadeOutRight');
			$('.feature-scroll__slide-3').removeClass('fadeOutLeft fadeOutRight fadeInRight feature-scroll__slide_hidden').addClass('fadeInLeft');
			currentContent = content3;
		}
		else if (currentContent == content3){
			$('.feature-scroll__slide-3').removeClass('fadeOutLeft fadeInLeft fadeInRight feature-scroll__slide_hidden').addClass('fadeOutRight');
			$('.feature-scroll__slide-1').removeClass('fadeOutLeft fadeOutRight fadeInRight feature-scroll__slide_hidden').addClass('fadeInLeft');
			currentContent = content1;
		}
	}	

	function exitRight() {
		if (currentContent == content1){
			$('.feature-scroll__slide-1').removeClass('fadeOutRight fadeInLeft fadeInRight feature-scroll__slide_hidden').addClass('fadeOutLeft');
			$('.feature-scroll__slide-3').removeClass('fadeOutLeft fadeOutRight fadeInLeft feature-scroll__slide_hidden').addClass('fadeInRight');
			currentContent = content3;
		}
		else if (currentContent == content2){
			$('.feature-scroll__slide-2').removeClass('fadeOutRight fadeInLeft fadeInRight feature-scroll__slide_hidden').addClass('fadeOutLeft');
			$('.feature-scroll__slide-1').removeClass('fadeOutLeft fadeOutRight fadeInLeft feature-scroll__slide_hidden').addClass('fadeInRight');
			currentContent = content1;
		}
		else if (currentContent == content3){
			$('.feature-scroll__slide-3').removeClass('fadeOutRight fadeInLeft fadeInRight feature-scroll__slide_hidden').addClass('fadeOutLeft');
			$('.feature-scroll__slide-2').removeClass('fadeOutLeft fadeOutRight fadeInLeft feature-scroll__slide_hidden').addClass('fadeInRight');
			currentContent = content2;
		}
	}

 $('button.feature-scroll__button-left').click(function(){
	 clearInterval(interval);
	 exitRight();
	 interval = setInterval(function() {
	  exitLeft();
 }, 5000);
 })

 $('button.feature-scroll__button-right').click(function(){
	clearInterval(interval);
	 exitLeft();
	 interval = setInterval(function() {
	  exitLeft();
 }, 5000);
 })

 interval;



});
