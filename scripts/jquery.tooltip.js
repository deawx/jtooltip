/*
	bgColor: whiteGloss, blackGloss, greenGloss, azureGloss, redGloss, pinkGloss, brownGloss
*/
(function ($) {
	// FUNCTIONS
	function setBg(bg, tt, bh, mh, sh) {
	    if (bg == "whiteGloss" ||
			bg == "blackGloss" ||
			bg == "greenGloss" ||
			bg == "azureGloss" ||
			bg == "redGloss" ||
			bg == "pinkGloss" ||
			bg == "brownGloss") {
	        tt.addClass(bg);
	        bh.addClass(bg);
	        mh.addClass(bg);
	        sh.addClass(bg);
	    }
	    else {
	        tt.css('background-color', bg);
	        bh.css('background-color', bg);
	        mh.css('background-color', bg);
	        sh.css('background-color', bg);
	    }
	}
	
	$.fn.tooltip = function (options) {
		var defaults = {
			text: "Tooltip plugin",
			bgColor: "whiteGloss"
		};

		var o = $.extend(defaults, options);

		return this.each(function () {
			var $e = $(this);
			$e.attr('title', '');
			
			$e.hover(function(){
				$('<div class="tooltip"></div>')
					.text(o.text)
					.appendTo('body')
					.css('top', (event.pageY + 55) + 'px')
					.css('left', (event.pageX + 55) + 'px')
                    .css('width', o.width)
					.fadeIn('slow');
				
				$('<div class="holderBig"></div>')
					.appendTo('body')
					.css('top', (event.pageY + 35) + 'px')
					.css('left', (event.pageX + 35) + 'px')
					.fadeIn('slow');

				$('<div class="holderMedium"></div>')
					.appendTo('body')
					.css('top', (event.pageY + 25) + 'px')
					.css('left', (event.pageX + 25) + 'px')
					.fadeIn('slow');

			    $('<div class="holderSmall"></div>')
					.appendTo('body')
					.css('top', (event.pageY + 17) + 'px')
					.css('left', (event.pageX + 17) + 'px')
					.fadeIn('slow');
				
			    setBg(o.bgColor, $('.tooltip'), $('.holderBig'), $('.holderMedium'), $('.holderSmall'));
			}, function() {
				$('.tooltip, .holderBig, .holderMedium, .holderSmall').fadeOut('fast', function(){
					$(this).remove();
				});
			}).mousemove(function(){
				$('.tooltip')
					.css('top', (event.pageY + 55) + 'px')
					.css('left', (event.pageX + 55) + 'px');
				
				$('.holderBig')
					.css('top', (event.pageY + 35) + 'px')
					.css('left', (event.pageX + 35) + 'px');

				$('.holderMedium')
					.css('top', (event.pageY + 25) + 'px')
					.css('left', (event.pageX + 25) + 'px');

				$('.holderSmall')
					.css('top', (event.pageY + 17) + 'px')
					.css('left', (event.pageX + 17) + 'px');
			});
		});
   }
})(jQuery);