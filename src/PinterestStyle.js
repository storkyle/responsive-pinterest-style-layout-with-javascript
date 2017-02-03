/*
* responsive-pinterest-style-layout-with-javascript
*
* This Object was defined with 5 parameters:
* 	- column_count: the maximun number of column available
*	- column_width: width of column
*	- space: distance between two columns
*	- container: id (or class name) of container tag
*	- pin_tag: class name of article tags
* Author: Storky Le
*/


class PinterestStyle{
	constructor(input){
		this.column_count = input.column_count;
		this.column_width = input.column_width;
		this.space = input.space;
		this.container = $(input.container);
		this.list_item = $(input.pin_tag);

		this.list_item.css("width", this.column_width + "px");
		this.ChangeColumn();
	}

	calCol() {
	    var _numCol = Math.floor($(window).width()/(this.column_width + this.space));
	    if(_numCol < this.column_count){
	        return _numCol;
	    }
	    else{
	        return this.column_count;
	    }
	}

	changeCol(){
		var _cWidth = this.column_width;
	    var _space = this.space;
	    var _count = 0;
	    var _nCol = this.calCol();
	    var _styles;
	    var _heightCol = new Array();
	    for(var i=0; i< this.column_count; i++){
	        _heightCol[i] = 0;
	    }
	    

	    this.container.css("margin-left", (($(window).width() - (_nCol * (_cWidth + _space) - _space)) / 2) + "px");

	    this.list_item.each(function(){
	        _styles = {
	            left: ((_count % _nCol) * (_cWidth + _space)) + "px",
	            position: 'absolute',
	            top: _heightCol[_count % _nCol] + "px"
	        }
	        $(this).css(_styles);

	        _heightCol[_count % _nCol] += $(this).height() + _space;
	    	_count++;
	    });
	    var max_height = _heightCol[0];
	    for(var i=1; i< this.column_count; i++){
	        if(max_height < _heightCol[i]){
	        	max_height = _heightCol[i];
	        }
	    }
	    this.container.css("height", max_height + "px");
	}

	ChangeColumn(){
		$(window).on('load',(e)=>{
			var _styles = {
				'margin-left': '0'
			,	'margin-right': '0'
			,	'padding': '0px'
			,	'position': 'relative'
			}
			this.container.css(_styles);
		    this.changeCol();
		});

		$(window).on('resize',(e)=>{
		    this.changeCol();
		});
	}
}

// Create an object PinterestStyle
// var pinStyle = new PinterestStyle({
// 	column_count: 4
// ,	column_width: 250
// ,	space: 14
// , 	container: '#main-content'
// ,	pin_tag: '._tag'
// });