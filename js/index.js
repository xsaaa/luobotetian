$(function(){
	$(window).scroll(function(event){
		  
//				console.log($('#a').offset().top);	
				if($(this).scrollTop() >$('#first').offset().top ){
					//吸顶效果
					$('.nav01').css('background','rgba(0,0,0,0.9)');
				}else{
					$('.nav01').css('background','rgba(0,0,0,0.0)');
				}
				//回到顶部显示效果
				if($(this).scrollTop()>$('#section-product').offset().top){
					$('.top').css('display','block');
				}else{
					$('.top').css('display','none');
				}
				
				//侧边栏的效果
				for(var j = 0;j<$('section').length;j++){
					if($(this).scrollTop()>$('section').eq(j).offset().top-100){
//						console.log(j);
						for(var x = 0;x<$('.sbox01').length;x++){
							$('.sbox01').eq(x).css("background-color","gray");
						}
						$('.sbox01').eq(j).css("background-color","lightseagreen");
						$('.a').eq(j).css("background-color","lightseagreen");
						$('.a').eq(j).siblings().css("background-color","gray");
						
					}
					
				}
				
				//图片淡入效果
//				if($(this).scrollTop()>$('.section-header').eq(0).offset().top-800){
////					console.log(11);
//					$('.section-header').eq(0).addClass('goDown');
//					$('.section-subheader').eq(0).addClass('goUp');
//				}
//				
//				if($(this).scrollTop()>$('#a').offset().top-600){
////					console.log(11);
//					$('#a').addClass('Left');
//					$('#b').addClass('Right');
//				}
//				if($(this).scrollTop()>$('#c').offset().top--800){
////					console.log(11);
//					$('#c').addClass('Left');
//					$('#d').addClass('Right');
//				}
			
		})
	
	//回到顶部效果
	$('.top').click(function(){
		$('html,body').animate({ 'scrollTop': '0' }, 500);
//		alert('来啦，老弟');
	})
	
	$('.sbox').click(function(){
		var i = $('.sbox').index(this);
//		console.log(i);
		$('html,body').animate({'scrollTop':$('section').eq(i).offset().top},1000);
	})
	
	$('.down').click(function(){
//		console.log('lalal');
		$('html,body').animate({'scrollTop':$('#section-product').offset().top},500);
	})

//	function change(){
//		 $('.down').animate({opacity:0},'slow').animate({opacity:1},'slow',change);
//		 $('.down span').eq(1).animate({opacity:0},'slow').animate({opacity:1},'slow',fn)
//	};
//	change();
})
