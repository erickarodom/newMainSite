
  // M.AutoInit();

// -------------------------------------------------
const $ = jQuery;

$(function($){
  $('.tap-target').tapTarget();
  
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 4000,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  });

 

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1600,
    delay: (el, i) => 970 + 30 * i
  });
  // .add({
  //   targets: '.ml12 .letter',
  //   translateX: [0,-30],
  //   opacity: [1,0],
  //   easing: "easeInExpo",
  //   duration: 1100,
  //   delay: (el, i) => 300 + 30 * i
  // });

  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1600,
    delay: (el, i) => 1270 + 30 * i
  });
  // .add({
  //   targets: '.ml13 .letter',
  //   translateY: [0,-100],
  //   opacity: [1,0],
  //   easing: "easeInExpo",
  //   duration: 1200,
  //   delay: (el, i) => 500 + 30 * i
  // });

// // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml10 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml10 .letter',
//     rotateY: [-90, 0],
//     duration: 1300,
//     delay: (el, i) => 50 * i
//   }).add({
//     targets: '.ml10',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

//   // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml2');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml2 .letter',
//     scale: [4,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 1300,
//     delay: (el, i) => 250*i
//   }).add({
//     targets: '.ml2',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
