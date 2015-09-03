$(document).ready ( function(){

	// Target your .container, .wrapper, .post, etc.
    $("#vidfit").fitVids();

    $('.carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $('a.btn').click(function() {

  $(".video").fadeIn("slow", function () {
    $(this).css({display:"block"});
		});

});

    

})
