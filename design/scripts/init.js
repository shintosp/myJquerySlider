$(function () {
	$('.btn-nav-main').click(function(){
		$('.nav-practice').removeClass('fl-show');
	});
	$('.btn-nav-practice').click(function(){
		$('.nav-main').removeClass('fl-show');
	});
	$('.back-to-top').click(function () {
		$('body,html').animate({
		scrollTop: 0
		}, 1500);
		return false;
	});
	$('.btn-scroll-down').click(function () {
		$('body, html').animate({
			scrollTop: $('.main-content-wrap').offset().top+"px"
		}, 1000);
		return false;
	});
	$(".btn-menu").on("click",function() {
		$(this).toggleClass("btn-close");
		$(".main-side-bar").toggleClass("show-up");
	})
});
