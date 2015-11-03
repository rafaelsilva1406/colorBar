/**
* @file Working with input
* @author Rafael Silva
* @version 0.1
* @Summary: API below creates markup template and add ability to attach attributes for further customization.
*/

(function ($){
	function colorBarException(message) {
		return "colorBar API Exception: " + message;
	}

	$.fn.colorBar = function(options){
		var $this = $(this), //store instance input locally
			p = document.createElement('div'), //parent div
			lc = document.createElement('div'), //left child div
			rc = document.createElement('div'), //right child div
			cb = document.createElement('ul'), //colorBar el
			btn = document.createElement('button'), //button
			coutColors = 0; //keep count of colors

		//check if object not empty
		if(!$.isEmptyObject(options)){
			//attach attributes
			if(!$.isEmptyObject(options.inputElAttr)){
				$this.prop(options.inputElAttr);
			}

			//attach attributes
			if(!$.isEmptyObject(options.parentElAttr)){
				$(p).prop(options.parentElAttr);
			}

			//attach attributes
			if(!$.isEmptyObject(options.leftInnerElAttr)){
				$(lc).prop(options.leftInnerElAttr);
			}

			//attach attributes
			if(!$.isEmptyObject(options.rightInnerElAttr)){
				$(rc).prop(options.rightInnerElAttr);
			}

			//attach attributes
			if(!$.isEmptyObject(options.unOrderElAttr)){
				$(cb).prop(options.unOrderElAttr);
			}

			//attach attributes
			if(!$.isEmptyObject(options.buttonElAttr)){
				$(btn).prop(options.buttonElAttr);
			}

			//attach text node
			if(!$.isEmptyObject(options.buttonText)){
				var btnText = document.createTextNode(options.buttonText);
				btn.appendChild(btnText);
			}else{
				//throw ex empty string name for button
				throw new Error(colorBarException('Must pass string name for buttton'));
			}

			//build markup
			$this.wrap($(p));
			$this.wrap($(lc));
			$(rc).insertAfter($this.parent());
			$this.parent().parent().find('div:nth-child(2)').prepend($(btn));

			//set ColorBar position depending on value
			if(!$.isEmptyObject(options.position)){
				switch($.trim(options.position).toLowerCase()){
					case 'top'://set list on top of input
						$(cb).insertBefore($this);
						break;
					case 'bottom'://set list below input
						$(cb).insertAfter($this);
						break;
				}
			}else{
				//throw ex empty string name for button
				throw new Error(colorBarException('Must pass position for unorder list'));
			}

			//set list of colors
			if(options.colorArr.length != 0){
				$.each(options.colorArr , function(i,v){//go through the list of color and do stufff
					coutColors++;//start counting array
					var li = document.createElement('li'),//create li for each item
						t = document.createTextNode(coutColors); //set count as text value
					li.style.backgroundColor = v;//set user value color as background
					//attach attributes
					if(!$.isEmptyObject(options.listElAttr)){
						$(li).prop(options.listElAttr);
					}
					$(li).addClass("colorBarHex");//add class so API can find later and attach listener
					li.setAttribute("data-hex-value",v);
					li.appendChild(t);//append text to li
					cb.appendChild(li);//append li to ul
				});
			}else{
				//throw ex empty list
				throw new Error(colorBarException('Color values must be empty'));
			}

			//hide colorBar after markup is build
			cb.style.display = 'none';

			//add event to list
			$(document).on('click touch','.colorBarHex',function(){
				var $thisChildEv = $(this),//instance current ele
					hexV = $thisChildEv.attr("data-hex-value"); //capture current hex value
				$this.prop({
					'value':hexV,
					'placeholder':hexV,
				});//attach value to input
				cb.style.display = 'none';//hide toolbar
				return false;
			});

			//add event on click enable colorBar
			$(document).on('click touch',$(btn),function(){
				cb.style.display = 'block';
				return false;
			});
			$this.prop('disabled',true);//disable input
		}else{
			//throw ex params options can not be empty
			throw new Error(colorBarException('Please look at API document some params must be passed to have API work properly'));
		}

		return $this;
	};
}(jQuery));