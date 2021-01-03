var header = $("header").outerHeight();
var height = header - 500;

// Navigation bar scroll function
$(window).scroll(function () {
  if ($(this).scrollTop() > height) {
    $(".navbar").animate({ padding: "1rem 0" }, 10, "linear", function () {
      $(this).addClass("add-bg");
    });
  } else if ($(this).scrollTop() <= height) {
    $(".navbar").animate({ padding: "3rem 0" }, 1, "linear", function () {
      $(this).removeClass("add-bg");
    });
  }
});
$(window).scroll();

// Navigation links scroll function
$(".nav__link--home").click(function () {
  $("html, body").animate(
    { scrollTop: "0px", transition: "all 1s cubic-bezier(.17,.67,.96,.65)" },
    1000,
    "linear"
  );
});
$(".nav__link--about").click(function () {
  let aboutOffset = $("#about").offset().top + 240;
  $("html, body").animate(
    {
      scrollTop: aboutOffset,
      transition: "all 1s cubic-bezier(.17,.67,.96,.65)"
    },
    1000,
    "linear"
  );
});
$(".nav__link--projects").click(function () {
  let projectsOffset = $("#projects").offset().top;
  $("html, body").animate(
    {
      scrollTop: projectsOffset,
      transition: "all 1s cubic-bezier(.17,.67,.96,.65)"
    },
    1000,
    "linear"
  );
});
$(".nav__link--articles").click(function () {
  let articlesOffset = $("#articles").offset().top;
  $("html, body").animate(
    {
      scrollTop: articlesOffset,
      transition: "all 1s cubic-bezier(.17,.67,.96,.65)"
    },
    1000,
    "linear"
  );
});
$(".nav__link--contact").click(function () {
  let contactOffset = $("#contact").offset().top;
  $("html, body").animate(
    {
      scrollTop: contactOffset,
      transition: "all 1s cubic-bezier(.17,.67,.96,.65)"
    },
    1000,
    "linear"
  );
});

// Learn me cta
$(".welcome__cta").click(function () {
  let contactOffset = $("#about").offset().top + 240;
  $("html, body").animate(
    {
      scrollTop: contactOffset,
      transition: "all 1s cubic-bezier(.17,.67,.96,.65)"
    },
    1000,
    "linear"
  );
});
