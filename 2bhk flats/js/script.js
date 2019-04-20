// onscroll logo change 
window.onscroll = function() {
  growShrinkLogo()
};

function growShrinkLogo() {
  var Logo = document.getElementById("Logo")
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop < 3) {
    Logo.style.width = '200px';
    Logo.src='./img/rera.webp';
  	var element = document.getElementById("enquire");
  	element.classList.remove("fix-modal");
  	element.classList.remove("btn-light");
  } else {
    Logo.style.width = '50px';
    Logo.src='./img/kp.webp';
    var element = document.getElementById("enquire");
    // alert(element);	
  	element.classList.add("fix-modal");
  	
  }
}

// rera logo

$(".overlay").append("<img id='theImg' src='./img/re.webp'/>");

// display remaining projects

var button = document.getElementById('show_button')
    button.addEventListener('click',hideshow,false);

    function hideshow() {
        document.getElementById('readMore').style.display = 'block'; 
        this.style.display = 'none'
    } 


// modal

// var sOffset = $(".fix-modal").offset().top;
// var shareheight = $(".fix-modal").height() + 43;
// $(window).scroll(function() {
//     var scrollYpos = $(document).scrollTop();
//     if (scrollYpos > sOffset - shareheight) {
//     	// alert('down');
        
//     } 
// });
function user_submit(){
var user_name = document.getElementById("user_name").value;

}