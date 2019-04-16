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

function smoothTopButton() {
  $('.arrow__box--up').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });
}
