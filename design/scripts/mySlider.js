//$(slide_item).eq(0).clone(true).appendTo(".container-interactive>ul");
//$(slide_item).eq(1).clone(true).appendTo(".container-interactive>ul");
var slide_item = $(".container-interactive>ul>li");
var slide_list = $(".container-interactive>ul");
var active = 1;
var active_prev = active - 1;
var active_after = active + 1;
var trans = 0;
var div_container = $(".container-banner-wrap");
var slide_item_len = slide_item.length;
var win_width = $(window).width();
var slider_width = win_width * slide_item_len;
slide_list.css("width",slider_width+'px');
slide_item.css("width",win_width+'px');
var img_box = $(".img-slider");
var img_ls = $(".img-slider>img");
$( window ).resize(function() {
	slide_item = $(".container-interactive>ul>li");
	slide_list = $(".container-interactive>ul");
	win_width = $(window).width();
	slider_width = win_width * slide_item_len;
	slide_list.css("width",slider_width+'px');
	slide_item.css("width",win_width+'px');  
});
// $(".container-interactive>ul>li>a").click(function(e) {
// 	if($(window).width() >= 1262){
// 		if(!$(this).parent().hasClass("active-slide")) {
// 			e.preventDefault();
// 		}
// 		else {
// 			return true;
// 		}
// 	}
// });
img_slider();
animate();
$("#next").click(function() {
	checkSlideNext();		
});

$("#prev").click(function() {
	checkSlidePrev();
});

function checkSlideNext() {
	if(active < slide_item_len) {
		slideNext();
	}
	// else {
	// 	slide_item.eq(active).removeClass("active-slide");
	// 	slide_list.css('transform','translateX(0px)');
	// 	trans = win_width;
	// 	active = 0;
	// 	slideNext();
	// }
}
function checkSlidePrev() {
	if(active > 1 && active <= slide_item_len) {
		slidePrev();
	}
}

function slideNext() {	
	trans-=win_width;
	++active;
	slide_list.css('transform','translateX('+trans+'px)');
	slide_item.removeClass("active-slide");
	slide_item.eq(active-1).addClass("active-slide");
	div_container.removeClass('slider1');
	div_container.removeClass('slider2');
	div_container.removeClass('slider3');
	div_container.addClass('slider'+(active));
	checknextbtn();
	checkprevbtn();
	img_slider();
	disableClick();
}


function slidePrev() {	
	trans+=win_width;
	--active;	
	slide_list.css('transform','translateX('+trans+'px)');
	slide_item.removeClass("active-slide");
	slide_item.eq(active-1).addClass("active-slide");
	div_container.removeClass('slider1');
	div_container.removeClass('slider2');
	div_container.removeClass('slider3');
	div_container.addClass('slider'+(active));
	checkprevbtn();
	checknextbtn();
	img_slider();
	disableClick();	
}

function checknextbtn() {
	if(active == slide_item_len) {
		$("#next").addClass("slide-disabled");
	}
	else {
		$("#next").removeClass("slide-disabled");
	}
}

function checkprevbtn() {
	if(active == 1) {
		$("#prev").addClass("slide-disabled");
	}
	else {
		$("#prev").removeClass("slide-disabled");
	}
}

function img_slider() {
	console.log(active)
	if(active == 1) {
		img_ls.removeClass("slide-right");
		img_ls.removeClass("slide-left");
		img_ls.removeClass("show-up");
		img_ls.eq(active-1).addClass("show-up");
		img_ls.eq(active).addClass("slide-left");
	}
	else if(active == slide_item_len) {
		img_ls.removeClass("slide-right");
		img_ls.removeClass("slide-left");
		img_ls.removeClass("show-up");
		img_ls.eq(active-1).addClass("show-up");
		img_ls.eq(active-2).addClass("slide-right");
	}
	else {
		img_ls.removeClass("slide-right");
		img_ls.removeClass("slide-left");
		img_ls.removeClass("show-up");
		img_ls.eq(active-1).addClass("show-up");
		img_ls.eq(active).addClass("slide-left");
		img_ls.eq(active-2).addClass("slide-right");
	}
}

function disableClick() {
	$(".container-directions").addClass("disableClick");
	$(".active-slide").removeClass("animate");
	$(".active-slide").removeClass("animate2");
	setTimeout(animate, 900);
}

function animate() {
	$(".container-directions").removeClass("disableClick");
	$(".active-slide").addClass("animate");
	setTimeout(sec_animate, 900);
}
function sec_animate() {
	$(".active-slide").addClass("animate2");
}


//setInterval(checkSlideNext, 5000);