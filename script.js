$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Development", "Designing", "UI designing", "Frontend Development","Javascript Development"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
      strings: ["Web Development", "Designing", "UI designing", "Frontend Development","Javascript Development"],


        // strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

var items = document.querySelectorAll("li");

function isItemInView(item){
  var rect = item.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isItemInView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);


  var socialIcons = document.getElementsByClassName("picture");

  for (var i = 0; i < socialIcons.length; i++) {
    socialIcons[i].addEventListener("click", function() {
      var altText = this.alt;
      switch (altText) {
        case "WhatsApp":
          window.open("https://wa.me/9106688575", "_blank");
          break;
        case "LinkedIn":
          window.open("https://www.linkedin.com/in/priyal-panara-363247268/", "_blank");
          break;
        case "GitHub":
          window.open("https://github.com/priyalpanara", "_blank");
          break;
      }
    });
  }
//  function sendEmail(){
// let name = document.getElementById("name").value;
// let email = document.getElementById("email1").value;
// let subject = document.getElementById("subject").value;
// let message = document.getElementById("message").value;


// let body="Name :" + name + "<br> Email : " + email + "<br> Subject : " + subject + "<br> Message : "+ message;
// console.log(body);

//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "priyalpanara12@gmail.com",
//     Password : "C01D7572D0E4638D1C98BF2BAEBE5A408284",
//     To : '20it035.priyal.panara@vvpedulink.ac.in',
//     From : "priyalpanara12@gmail.com",
//     Subject : subject,
//     Body : body
// }).then(
//   message => alert(message)
// );
//  }
let isEmailSent = false; // Variable to track if the email has been sent

function sendEmail() {
  if (isEmailSent) {
    // Email already sent, no need to send again
    return;
  }

  let name = document.getElementById("name").value;
  let email = document.getElementById("email1").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let body = "Name: " + name + "<br> Email: " + email + "<br> Subject: " + subject + "<br> Message: " + message;
  console.log(body);

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "priyalpanara12@gmail.com",
    Password: "C01D7572D0E4638D1C98BF2BAEBE5A408284",
    To: '20it035.priyal.panara@vvpedulink.ac.in',
    From: "priyalpanara12@gmail.com",
    Subject: subject,
    Body: body
  }).then(message => {
    showMessage(message); // Display the message
    isEmailSent = true; // Set the flag to indicate email has been sent
  });
}

function showMessage(message) {
  // Display the message in a pop-up or any other desired way
  alert(message);
}
