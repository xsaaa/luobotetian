$(function(){
	$(window).scroll(function(event){
				if($(this).scrollTop() > 500){
					//吸顶效果
					$('.nav01').css('background','rgba(0,0,0,0.9)');
				}else{
					$('.nav01').css('background','rgba(0,0,0,0.0)');
				}
				//回到顶部显示效果
				if($(this).scrollTop()>600){
					$('.top').css('display','block');
				}else{
					$('.top').css('display','none');
				}
			
			})
	
	//回到顶部效果
	$('.top').click(function(){
		$('html,body').animate({ 'scrollTop': '0' }, 500);
//		alert('来啦，老弟');
	})
		$('.down').click(function(){
//		console.log('lalal');
		$('html,body').animate({'scrollTop':'700'},500);
	})
})
