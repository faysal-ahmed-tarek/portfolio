                      /*mobile nav*/

document.querySelector(".mobile-toggler").addEventListener("click",function () {
	document.querySelector(".mobile-nav").style.transform=" translateX(0px)";
  document.querySelector("body").style.position="fixed";
})
document.querySelector(".close").addEventListener("click",function () {
	document.querySelector(".mobile-nav").style.transform="translateX(-768px)";
  document.querySelector("body").style.position="inherit";
})  
                      
document.querySelector(".link-up").addEventListener("click",function () {

  document.querySelector(".mobile-nav").style.transform="translateX(-768px)";
  
  document.querySelector("body").style.position="inherit";
}) 
                 
                       /*mobile nav*/
                     /*parallax-intro-1*/
$(document).on("mousemove" ,function (e) {
	$(".intro-bg").parallax(5, e);
})
                      /*parallax-intro-1*/
                     /*type js*/
var typed = new Typed('.type-js', {
  strings: ['Faysal ahmed tarek','a web developer',' a javascript developer',],
  typeSpeed: 60,
  backSpeed: 60,
  loop:true,
});    
                     /*type js*/
                    /*pre loader*/
function loader(){
	var preloader = document.querySelector("#pre-loader");
	preloader.style.display="none";
}
                    /*carousel */
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

                    /*carousel*/

                    /*header sticky*/
document.addEventListener("scroll",function () {
  var scroll = window.pageYOffset;
  if (scroll >100) {
    document.querySelector("#navigation").setAttribute("class","sticky-class");
  }
  else{
    document.querySelector("#navigation").removeAttribute("class","sticky-class");
  }
})

                    /*header sticky*/

                    /*aos*/
AOS.init();   

                   /*contact form validation*/
function cvalidation(){
  var c_name =document.getElementById('c-name').value;
  var c_email =document.getElementById('c-email').value;
  var c_phone =document.getElementById('c-phone').value;
  var c_subject =document.getElementById('c-subject').value;
  var c_message =document.getElementById('c-message').value;
  var c_eror =document.querySelector(".c-eror");
  var c_cmsg =document.querySelector(".c-eror");
  var regex =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  c_eror.style.padding = "15px";
  c_eror.style.background = "#fe8b8e";          
  if (c_name=="") {
    c_eror.innerHTML="please fill out this name field";
     return false;
  }
  if (c_name.length <6) {
    c_eror.innerHTML="must be enter more than 6 character in name field";
     return false;
  }
  if (c_name.length >20) {
    c_eror.innerHTML="must be enter less than 20 character in name field";
     return false;
  }
  if(regex.test(c_email)){
    c_eror.innerHTML="please enter valid Email";
     return false;
  }
  if (c_subject=="") {
    c_eror.innerHTML="please fill out this subject field";
     return false;
  }
  if (c_subject.length<10) {
    c_eror.innerHTML="must be enter more than 10 character in subject field";
     return false;
  }
  if (c_subject.length>100) {
    c_eror.innerHTML="must be enter less than 100 character in subject field";
     return false;
  }
  if (c_message=="") {
    c_eror.innerHTML="please fill out this message field";
     return false;
  }


  c_cmsg.style.background ="#56c756";  
  c_cmsg.innerHTML="form successfully submitted";
  return true;
}
                   /*contact form validation*/  











