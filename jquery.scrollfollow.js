(function($, window, document, undefined) {
	var $window = $(window);
	$.fn.scrollfollow = function(options) {
		var elements = this;
		var fixedTop = elements.offset().top;
		var defaultPosition = elements.css('position');
		var defaultTop = elements.css('top');
		var action = function(){
			if(parseInt(fixedTop)<=parseInt($window.scrollTop())){
				elements.css({position:"fixed",top:"0px"});
			} else {
				elements.css({position:defaultPosition,top:defaultTop});
			}
		}
		$window.scroll(action);
		$window.resize(action);
	}
})(jQuery, window, document);
