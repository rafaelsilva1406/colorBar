$(document).ready(function() {
	$('input[name="color"]').colorBar({
		parentElAttr:{
			'class':'test1'
		},
		leftInnerElAttr:{'class':'test2'},
		rightInnerElAttr:{'class':'test3'},
		unOrderElAttr:{'class':'test4'},
		listElAttr:{'class':'test5'},
		inputElAttr:{'class':'test6'},
		buttonElAttr:{'class':'test7'},
		colorArr:['#ffffff','#000000','#222222','#dddddd'],
		buttonText:'Verify Color',
		position:'top'
	});
});