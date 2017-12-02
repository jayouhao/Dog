$(function(){
	$('.tophe li .tophey').click(function(){	
		$('#shoye').show();
		$('#pinzo,#yongg,#huli,#meir,#liuyan').hide();		
	})
	$('.tophe li .tophee').click(function(){
		$('#pinzo').show();
		$('#yongg,#shoye,#huli,#meir,#liuyan').hide();
	})
	$('.tophe li .tophef').click(function(){
		$('#shoye,#pinzo,#huli,#meir,#liuyan').hide();
		$('#yongg').show();
	})
	$('.tophe li .topheg').click(function(){
		$('#shoye,#pinzo,#yongg,#meir,#liuyan').hide();
		$('#huli').show();
	})	
	$('.tophe li .topheh').click(function(){
		$('#shoye,#pinzo,#yongg,#huli,#liuyan').hide();
		$('#meir').show();
	})	
	$('.tophe li .tophei').click(function(){
		$('#shoye,#pinzo,#yongg,#huli,#meir').hide();
		$('#liuyan').show();
		var fa=parseInt(Math.random()*dj.length);
		t=fa;
		$('#liuyan .liuyand .lyd img').attr('src',dj[fa])
	})
	
	$('.tophe li').click(function(){
		var b=$(this).index();
		hj=b;
		$('.tophe li').eq(b).stop().css({'background':'#ffffff'}).siblings().stop().css({'background':'none'});
		$('.tophe li p').eq(b).stop().css({'color':'black'});
		$('.tophe li p').eq(b-1).css({'color':'#fff'});
		$('.tophe li p').eq(b-2).css({'color':'#fff'});
		$('.tophe li p').eq(b-3).css({'color':'#fff'});
		$('.tophe li p').eq(b-4).css({'color':'#fff'});
		$('.tophe li p').eq(b-5).css({'color':'#fff'});
		$('.tophe li p').eq(b+1).css({'color':'#fff'});
		$('.tophe li p').eq(b+2).css({'color':'#fff'});
		$('.tophe li p').eq(b+3).css({'color':'#fff'});
		$('.tophe li p').eq(b+4).css({'color':'#fff'});
		$('.tophe li p').eq(b+5).css({'color':'#fff'});
		$('.tophe li p').eq(b+6).css({'color':'#fff'});
	});	
	var hj=0;
	$('.tophe li').hover(function(){
		var c=$(this).index();
		$('.tophe li').eq(c).css({'background':'#ffffff'});
		$('.tophe li p').eq(c).css({'color':'black'});
	},function(){
		$('.tophe li').eq(hj).stop().css({'background':'#ffffff'}).children('p').css({'color':'black'});
//		$('.tophe li p').eq(hj).stop().css({'color':'black'});		
		$('.tophe li').eq(hj-1).css({'background':'none'}).children('p').css({'color':'black'});
		$('.tophe li p').eq(hj-1).css({'color':'#fff'});
		$('.tophe li').eq(hj-2).css({'backgrou                    nd':'none'});
		$('.tophe li p').eq(hj-2).css({'color':'#fff'});
		$('.tophe li').eq(hj-3).css({'background':'none'});
		$('.tophe li p').eq(hj-3).css({'color':'#fff'});
		$('.tophe li').eq(hj-4).css({'background':'none'});
		$('.tophe li p').eq(hj-4).css({'color':'#fff'});
		$('.tophe li').eq(hj-5).css({'background':'none'});
		$('.tophe li p').eq(hj-5).css({'color':'#fff'});
		
		$('.tophe li').eq(hj+1).css({'background':'none'});
		$('.tophe li p').eq(hj+1).css({'color':'#fff'});
		$('.tophe li').eq(hj+2).css({'background':'none'});
		$('.tophe li p').eq(hj+2).css({'color':'#fff'});
		$('.tophe li').eq(hj+3).css({'background':'none'});
		$('.tophe li p').eq(hj+3).css({'color':'#fff'});
		$('.tophe li').eq(hj+4).css({'background':'none'});
		$('.tophe li p').eq(hj+4).css({'color':'#fff'});
		$('.tophe li').eq(hj+5).css({'background':'none'});
		$('.tophe li p').eq(hj+5).css({'color':'#fff'});
	});

	
	var ming=['泰迪犬','泰迪犬','萨摩犬','金毛犬','拉布拉多犬','边境牧羊犬','阿拉斯加犬','哈士奇'];
	var neir=[
		'泰迪狗是非常受欢迎的体型较小的宠物伴侣。欢快，好动，聪明的特点让很多女士们选择泰迪狗做宠物。',
		'泰迪狗是非常受欢迎的体型较小的宠物伴侣。欢快，好动，聪明的特点让很多女士们选择泰迪狗做宠物。',
		'摩耶德犬有着非常引人注目的外表：雪白的被毛，微笑的脸和黑色而聪明的眼睛，是现在的犬中最漂亮的一种。摩耶德犬天生聪明，对主人绝对忠诚。',
		'金毛比较耐寒，适合家居生活，贪玩、活跃而不爱吵闹，非常容易训练，容易与别的犬相处，是初次养狗人的首选。',
		'拉布拉多犬性温和，体大，爱贪吃，行动稳健，眼神柔情。在众狗狗里；拉布拉多犬是个很温顺、乖巧的孩子。',
		'边境牧羊犬是世界上智商最高的犬，教它学习一个新知识不需要超过5次它就能完成，在主人的教导下也能学会很多东西，不过它会尽可能地与你斗智斗勇。',
		'一般认为阿拉斯加雪橇犬相对于哈士奇更加敦厚和稳重，阿拉斯加雪橇犬忠实，能力强。是优秀的警备犬和工作犬，也是富有感情的家庭犬。',
		'最大的优势莫过于它漂亮冷酷的外型，几乎每个见过小哈的人，都会发自内心的喜爱，也许说明了人类对浪的一种虏获心理吧。'
	];
	var num=num;
	var b=$(this).index();
	$('#shoye .topa .topa1 li').mouseover(function(){
		var b=$(this).index();
		$('#shoye .topa .topa1 li p').eq(b-1).stop().fadeIn()
	});
	$('#shoye .topa .topa1 li').mouseout(function(){
		$('#shoye .topa .topa1 li p').stop().fadeOut();
	});
	
	//进入动物详情
	
	var dian=$('#shoye .topa .topa1 li').click(function(){
		var h=$(this).index();	
		num=h;
		if(h==1){
			$('#tan .tanleft').hide();;	
		}else{
			$('#tan .tanleft').show();
		};
		if(h==7){
			$('#tan .tanright').hide();	
		}else{
			$('#tan .tanright').show();
		};
		$('#tan').fadeIn();
		$('#tan .tanda .tando').stop().css({'left':-165*num+'px'},100);
		$('#tan .tanda .tando li').eq(num).stop().css({'width':'451px','height':'357px','margin-top':'-226px'}).siblings().css({'width':'165px','height':'131px','margin-top':'0px'});
		$('#tan .tanda .tando li img').eq(num-1).stop().css({'width':'451px','height':'357px'})
  	  	$('#tan .tanda .tando li img').eq(num-2).css({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num+2).css({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num-3).css({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num+3).css({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num-4).css({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num+4).css({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num-5).css({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num+5).css({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num-6).css({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num+6).css({'width':'165px','height':'131px'});
		if(num==5){
			$('#tan .tanda .tando .threen-li').stop().css({'width':'921px','height':'357px','margin-top':'-226px'});
			$('#tan .tanda .tando .threen-img').stop().css({'width':'921px','height':'357px'});
			$('#tan .tanda .tando').stop().css({'left':-182*6+'px'});
		}else{
			$('#tan .tanda .tando .threen-li').stop().css({'width':'256px','height':'131px','margin-top':'0px'});
			$('#tan .tanda .tando .threen-img').stop().css({'width':'256px','height':'131px'});
		};
		if(num==6){
			$('#tan .tanda .tando').stop().css({'left':-159*7+'px'});
		};
		if(num==7){
			$('#tan .tanda .tando').stop().css({'left':-161*8+'px'});
		};
		$('.tanming div .twol').html(
			"<span>"+(ming[num])+"</span>"			
		);
		$('.tanming p').html(
			"<p>"+(neir[num])+"</p>"
		);
		$('.tanming .twoo').html(
			"<span>"+(num)+"</span>"	
		);
	});
	
	$('#tan .tanx').click(function(){

		$('#tan').fadeOut();
	});
	//左边点击判断事件
		var timerl
		var lef=function left(){
		 num=num-1;
		if(num<0){
			num=0;
			
		}
		//箭头判断
		if(num==1){
			$('#tan .tanleft').hide();	
		}else{
			$('#tan .tanright').show();
		};
		
		//修改html的内容
		$('.tanming div .twol').html(
			"<span>"+(ming[num])+"</span>"			
		);
		$('.tanming p').html(
			"<p>"+(neir[num])+"</p>"
		);
		$('.tanming .twoo').html(
			"<span>"+(num)+"</span>"	
		);
			
		//图片变化
		$('#tan .tanda .tando').stop().animate({'left':-165*num+'px'});
		$('#tan .tanda .tando li').eq(num).stop().animate({'width':'451px','height':'357px','margin-top':'-226px'}).siblings().animate({'width':'165px','height':'131px','margin-top':'0px'});
		$('#tan .tanda .tando li img').eq(num-1).stop().animate({'width':'451px','height':'357px'})
		$('#tan .tanda .tando li img').eq(num).animate({'width':'165px','height':'131px'});
		//第5张大图片变化
		if(num==5){
			$('#tan .tanda .tando .threen-li').stop().animate({'width':'921px','height':'357px','margin-top':'-226px'});
			$('#tan .tanda .tando .threen-img').stop().animate({'width':'921px','height':'357px'});
			$('#tan .tanda .tando').stop().animate({'left':-182*6+'px'})
		}else{
			$('#tan .tanda .tando .threen-li').stop().animate({'width':'256px','height':'131px','margin-top':'0px'});
			$('#tan .tanda .tando .threen-img').stop().animate({'width':'256px','height':'131px'});
		};
		if(num==6){
			$('#tan .tanda .tando').stop().animate({'left':-159*7+'px'});
		}
		if(num==7){
			$('#tan .tanda .tando').stop().animate({'left':-161*8+'px'});
		}
		$('#tan .tanleft').unbind('click');
		timerl=setTimeout(function(){
			$('#tan .tanleft').click(lef)
		},time);
	};
	$('#tan .tanleft').click(lef)
	
	//右边点击判断事件
	var tiemer=""
	var time=400;
	var fun=function ick(){			 
		 num=num+1;
		if(num>7){
			num=7;    
		}
		//箭头判断
		if(num==7){
			$('#tan .tanright').hide();	
		}else{
			$('#tan .tanleft').show();
		};
		//修改html的内容
		$('.tanming div .twol').html(
			"<span>"+(ming[num])+"</span>"
		);
		$('.tanming p').html(
			"<p>"+(neir[num])+"</p>"
		);
		$('.tanming .twoo').html(
					"<span>"+(num)+"</span>"	
		);		
		//图片变化	
		$('#tan .tanda .tando ').stop().animate({'left':-165*num+'px'});		
		$('#tan .tanda .tando li').eq(num).stop().animate({'width':'451px','height':'357px','margin-top':'-226px'}).siblings().animate({'width':'165px','height':'131px','margin-top':'0px'});
		$('#tan .tanda .tando li img').eq(num-1).stop().animate({'width':'451px','height':'357px'});
		$('#tan .tanda .tando li img').eq(num-2).animate({'width':'165px','height':'131px'});
		if(num==5){
			$('#tan .tanda .tando .threen-li').stop().animate({'width':'921px','height':'357px','margin-top':'-226px'});
			$('#tan .tanda .tando .threen-img').stop().animate({'width':'921px','height':'357px'});
			$('#tan .tanda .tando').stop().animate({'left':-182*6+'px'})
		}else{
			$('#tan .tanda .tando .threen-li').stop().animate({'width':'256px','height':'131px','margin-top':'0px'});
			$('#tan .tanda .tando .threen-img').stop().animate({'width':'256px','height':'131px'});
		};
		if(num==6){
			$('#tan .tanda .tando').stop().animate({'left':-159*7+'px'});
		}
		if(num==7){
			$('#tan .tanda .tando').stop().animate({'left':-161*8+'px'});
		}
    $('#tan .tanright').unbind("click");
    tiemer = setTimeout(function(){
        $('#tan .tanright').click(fun);
    },time);
	};
	$('#tan .tanright').click(fun);
    
    //点击图片
    var timert=""
    var fdjf=function Djsj(){
    	var a=$(this).index();
    		num=a;
    		
    	var bi='131px'
		var f=$('#tan .tanda .tando li').eq(a).css('height');
		console.log(f)
		if(f!=bi){
				$('#tan .tando li').onclick(fdjf);
		}

		if(num==1){
			$('#tan .tanleft').hide();
		}else{
			$('#tan .tanleft').show();
		};
		if(num==7){
			$('#tan .tanright').hide();
		}else{
			$('#tan .tanright').show();
		}
		
		//修改html的内容
		$('.tanming div .twol').html(
			"<span>"+(ming[num])+"</span>"
		);
		$('.tanming p').html(
			"<p>"+(neir[num])+"</p>"
		);
		$('.tanming .twoo').html(
					"<span>"+(num)+"</span>"	
		);
    	$('#tan .tanda .tando').animate({'left':-165*a+'px'});   	
    	$('#tan .tanda .tando li').eq(num).stop().animate({'width':'451px','height':'357px','margin-top':'-226px'}).siblings()
    	.stop().animate({'width':'165px','height':'131px','margin-top':'0px'});
		$('#tan .tanda .tando li img').eq(num-1).stop().animate({'width':'451px','height':'357px'});
		$('#tan .tanda .tando li img').eq(num).stop().animate({'width':'165px','height':'131px'})
  	  	$('#tan .tanda .tando li img').eq(num-2).animate({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num+2).animate({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num-3).animate({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num+3).animate({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num-4).animate({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num+4).animate({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num-5).animate({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num+5).animate({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num-6).animate({'width':'165px','height':'131px'});
  	  	$('#tan .tanda .tando li img').eq(num+6).animate({'width':'165px','height':'131px'});
		if(num==1||num==2){
			$('#tan .tanda .tando .threen-li').stop().css({'width':'256px','height':'131px','margin-top':'0px'});
			$('#tan .tanda .tando .threen-img').stop().css({'width':'256px','height':'131px'});
		}	
		
		if(num==5){
			$('#tan .tanda .tando .threen-li').stop().animate({'width':'921px','height':'357px','margin-top':'-226px'});
			$('#tan .tanda .tando .threen-img').stop().animate({'width':'921px','height':'357px'});
			$('#tan .tanda .tando').stop().animate({'left':-182*6+'px'})
		}else{
			$('#tan .tanda .tando .threen-li').stop().animate({'width':'256px','height':'131px','margin-top':'0px'});
			$('#tan .tanda .tando .threen-img').stop().animate({'width':'256px','height':'131px'});
		};
		if(num==6){
			$('#tan .tanda .tando').stop().animate({'left':-159*7+'px'});
		}
		if(num==7){
			$('#tan .tanda .tando').stop().animate({'left':-161*8+'px'});
		}	 
	   $('#tan .tando li').unbind('click');
	   timert = setTimeout(function(){
	   	$('#tan .tando li').click(fdjf);
	   },time)
   };
   	$('#tan .tando li').click(fdjf);
   	
   	$('.sho-we ul li .wey').hover(function(){
   		$('.sho-we ul li .wey a').css('color','#6dc9cd')
   		$('.sho-we ul li .wey span').css('color','#6dc9cd');
   	},function(){
   		$('.sho-we ul li .wey a').css('color','')
   		$('.sho-we ul li .wey span').css('color','');  		
   	});
   	
   	$('.sho-we ul li .weyy').hover(function(){
   		$('.sho-we ul li .weyy a').css('color','#6dc9cd')
   		$('.sho-we ul li .weyy span').css('color','#6dc9cd');
   	},function(){
   		$('.sho-we ul li .weyy a').css('color','')
   		$('.sho-we ul li .weyy span').css('color','');  		
   	});
   	
   	$('.sho-we ul li .weyyy').hover(function(){
   		$('.sho-we ul li .weyyy a').css('color','#6dc9cd')
   		$('.sho-we ul li .weyyy span').css('color','#6dc9cd');
   	},function(){
   		$('.sho-we ul li .weyyy a').css('color','')
   		$('.sho-we ul li .weyyy span').css('color','');  		
   	});
   	
   	var nm=-1249;
 	var timee=nm; 	
 	function lunbo(){
 		
 		timee=setInterval(function(){		
 		nm=nm+2;
 		if(nm>-7){
 			nm=-1249 
 		}
 		$('.sho-mei .meia .meib').css({'left': nm+'px'});
 		},30);
 	}
 	lunbo();
	$('.sho-mei .meia .meib li').hover(function(){
		clearInterval(timee);
		$(this).siblings().stop().fadeTo(300,0.6);
	},function(){
		lunbo();
	$('.sho-mei .meia .meib li').stop().fadeTo(300,1);	
	})


	//宠物品种
	var timelm;
	//鼠标移入图片后的样式
	$('#pinzo .pina .pin-b li').mouseover(function(){
		var de=$(this).index();	
		$('#pinzo .pina .pin-b li span').eq(de).stop().fadeIn(260);
	})
	$('#pinzo .pina .pin-b li').mouseout(function(){
		$('#pinzo .pina .pin-b span').stop().fadeOut(260);
	})
	//进入动物详情
	$('#pinzo .pina .pin-b li').click(function(){
		var a=$(this).index();
		inde=a;
		d=a;
		$('#pinzo #pindan1').show();
		$('#pinzo #pindan1 .pindana .pindanul').stop().css({'left':-149*d+'px'});
		$('#pinzo #pindan1 .pindana .pindanul li').stop().eq(d).stop().css({'width':'451px','height':'357px','margin-top':'-244px'}).siblings()
			.stop().stop().css({'width':'143px','height':'112px','margin-top':'0px'});
		$('#pinzo #pindan1 .pindanul li img').eq(d).stop().css({'width':'451px'});
		$('#pinzo #pindan1 .pindanul li img').eq(d-1).css({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(d+1).css({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(d-2).css({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(d+2).css({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(d-3).css({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(d+3).css({'width':'143px'});
		if(d==0){
			$('#pinzo #pindan1 .pinleft').hide();
			}else{
				$('#pinzo #pindan1 .pinleft').show()
				};
		if(d==3){
			$('#pinzo #pindan1 .pinright').hide();
			}else{
				$('#pinzo #pindan1 .pinright').show()
			}
		//修改html的内容
		$('#pinzo #pindan1 .pindanw .danw-b').html('<span>'+(inde+1)+'</span>');
		$('#pinzo #pindan1 .pindanw .danw-a').html('<span>'+(p[inde])+'</span>');
		$('#pinzo #pindan1 .pindanw .danw-d').html('<p>'+pl[inde]+'</p>');	
	})
	
	
	//隐藏
	$('#pinzo #pindan1 .pinx').click(function(){
		$('#pindan1').hide();
	})
	var inde=0;
	var time1
	//左边点击事件
	var pin=function pinz(){	
		inde=inde-1;
		if(inde<0){
			inde=0
		};
		if(inde==0){
			$('#pinzo #pindan1 .pinleft').hide()
			}else{
				$('#pinzo #pindan1 .pinright').show()
				};
		$('#pinzo #pindan1 .pindana .pindanul').stop().animate({'left':-149*inde+'px'});		
		$('#pinzo #pindan1 .pindana .pindanul li').stop().eq(inde).animate({'width':'451px','height':'357px','margin-top':'-244px'}).siblings()
			.stop().animate({'width':'143px','height':'112px','margin-top':'0px'});
		$('#pinzo #pindan1 .pindanul li img').stop().eq(inde).animate({'width':'451px'});
		$('#pinzo #pindan1 .pindanul li img').eq(inde-1).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(inde-2).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(inde-3).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(inde+1).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(inde+2).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(inde+3).animate({'width':'143px'});
		//修改html的内容
		$('#pinzo #pindan1 .pindanw .danw-b').html('<span>'+(inde+1)+'</span>');
		$('#pinzo #pindan1 .pindanw .danw-a').html('<span>'+(p[inde])+'</span>');
		$('#pinzo #pindan1 .pindanw .danw-d').html('<p>'+pl[inde]+'</p>');
		
	$('#pinzo #pindan1 .pinleft').unbind('click');
	time1=setTimeout(function(){
		$('#pinzo #pindan1 .pinleft').click(pin);
	},time)
	}
	$('#pinzo #pindan1 .pinleft').click(pin);

	var time2
	//右边点击事件
	var pina=function pinb(){	
		inde=inde+1;
		if(inde>3){
			inde=3
		};
		if(inde==3){
			$('#pinzo #pindan1 .pinright').hide()
			}else{
				$('#pinzo #pindan1 .pinleft').show()
				};
		$('#pinzo #pindan1 .pindana .pindanul').stop().animate({'left':-149*inde+'px'});		
		$('#pinzo #pindan1 .pindana .pindanul li').stop().eq(inde).animate({'width':'451px','height':'357px','margin-top':'-244px'}).siblings()
			.stop().animate({'width':'143px','height':'112px','margin-top':'0px'});
		$('#pinzo #pindan1 .pindanul li img').stop().eq(inde).animate({'width':'451px'});
		$('#pinzo #pindan1 .pindanul li img').eq(inde-1).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(inde-2).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(inde-3).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(inde+1).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(inde+2).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(inde+3).animate({'width':'143px'});
		//修改html的内容
		$('#pinzo #pindan1 .pindanw .danw-b').html('<span>'+(inde+1)+'</span>');
		$('#pinzo #pindan1 .pindanw .danw-a').html('<span>'+(p[inde])+'</span>');
		$('#pinzo #pindan1 .pindanw .danw-d').html('<p>'+pl[inde]+'</p>');
		
	$('#pinzo #pindan1 .pinright').unbind('click');
	time2=setTimeout(function(){
		$('#pinzo #pindan1 .pinright').click(pina);
	},time)
	}
	$('#pinzo #pindan1 .pinright').click(pina);
	var time3
	//点击li放大缩小事件
	var pind=function pinl(){
		var d=$(this).index();
		inde=d;
		var dl=$('#pinzo #pindan1 .pindana .pindanul li').eq(d).css('height');
		console.log(dl);
		var dk='112px';		
			if(dl!=dk){
				$('#pinzo #pindan1 .pindana .pindanul li').onclick(pind);
			}
		$('#pinzo #pindan1 .pindana .pindanul').stop().animate({'left':-149*d+'px'});
		$('#pinzo #pindan1 .pindana .pindanul li').stop().eq(d).stop().animate({'width':'451px','height':'357px','margin-top':'-244px'}).siblings()
			.stop().stop().animate({'width':'143px','height':'112px','margin-top':'0px'});
		$('#pinzo #pindan1 .pindanul li img').eq(d).stop().animate({'width':'451px'});
		$('#pinzo #pindan1 .pindanul li img').eq(d-1).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(d+1).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(d-2).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(d+2).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(d-3).animate({'width':'143px'});
		$('#pinzo #pindan1 .pindanul li img').eq(d+3).animate({'width':'143px'});
		if(d==0){
			$('#pinzo #pindan1 .pinleft').hide();
			}else{
				$('#pinzo #pindan1 .pinleft').show()
				};
		if(d==3){
			$('#pinzo #pindan1 .pinright').hide();
			}else{
				$('#pinzo #pindan1 .pinright').show()
			}
		//修改html的内容
		$('#pinzo #pindan1 .pindanw .danw-b').html('<span>'+(inde+1)+'</span>');
		$('#pinzo #pindan1 .pindanw .danw-a').html('<span>'+(p[inde])+'</span>');
		$('#pinzo #pindan1 .pindanw .danw-d').html('<p>'+pl[inde]+'</p>');
	$('#pinzo #pindan1 .pindana .pindanul li').unbind('click');
	time3=setTimeout(function(){
		$('#pinzo #pindan1 .pindana .pindanul li').click(pind);
	},time)
	}
	$('#pinzo #pindan1 .pindana .pindanul li').click(pind);


	//切换文字
	var p=['泰迪','博美','吉娃娃','比熊'];
	var pl=[
			'泰迪狗是非常受欢迎的体型较小的宠物伴侣。欢快，好动，聪明的特点让很多女士们选择泰迪狗做宠物。',
			'博美属小型犬种里最小型，有坚韧的意志，优雅，警惕，动作迅速，以匀称的体格和娇小的体型广受人们的喜爱。博美犬不仅是可爱的小型玩具犬，同时也具备大型犬的狩猎与防范本能，具有类似梗类犬的气质。',
			'吉娃娃属小型犬种里最小型，有坚韧的意志，优雅，警惕，动作迅速，以匀称的体格和娇小的体型广受人们的喜爱。吉娃娃犬不仅是可爱的小型玩具犬，同时也具备大型犬的狩猎与防范本能，具有类似梗类犬的气质。',
			'比熊犬颇有个性，天性活泼、爱好自由，能给主人带来无穷的乐趣。它柔软带卷的被毛需要修剪，以展示它美丽动人的黑眼睛及身体和头部的圆形特征。'
		]
	$('#pinzo .pinb ul li').mousemove(function(){
		var d=$(this).index();
		$('#pinzo .pinb ul li span').eq(d).stop().fadeIn(260).css({'display':'inline'});
	})
	$('#pinzo .pinb ul li').mouseout(function(){
		$('#pinzo .pinb ul li span').stop().fadeOut(260);
	});
	
	$('#pinzo .pinb1 ul li').mousemove(function(){
		var d=$(this).index();
		$('#pinzo .pinb1 ul li span').eq(d).stop().fadeIn(260).css({'display':'inline'});
	})
	$('#pinzo .pinb1 ul li').mouseout(function(){
		$('#pinzo .pinb1 ul li span').stop().fadeOut(260);
	})
	
	
	var ab=['萨摩','松狮','比格','边牧'];
	var ac=['摩耶德犬有着非常引人注目的外表：雪白的被毛，微笑的脸和黑色而聪明的眼睛，是现在的犬中最漂亮的一种。萨摩耶德犬天生聪明，对主人绝对忠诚。',
			'松狮犬，真正的名字是獢獢，松狮是进入到外国，又传回中国的名字。英文Chow Chow，常常简称为Chow，是一种非常古老的品种，可能因其头部酷似雄狮而得名。',
			'此犬种为狩猎犬中最小型，比格犬是世界著名的小猎兔犬，起源于英国，是英国贵族狩猎时驱赶猎物的小猎犬，一般成群活动又是群猎犬。比格犬性格活泼与人亲近没有攻击型而且比格犬智商在犬犬中是很高的。',
			'边境牧羊犬是世界上智商最高的犬，教他学习一个新知识不需要超过5次他就能完成，在主人的教导下也能学会很多东西，不过它会尽可能地与你斗智斗勇。'
	]
	
	//进入用户详情
	$('#pinzo .pinb .pin-d li').click(function(){
		var ad=$(this).index();
		ec=ad;
		e=ad;
		$('.pintan').fadeIn();
		$('.quan1').hide();
		$('.pintan .pintan-a ul').stop().css({'left':-150*ad+'px'});
		$('.pintan .pintan-a ul li').eq(ad).stop().css({'width':'451px','height':'357px','margin-top':'-245px'}).siblings()
		.stop().css({'width':'145px','height':'112px','margin-top':'0px'});
		$('.pintan .pintan-a ul li img').eq(ad).stop().css({'width':'451px','height':'357px'})
		$('.pintan .pintan-a ul li img').eq(ad-1).css({'width':'145px','height':'112px'});
		$('.pintan .pintan-a ul li img').eq(ad+1).css({'width':'145px','height':'112px'});
		$('.pintan .pintan-a ul li img').eq(ad-2).css({'width':'145px','height':'112px'});
		$('.pintan .pintan-a ul li img').eq(ad+2).css({'width':'145px','height':'112px'});
		$('.pintan .pintan-a ul li img').eq(ad-3).css({'width':'145px','height':'112px'});
		$('.pintan .pinzi .pinac').html('<span>'+(ab[ad])+'</span>');
		$('.pintan .pinzi .pinaa').html('<span>'+(ad+1)+'</span>');	
		$('.pintan .pinzi .pinab').html('<span>'+(ac[ad])+'</span>');	
	})	
		var timea
		var e=0;
	var tana=function tans(){
		e=e-1;
		if(e<0){
			e=0
		}
		$('.pintan .pintan-a ul').stop().animate({'left':-150*e+'px'});
		$('.pintan .pintan-a ul li').eq(e).stop().animate({'width':'451px','height':'357px','margin-top':'-245px'}).siblings()
		.stop().animate({'width':'145px','height':'112px','margin-top':'0px'});
		$('.pintan .pintan-a ul li img').eq(e).stop().animate({'width':'451px','height':'357px'})
		$('.pintan .pintan-a ul li img').eq(e+1).animate({'width':'145px','height':'112px'});
		$('.pintan .pinzi .pinac').html('<span>'+(ab[e])+'</span>');
		$('.pintan .pinzi .pinaa').html('<span>'+(e+1)+'</span>');	
		$('.pintan .pinzi .pinab').html('<span>'+(ac[e])+'</span>');		
		$('.pintan .pleft').unbind('click');
		timea=setTimeout(function(){
			$('.pintan .pleft').click(tana);
		},time)
	}
	$('.pintan .pleft').click(tana);


		var timeq
		var e=0;
	var tanq=function tank(){
		e=e+1;
		if(e>3){
			e=3
		}
		$('.pintan .pintan-a ul').stop().animate({'left':-150*e+'px'});
		$('.pintan .pintan-a ul li').eq(e).stop().animate({'width':'451px','height':'357px','margin-top':'-245px'}).siblings()
		.stop().animate({'width':'145px','height':'112px','margin-top':'0px'});
		$('.pintan .pintan-a ul li img').eq(e).stop().animate({'width':'451px','height':'357px'})
		$('.pintan .pintan-a ul li img').eq(e-1).animate({'width':'145px','height':'112px'});
		$('.pintan .pinzi .pinac').html('<span>'+(ab[e])+'</span>');
		$('.pintan .pinzi .pinaa').html('<span>'+(e+1)+'</span>');	
		$('.pintan .pinzi .pinab').html('<span>'+(ac[e])+'</span>');		
		$('.pintan .pright').unbind('click');
		timeq=setTimeout(function(){
			$('.pintan .pright').click(tanq);
		},time)
	}
	$('.pintan .pright').click(tanq);
	
	var timet
	var tanl=function tank(){ 
	var ec=$(this).index();
		e=ec
		$('.pintan .pintan-a ul').stop().animate({'left':-150*ec+'px'});
		$('.pintan .pintan-a ul li').eq(ec).stop().animate({'width':'451px','height':'357px','margin-top':'-245px'}).siblings()
		.stop().animate({'width':'145px','height':'112px','margin-top':'0px'});
		$('.pintan .pintan-a ul li img').eq(ec).stop().animate({'width':'451px','height':'357px'})
		$('.pintan .pintan-a ul li img').eq(ec-1).animate({'width':'145px','height':'112px'});
		$('.pintan .pintan-a ul li img').eq(ec+1).animate({'width':'145px','height':'112px'});
		$('.pintan .pintan-a ul li img').eq(ec-2).animate({'width':'145px','height':'112px'});
		$('.pintan .pintan-a ul li img').eq(ec+2).animate({'width':'145px','height':'112px'});
		$('.pintan .pintan-a ul li img').eq(ec-3).animate({'width':'145px','height':'112px'});
		$('.pintan .pintan-a ul li img').eq(ec+3).animate({'width':'145px','height':'112px'});
		$('.pintan .pinzi .pinac').html('<span>'+(ab[ec])+'</span>');
		$('.pintan .pinzi .pinaa').html('<span>'+(ec+1)+'</span>');	
		$('.pintan .pinzi .pinab').html('<span>'+(ac[ec])+'</span>');
	
		$('.pintan .pintan-a ul li').unbind('click');
		timet=setTimeout(function(){
			$('.pintan .pintan-a ul li').click(tanl);
		},time)
	}
	$('.pintan .pintan-a ul li').click(tanl);
	
	$('.pintan .pix').click(function(){
		$('.pintan').fadeOut();
		$('.quan1').show();
	})
	
	
//大型犬
	var ab1=['金毛','拉布拉多','阿拉斯加','秋田犬'];
	var ac1=['金毛比较耐寒，适合家居生活，贪玩、活跃而不爱吵闹，非常容易训练，容易与别的犬相处，是初次养狗人的首选。',
			'拉布拉多犬性温和，体大，爱贪吃，行动稳健，眼神柔情。在众狗狗里​拉布拉多犬是个很温顺、乖巧的孩子。',
			'一般认为阿拉斯加雪橇犬相对于哈士奇更加敦厚和稳重，阿拉斯加雪橇犬忠实，能力强。是优秀的警备犬和工作犬，也是富有感情的家庭犬。',
			'秋田犬具有惊人的智慧与学习能力。同时也具备艰苦耐劳的特征。对主人忠实，感情深厚，对陌生人有戒心，是优良的家庭守门犬。极易训练，是理想的工作犬，展示犬或家庭犬。'
	]

	
	//进入用户详情
	$('#pinzo .pinb1 .pin-d1 li').click(function(){
		var ad1=$(this).index();
		ec1=ad1;
		e1=ad1;
		$('.pintan1').fadeIn();
		$('.quan1').hide();
		$('.pintan1 .pintan-a1 ul').stop().css({'left':-150*ad1+'px'});
		$('.pintan1 .pintan-a1 ul li').eq(ad1).stop().css({'width':'451px','height':'357px','margin-top':'-245px'}).siblings()
		.stop().css({'width':'145px','height':'112px','margin-top':'0px'});
		$('.pintan1 .pintan-a1 ul li img').eq(ad1).stop().css({'width':'451px','height':'357px'})
		$('.pintan1 .pintan-a1 ul li img').eq(ad1-1).css({'width':'145px','height':'112px'});
		$('.pintan1 .pintan-a1 ul li img').eq(ad1+1).css({'width':'145px','height':'112px'});
		$('.pintan1 .pintan-a1 ul li img').eq(ad1-2).css({'width':'145px','height':'112px'});
		$('.pintan1 .pintan-a1 ul li img').eq(ad1+2).css({'width':'145px','height':'112px'});
		$('.pintan1 .pintan-a1 ul li img').eq(ad1-3).css({'width':'145px','height':'112px'});
		$('.pintan1 .pinzi1 .pinac1').html('<span>'+(ab1[ad1])+'</span>');
		$('.pintan1 .pinzi1 .pinaa1').html('<span>'+(ad1+1)+'</span>');	
		$('.pintan1 .pinzi1 .pinab1').html('<span>'+(ac1[ad1])+'</span>');	
	})	
		var timea1
		var e1=0;
	var tana1=function tans1(){
		e1=e1-1;
		if(e1<0){
			e1=0
		}
		$('.pintan1 .pintan-a1 ul').stop().animate({'left':-150*e1+'px'});
		$('.pintan1 .pintan-a1 ul li').eq(e1).stop().animate({'width':'451px','height':'357px','margin-top':'-245px'}).siblings()
		.stop().animate({'width':'145px','height':'112px','margin-top':'0px'});
		$('.pintan1 .pintan-a1 ul li img').eq(e1).stop().animate({'width':'451px','height':'357px'})
		$('.pintan1 .pintan-a1 ul li img').eq(e1+1).animate({'width':'145px','height':'112px'});
		$('.pintan1 .pinzi1 .pinac1').html('<span>'+(ab1[e1])+'</span>');
		$('.pintan1 .pinzi1 .pinaa1').html('<span>'+(e1+1)+'</span>');	
		$('.pintan1 .pinzi1 .pinab1').html('<span>'+(ac1[e1])+'</span>');		
		$('.pintan1 .pleft1').unbind('click');
		timea1=setTimeout(function(){
			$('.pintan1 .pleft1').click(tana1);
		},time)
	}
	$('.pintan1 .pleft1').click(tana1);


		var timeq2
		var e1=0;
	var tanq2=function tank2(){
		e1=e1+1;
		if(e1>3){
			e1=3
		}
		$('.pintan1 .pintan-a1 ul').stop().animate({'left':-150*e1+'px'});
		$('.pintan1 .pintan-a1 ul li').eq(e1).stop().animate({'width':'451px','height':'357px','margin-top':'-245px'}).siblings()
		.stop().animate({'width':'145px','height':'112px','margin-top':'0px'});
		$('.pintan1 .pintan-a1 ul li img').eq(e1).stop().animate({'width':'451px','height':'357px'})
		$('.pintan1 .pintan-a1 ul li img').eq(e1-1).animate({'width':'145px','height':'112px'});
		$('.pintan1 .pinzi1 .pinac1').html('<span>'+(ab1[e1])+'</span>');
		$('.pintan1 .pinzi1 .pinaa1').html('<span>'+(e1+1)+'</span>');	
		$('.pintan1 .pinzi1 .pinab1').html('<span>'+(ac1[e1])+'</span>');		
		$('.pintan1 .pright1').unbind('click');
		timeq2=setTimeout(function(){
			$('.pintan1 .pright1').click(tanq2);
		},time)
	}
	$('.pintan1 .pright1').click(tanq2);
	
	var timet3
	var tanl3=function tank3(){ 
	var ec1=$(this).index();
		e1=ec1;
		$('.pintan1 .pintan-a1 ul').stop().animate({'left':-150*ec1+'px'});
		$('.pintan1 .pintan-a1 ul li').eq(ec1).stop().animate({'width':'451px','height':'357px','margin-top':'-245px'}).siblings()
		.stop().animate({'width':'145px','height':'112px','margin-top':'0px'});
		$('.pintan1 .pintan-a1 ul li img').eq(ec1).stop().animate({'width':'451px','height':'357px'})
		$('.pintan1 .pintan-a1 ul li img').eq(ec1-1).animate({'width':'145px','height':'112px'});
		$('.pintan1 .pintan-a1 ul li img').eq(ec1+1).animate({'width':'145px','height':'112px'});
		$('.pintan1 .pintan-a1 ul li img').eq(ec1-2).animate({'width':'145px','height':'112px'});
		$('.pintan1 .pintan-a1 ul li img').eq(ec1+2).animate({'width':'145px','height':'112px'});
		$('.pintan1 .pintan-a1 ul li img').eq(ec1-3).animate({'width':'145px','height':'112px'});
		$('.pintan1 .pintan-a1 ul li img').eq(ec1+3).animate({'width':'145px','height':'112px'});
		$('.pintan1 .pinzi1 .pinac1').html('<span>'+(ab1[ec1])+'</span>');
		$('.pintan1 .pinzi1 .pinaa1').html('<span>'+(ec1+1)+'</span>');	
		$('.pintan1 .pinzi1 .pinab1').html('<span>'+(ac1[ec1])+'</span>');
	
		$('.pintan1 .pintan-a1 ul li').unbind('click');
		timet3=setTimeout(function(){
			$('.pintan1 .pintan-a1 ul li').click(tanl3);
		},time)
	}
	$('.pintan1 .pintan-a1 ul li').click(tanl3);
	
	$('.pintan1 .pix1').click(function(){
		$('.pintan1').fadeOut();
		$('.quan1').show();
	})
	$('#huli .huli-b li').hover(function(){
		var bl=$(this).index();
		console.log(bl)
		$('#huli .huli-b li span:nth-of-type(1)').eq(bl).css({'color':'#ff9d0b'});
		$('#huli .huli-b li span:nth-of-type(2)').eq(bl).css({'color':'#ff9d0b'})
	},function(){
		$('#huli .huli-b li span:nth-of-type(1)').css({'color':''})
		$('#huli .huli-b li span:nth-of-type(2)').css({'color':''})
	})
	$('#meir .meirb .meir-b .meir-c li').hover(function(){
		var al=$(this).index();
		$('#meir .meirb .meir-b .meir-c li p span:nth-of-type(1)').eq(al).css({'color':'#ff9d0b'});
		$('#meir .meirb .meir-b .meir-c li p span:nth-of-type(2)').eq(al).css({'color':'#ff9d0b'});
	},function(){
		$('#meir .meirb .meir-b .meir-c li p span:nth-of-type(1)').css({'color':''});
		$('#meir .meirb .meir-b .meir-c li p span:nth-of-type(2)').css({'color':''});		
	});
	var tum=2408;
	var timemr=tum;
	
	function meio(){		
		timemr=setInterval(function(){	
			tum=tum-1;
			if(tum<8){
				tum=2408;
				$('#meir .meirc .meirc-b ul').stop().css({'left':-tum+'px'});
			}
			$('#meir .meirc .meirc-b ul').stop().css({'left':-tum+'px'});
		},30)
	}
	meio();
	$('#meir .meirc .meirc-b ul li').hover(function(){
		clearInterval(timemr);
		var yi=$(this).index();
		$('#meir .meirc .meirc-b ul li').eq(yi).stop().fadeTo(200,1).siblings().stop().fadeTo(300,0.6);
	},function(){
		meio();
		$('#meir .meirc .meirc-b ul li').stop().fadeTo(300,1);
	})
	$('#liuyan .liuyanh .he').hover(function(){
		$(this).css({'background':'#666'});
		$('#liuyan .liuyanh .he a').css({'color':'#fff'});
	},function(){
		$(this).css({'background':'none'});
		$('#liuyan .liuyanh .he a').css({'color':'#666'});		
	});
	var inpu=$('#liuyan .liuyanb form input,textarea');
	$('#liuyan .liuyane p').click(function(){
//		function inp(){	
			for(var v in inpu){
				if(inpu[v=0].value==""){	
					$('#liuyan .liuyanb .litan').show();
					$('#liuyan .liuyanb .litan .litana span').html('<span>'+(h[6])+'</span>');
					$(inpu[v=0]).focus();					
				}else if(inpu[v=1].value==""){
					$('#liuyan .liuyanb .litan').show();
					$('#liuyan .liuyanb .litan .litana span').html('<span>'+(h[0])+'</span>');					
					$(inpu[v=1]).focus()					
				}else if(inpu[v=2].value==""){
					$('#liuyan .liuyanb .litan').show();
					$('#liuyan .liuyanb .litan .litana span').html('<span>'+(h[1])+'</span>');
					$(inpu[v=2]).focus()
				}else if(inpu[v=3].value==""){
					$('#liuyan .liuyanb .litan').show();
					$('#liuyan .liuyanb .litan .litana span').html('<span>'+(h[2])+'</span>');
					$(inpu[v=3]).focus()
				}else if(inpu[v=4].value==""){
					$('#liuyan .liuyanb .litan').show();
					$('#liuyan .liuyanb .litan .litana span').html('<span>'+(h[3])+'</span>');
					$(inpu[v=4]).focus();
				}else if(!/.+@.+\.[a-zA-Z]{2,4}$/.test(inpu[v=1].value)){
					$(inpu[v=1]).focus();
					$('#liuyan .liuyanb .litan').show();
					$('#liuyan .liuyanb .litan .litana span').html('<span>'+(h[4])+'</span>');								
				}else if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test(inpu[v=2].value)){
					$(inpu[v=2]).focus();
					$('#liuyan .liuyanb .litan').show();
					$('#liuyan .liuyanb .litan .litana span').html('<span>'+(h[7])+'</span>');								
				}else if(inpu[v=4].value!=sz[t]){	
					$(inpu[v=4]).focus();				
					$('#liuyan .liuyanb .litan').show();
					$('#liuyan .liuyanb .litan .litana span').html('<span>'+(h[5])+'</span>');
				}else{
					$('#liuyan .liuyanb .litan').hide();
					$('#liuyan .liuc').fadeIn();
					setInterval(function(){
						$('#liuyan .liuc').fadeOut();					
					},2300)
					inpu[v=0].value="";
					inpu[v=1].value="";
					inpu[v=2].value="";
					inpu[v=3].value="";
					inpu[v=4].value="";	
					}
				return v;
			}
				return false;
//			}			
//		inp();		
	})
	$('#liuyan .liuc').click(function(){
		$(this).fadeOut();
	})
	var h=['请输入邮箱地址','请输入电话号码','请输入内容','请输入验证码','邮箱格式输入错误','验证码输入错误','请输入姓名','电话号码格式不正确'];
	var dj=[
			'img/validateCode.jpg','img/validateCode (1).jpg','img/validateCode (2).jpg','img/validateCode (3).jpg',
			'img/validateCode (4).jpg','img/validateCode (5).jpg','img/validateCode (6).jpg','img/validateCode (7).jpg',
			'img/validateCode (8).jpg','img/validateCode (9).jpg','img/validateCode (10).jpg','img/validateCode (11).jpg',
			'img/validateCode (12).jpg','img/validateCode (13).jpg','img/validateCode (14).jpg','img/validateCode (15).jpg',
			'img/validateCode (16).jpg','img/validateCode (17).jpg','img/validateCode (18).jpg','img/validateCode (19).jpg',
			'img/validateCode (20).jpg','img/validateCode (21).jpg','img/validateCode (22).jpg','img/validateCode (23).jpg',
			'img/validateCode (24).jpg','img/validateCode (25).jpg','img/validateCode (26).jpg','img/validateCode (27).jpg',
			'img/validateCode (28).jpg','img/validateCode (29).jpg','img/validateCode (30).jpg'
			];
	var sz=['sgws','3v1w','4cvb','tbzv','xoxp','xyhw','33xh','vegk','1l2g','tx6f',
			'xgbv','tufs','ubh2','mdx8','jtmx','pnyh','elha','i8ry','6yvh','twcu',
			'xlgi','zkcj','kmdc','p3r6','ukwp','jbkr','gsvs','cw5w','zvcr','3t68',
			'mchk'	
			];
		 for(u in sz){		 	
		 	t=u;
		 }
		var t		
	$('#liuyan .liuyand .lyd img').click(function(){
		var i=parseInt(Math.random()*dj.length);
		t=i;
		$(this).attr('src',dj[i]);
	})
})


