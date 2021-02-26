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
  // Open menu right
  $(".bar-style1").on("click", function () {
    $("#mySidenav1").fadeIn();
    $("#mySidenav1 .sidenav-content1").addClass("open");
  });

  // Close menu right
  $(".side-back1").on("click", function () {
    $("#mySidenav1").fadeOut();
    $("#mySidenav1 .sidenav-content1").removeClass("open");
  });
});

// mySidenav
$(document).ready(function () {
  $("#mySidenav ul li").on("click", function () {
    $(this).find("ul").toggleClass("show");
    $(this).find("a").toggleClass("active");
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
  var swiper = new Swiper(".swiper-collection", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 420px
      420: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 1199px
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});

$(document).ready(function () {
  var swiper = new Swiper(".swiper-blog", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

$(document).ready(function () {
  var swiper = new Swiper(".swiper-inst", {
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 420px
      420: {
        slidesPerView: 4,
      },
      // when window width is >= 420px
      576: {
        slidesPerView: 5,
      },
      // when window width is >= 991px
      1024: {
        slidesPerView: 6,
      },
    },
  });
});

$(document).ready(function () {
  var swiper = new Swiper(".swiper-brand", {
    slidesPerView: 2,
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 420px
      420: {
        slidesPerView: 3,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 5,
      },
    },
  });
});
// products tabs
$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});

// back to top
let btn = $(".back-to-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

$(document).ready(function () {
  $(".fm-title").on("click", function () {
    $(this).parent().find(".fm-content").toggleClass("show");
  });
});

// color-selector of category-page
$(document).ready(function () {
  $(".color-selector ul li").click(function () {
    $(".color-selector ul li").removeClass("active");
    $(this).addClass("active");
  });
});

//open filter of categate-page
$(document).ready(function () {
  $("h3.collection-block-title").click(function () {
    $(this)
      .parent()
      .find(".collection-filter-block-content")
      .toggleClass("open");
  });
});

$(document).ready(function () {
  var swiper = new Swiper(".swiper-card", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".card-btn-next",
      prevEl: ".card-btn-prev",
    },
  });
});

//Range Price
$(document).ready(function () {
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var w1 = 40;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var w2 = 40;
    var r2 = x2 + w2;

    if (r1 < x2 || x1 > r2) return false;
    return true;
  }

  // // slider call

  $("#slider").slider({
    range: true,
    min: 0,
    max: 1500,
    values: [0, 1500],
    slide: function (event, ui) {
      $(".ui-slider-handle:eq(0) .price-range-min").html("$" + ui.values[0]);
      $(".ui-slider-handle:eq(1) .price-range-max").html("$" + ui.values[1]);
      $(".price-range-both").html(
        "<i>$" + ui.values[0] + " - </i>$" + ui.values[1]
      );

      //

      if (ui.values[0] == ui.values[1]) {
        $(".price-range-both i").css("display", "none");
      } else {
        $(".price-range-both i").css("display", "inline");
      }

      //

      if (collision($(".price-range-min"), $(".price-range-max")) == true) {
        $(".price-range-min, .price-range-max").css("opacity", "0");
        $(".price-range-both").css("display", "block");
      } else {
        $(".price-range-min, .price-range-max").css("opacity", "1");
        $(".price-range-both").css("display", "none");
      }
    },
  });

  $(".ui-slider-range").append(
    '<span class="price-range-both value"><i>$' +
      $("#slider").slider("values", 0) +
      " - </i>" +
      $("#slider").slider("values", 1) +
      "</span>"
  );

  $(".ui-slider-handle:eq(0)").append(
    '<span class="price-range-min value">$' +
      $("#slider").slider("values", 0) +
      "</span>"
  );

  $(".ui-slider-handle:eq(1)").append(
    '<span class="price-range-max value">$' +
      $("#slider").slider("values", 1) +
      "</span>"
  );
});

// collection product list-view of categate-page
$(document).ready(function () {
  $(".collection-view ul li i.list-layout-view").click(function () {
    $(".collection-main-product .product-grid-block").addClass("list-view");
    $(".collection-grid-view").css({ opacity: "0" });
  });
});

$(document).ready(function () {
  $(".collection-view ul li i.grid-layout-view").click(function () {
    $(".collection-main-product .product-grid-block").removeClass("list-view");
    $(".collection-grid-view").css({ opacity: "1" });
  });
});

$(document).ready(function () {
  $(".collection-grid-view ul li img.product-2-layout-view").click(function () {
    $(".collection-main-product .product-grid-block")
      .removeClass("product-3-view")
      .addClass("product-2-view");
  });

  $(".collection-grid-view ul li img.product-3-layout-view").click(function () {
    $(".collection-main-product .product-grid-block")
      .removeClass("product-2-view")
      .addClass("product-3-view");
  });

  $(".collection-grid-view ul li img.product-4-layout-view").click(function () {
    $(".collection-main-product .product-grid-block").removeClass(
      "product-2-view product-3-view"
    );
  });
});

$(document).ready(function () {
  $(".filter-btn").click(function () {
    $(".collection-filter").addClass("show");
  });

  $(".collection-mobile-back").click(function () {
    $(".collection-filter").removeClass("show");
  });
});

// product page

$(document).ready(function () {
  var galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper(".gallery-top", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".btn-product-next",
      prevEl: ".btn-product-prev",
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
});

// tab-product of product_page
$(document).ready(function () {
  //alert('here');

  $(".tab-list a").click(function () {
    $(".tab-block").hide();
    $(".tab-list a.active").removeClass("active");
    $(this).addClass("active");

    var tab = $(this).attr("href");
    $(tab).fadeIn(1000);

    return false; // prevents link action
  }); // end click

  $(".tab-list li:first a").click();
}); // end ready
