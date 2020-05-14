$(document).on("scroll", function(){
	if
  ($(document).scrollTop() > 86){
	  $("#banner").addClass("shrink");
	}
	else
	{
		$("#banner").removeClass("shrink");
	}

});
$(".navbar-toggler").on("click", function(){
	if(!$("#banner").hasClass("shrink") ){
		$("#banner").addClass("shrink");
	}else{
		if($(document).scrollTop() < 86){
			$("#banner").removeClass("shrink");
		}
	}
})
var owlheader = $('.owl-carousel-header');
owlheader.owlCarousel({
	items:1,
	loop:true,
	margin:10,
	autoplay:true,
	autoplayTimeout:9000,
	autoplayHoverPause:true
});

var owlpartners = $('.owl-carousel-partners');
owlpartners.owlCarousel({
    items:6,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
	responsiveClass:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:5
        },
        1000:{
            items:7
        }
    }
});

