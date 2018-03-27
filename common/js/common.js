var menuNum = null;
function setLnb(mn) {	
	$(".lnb li.node1").removeClass("on");
	$(".lnb li.node1").eq(mn).addClass("on");
	
	menuNum = mn;
}

//컨텐츠 메뉴
var contentMenu = null;
function setCM(cm){
	$(".contentMenu li").removeClass("on");
	$(".contentMenu li").eq(cm).addClass("on");
	
	contentMenu = cm;
}


//퇴계이황 Tab
var toegyeTab = null;
function setToegye(tn){
	$(".toegyeNav li").removeClass("on");
	$(".toegyeNav li").eq(tn).addClass("on");
	
	toegyeTab = tn;
}

//고택체험 Tab
var oldhouseNavi = null;
function setOhn(ohn){
	$(".houseNavi li").removeClass("on");
	$(".houseNavi li").eq(ohn).addClass("on");
	
	oldhouseNavi = ohn;
}


jQuery(document).ready(function(e) {
	//setLnb(0);
	
	$(".bxslider").bxSlider({
		pagerCustom: '.bxPager'
	});

	$(".lnb").on({
		'mouseleave focusout':function(e) {
			$(".bg-lnb-submenu").stop().slideUp('fast');
			
			if (menuNum !== null) {
				setLnb(menuNum);
			}			
		}
	});
	
	$(".lnb>li.node1").on({
		'mouseenter focusin':function(e){
			$(".lnb li.node1").removeClass("on");
			
			if ($(this).find(".submenu").length > 0) {
				$(".bg-lnb-submenu").stop().slideDown('fast');
			} else {
				$(".bg-lnb-submenu").stop().slideUp('fast');
			}
			
			$(this).find(".submenu").stop().slideDown('fast');
		},
		'mouseleave focusout':function(e){
			if ($(this).find(".submenu").length > 0) {
				$(this).find(".submenu").stop().slideUp('fast');
			}
		}
	});
	
	$(window).on('scroll',function(e){
		if ($(".contentMenu-wrap").length > 0) {
			var scrollH = $(".subVisual-wrap").outerHeight();
			
			if ($(window).scrollTop() > scrollH) {
				$(".contentMenu-wrap").addClass("fixed");
				
			} else {
				$(".contentMenu-wrap").removeClass("fixed");
				
			}
		}
		
		if ($(".tabWrap01").length > 0) {// 추가
			var tabposition = $(".tabWrap01").offset().top;
			if ($(document).scrollTop() > tabposition-300){
				$(".tabWrap01 .tabMenu ul").addClass("fixed");
			}else{
				$(".tabWrap01 .tabMenu ul").removeClass("fixed");
			}
		}
	});
	
	$(".tabMenu button").click(function(){
		$(this).parent().siblings("li").removeClass("current");
		$(this).parent("li").addClass("current");
		$(this).parent().parent().parent().siblings(".tabCon").children(".tabUnit").removeClass("current");
		$(this).parent().parent().parent().siblings(".tabCon").find(".tabUnit").eq($(this).parent().index()).addClass("current");
		var offset = $(".tabWrap01").offset();
		$('html, body').animate({scrollTop : offset.top-250}, 400);
		$(".tabMenu ul").addClass("fixed");
	});
	

});