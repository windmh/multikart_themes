$(document).ready(function () {
  // Open menu left
  $(".bar-style").on("click", function () {
    $("#mySidenav").fadeIn();
    $("#mySidenav .sidenav-content").addClass("open");
  });

  // Close menu left
  $("#clock").on("click", function () {
    $("#mySidenav").fadeOut();
    $("#mySidenav .sidenav-content").removeClass("open");
  });

  $(".side-back").on("click", function () {
    $("#mySidenav").fadeOut();
    $("#mySidenav .sidenav-content").removeClass("open");
  });
});

$(document).ready(function () {
  var swiper = new Swiper(".swiper-slides", {
    navigation: {
      nextEl: ".btn-slide-next",
      prevEl: ".btn-slide-prev",
    },
  });
});

$(document).ready(function () {
  var swiper = new Swiper('.swiper-collection', {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
  });
});

$(document).ready(function () {
  var swiper = new Swiper('.swiper-blog', {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    loop:true,
  });
});

$(document).ready(function () {
  var swiper = new Swiper('.swiper-inst', {
    slidesPerView: 6,
    autoplay: {
      delay: 5000,
    },
    loop:true,
  });
});

// products tabs
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})