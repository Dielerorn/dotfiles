function main() {
  $("h1").hide();
  $(".searchbar").hide();
  $(".title").hide();
  $(".links").hide();
  $(".settings-menu").hide();
  $(".dateadoublelinks").hide();
  $(".findrxlinks").hide();

  $("h1").fadeIn(200);
  $(".searchbar").fadeIn(600);
  $(".title").fadeIn(1000);

  $(".links").slideToggle(1000);

  $(".dateadoubletitle").on("click", function() {
    $(".dateadoublelinks").slideToggle(1000);
    $(".dropdownarrowdateadouble").toggleClass("dropdownarrowdateadouble-change");
  });

  $(".findrxtitle").on("click", function() {
    $(".findrxlinks").slideToggle(1000);
    $(".dropdownarrowfindrx").toggleClass("dropdownarrowfindrx-change");
  });

};

$(document).ready(main);
