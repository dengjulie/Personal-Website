$(document).ready(function() {
  $("#sidebar-button").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    }
    else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".page-wrapper").addClass("wrapper-active");
      // the following is a bit more challenging but gets rid of a bug with scrolling
      setTimeout(function() {
      $("body").addClass("no-scroll");
      }, 300);
    }
  });

  $(".page-wrapper").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    }
  });

  // $("#home-link").click(function() {
  //   $("html, body").animate({ scrollTop: 0 }, 300);
  //   return false;
  // })
  // $("#misc-link").click(function() {
  //   $("html, body").animate({ scrollTop: 500 }, 300);
  //   return false;
  // })
  // $("#dog-link").click(function() {
  //   $("html, body").animate({ scrollTop: 1200 }, 300);
  //   return false;
  // })
}
