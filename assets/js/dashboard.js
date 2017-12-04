$(document).ready(function () {
  console.log(data);
  if(data.design) {
     document.getElementById("design").style.cursor = "not-allowed";
     document.getElementById("design").style.opacity = "0.6";
  }
  if(data.technical) {
    document.getElementById("technical").style.cursor = "not-allowed";
    document.getElementById("technical").style.opacity = "0.6";
  }
  if(data.management) {
    document.getElementById("management").style.cursor = "not-allowed";
    document.getElementById("management").style.opacity = "0.6";
  }
});
function logout() {
  window.location = "/dashboard";
}
function designClick() {
  if(data.design) {
    ;
  }
  else {
    window.location = "/startexam/design";
  }
};
function technicalClick() {
  if(data.technical) {
    ;
  }
  else {
    window.location = "/startexam/technical";
  }
};
function managementClick() {
  if(data.management) {
    ;
  }
  else {
    window.location = "/startexam/management";
  }
};

 var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

