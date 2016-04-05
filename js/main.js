// When the page loads run a loop: Create a new HTML element //
// Add a class to the element //
// Set a random top, left, width, height, rotation & opacity //

var $banner = $('.banner');
var $addStars;
var $width = $banner.outerWidth();
var $height = $banner.outerHeight();

for (i = 0; i < 75; i++) {
  $star = $('<div>');
  $star.addClass('star');
  $body.append($star);
};
