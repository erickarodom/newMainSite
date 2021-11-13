
  // M.AutoInit();

// -------------------------------------------------
const $ = jQuery;

$(function($){
  $('.skillSlider').slick(
    {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 1500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
      
    }
  );
  setTimeout(function(){
    $('.skillSlider').css("visibility", "visible");
  }, 3500);

  $('.sidenav').sidenav();
  $('.tap-target').tapTarget();
});


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 5500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  });
