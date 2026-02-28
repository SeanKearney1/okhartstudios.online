
function init() {
  ClickOffImage();
}

function ClickImage(image_str) {
  var overlay = document.getElementById("inspect-image");
  var image_overlay = document.getElementById("inspected-image");
  var image_source = document.getElementById(image_str);
  image_overlay.src = image_source.src;
  if (image_str < 0) { image_overlay.style.imageRendering = "pixelated"; }
  else { image_overlay.style.imageRendering = "initial"; }
  overlay.disabled = false;
  overlay.style.display = "block";
}

function ClickOffImage() {
  var overlay = document.getElementById("inspect-image");
  overlay.disabled = true;
  overlay.style.display = "none";
}
