// Materialize.css instances-----------------------
// M.AutoInit(); materialize auto initialize - can not use parameters
const $1 = jQuery;
$1(function($) {
    $('.skillSlider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1800,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2500
    });
    setTimeout(function() {
        $('.skillSlider').css("visibility", "visible");
    }, 1500);
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.tap-target').tapTarget();
    $('.collapsible').collapsible();
});
// Moving Letters/Anime.JS instances--------------------
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({
    loop: true
}).add({
    targets: '.ml9 .letter',
    scale: [
        0,
        1
    ],
    duration: 8000,
    elasticity: 800,
    delay: (el, i)=>75 * (i + 1)
}).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 6000
}); // GSAP------------------------------------
 //   const pageTransition = () =>{
 //   var timeline = gsap.timeline();
 //   // think this needs to be for my navs
 //   // timeline.to(".myNavBar", {
 //   //   zIndex: 1
 //   // });
 //   timeline.to(".page-transition", {
 //     duration: 1.5,
 //     height: "100%",
 //     top: "0%"
 //   });
 //   timeline.to(".page-transition", {
 //     duration: 1.5,
 //     height: "100%",
 //     top: "100%",
 //     delay: .3
 //   });
 //   timeline.set(".page-transition", {
 //     top: "-100%"
 //   });
 // }
 // const delay = (n) => {
 //   n = n || 100;
 //   return new Promise((done) => {
 //     setTimeout(()=> {
 //       done();
 //     }, n);
 //   })
 // }
 // barba.init({
 //   sync: true,
 //   transitions: [
 //     {
 //       async leave(data){
 //         const done = this.async();
 //         pageTransition();
 //         await delay(1000);
 //         done();
 //       }
 //     }
 //   ]
 // });

//# sourceMappingURL=projects.017db2f2.js.map
