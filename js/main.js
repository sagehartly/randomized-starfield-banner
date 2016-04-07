// When the page loads run a loop: Create a new HTML element //
// Add a class to the element //
// Set a random top, left, width, height, rotation & opacity //

var $body = $('.banner');
var $addStars;
var $width = $body.outerWidth();
var $height = $body.outerHeight();

for (i = 0; i < 75; i++) {
  $addStars = $('<div>');
  $addStars.addClass('star');
  $addStars.css({
    top: Math.random() * $height,
    left: Math.random() * $width,
    opacity: Math.random(),
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')'
  });
  $body.append($addStars);
}
