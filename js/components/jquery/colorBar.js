/**
* @file Working with input
* @author Rafael Silva
* @version 0.1
*/

(function ($){
	function colorBarException(message) {
		return "colorBar API Exception" + message;
	}

	$.fn.colorBar = function(options){
		var $this = $(this),
			p = document.createElement('div'),
			lc = document.createElement('div'),
			rc = document.createElement('div'),
			cb = document.createElement('ul'),
			btn = document.createElement('button');

		//check
		if(!$.isEmptyObject(options)){
			if($.isEmptyObject(options.parentEl)){
				//create api defaults
			}else{

			}
		}else{
			//set defaults
			var apiSettings = $.extend({

			},options);
		}

		$this.wrap($(p));
		$this.wrap($(lc));
		console.log(cb);
		$(cb).insertBefore($this);
		$(rc).insertAfter($this.parent());
		$this.parent().parent().find('div:nth-child(2)').prepend($(btn));
		return $this;
	};
}(jQuery));