// onscroll logo change 
window.onscroll = function() {
  growShrinkLogo()
};

function growShrinkLogo() {
  var Logo = document.getElementById("Logo")
  if (document.body.scrollTop > 3 || document.documentElement.scrollTop < 5) {
    Logo.style.width = '200px';
    Logo.src='./img/rera.webp';
  } else {
    Logo.style.width = '50px';
    Logo.src='./img/kp.webp';
  }
}

// rera logo

$(".overlay").append("<img id='theImg' src='./img/re.webp'/>");

