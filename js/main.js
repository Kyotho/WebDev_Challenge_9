$(document).ready(function() {
  navbarCollapse();
  menuSlidedown();
});

$(window).resize(function() {
  navbarCollapse();
});

function navbarCollapse() {
  var windowWidth = parseInt($(window).width(), 10);
  $('.hamburger').hide();
  if (windowWidth <= 960) {
    $('.navbar__nav').css('display', 'none');
    $('.navbar__nav').addClass('show');
    $('.hamburger').show();
    $('.nav__item  ').css('display', 'block');
  } else {
    $('.navbar__nav').css('display', 'block');
    $('.navbar__nav').removeClass('show');
    $('.hamburger').hide();
    $('.nav__item  ').css('display', 'inline-block');
  }
}

// smooth scrolling
$('a').click(function() {
  var sectionTo = $(this).attr('href');
  $('html, body').animate(
    {
      scrollTop: $(sectionTo).offset().top
    },
    1500
  );
});

// smooth to top
function smoothTopButton() {
  $('.arrow__box--up').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });
}

function menuSlidedown() {
  $('.hamburger').click(function() {
    $('.navbar__nav').slideToggle('slow');
  });
}
