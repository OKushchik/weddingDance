// const { reload } = require("browser-sync");

$(window).on('load resize orientationchange', function() {
  if ($('.carousel').hasClass('slick-initialized') === false && $(window).width() < 824) {
    $('.carousel').slick({
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      arrows: false,
      centerMode: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 640,
          settings: "unslick"
        },
      ]
    });
  }
})




$('.carousel-2').slick({
  dots: true,
  arrows: true,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  centerMode: false,
  centerPadding: '50px',
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    }
  ]
});


//imitation click on errows
  let arrowsPrev = document.querySelector('.arrows__prev');
  let arrowsNext = document.querySelector('.arrows__next');
  function imitErrows (){
    let slickPrev = document.querySelector('.slick-prev');
    let slickNext = document.querySelector('.slick-next');

    arrowsPrev.addEventListener('click', getObj.bind(null,slickPrev))
    arrowsNext.addEventListener('click', getObj.bind(null,slickNext))

    function getObj (getObj) {
      let event = new Event("click");
      getObj.dispatchEvent(event);
    }
  }
imitErrows();

// errowsInfo
let current = document.querySelector('.couches .slick-current');
let countOfCouchesBlock = Math.ceil(+document.querySelectorAll('.couch-card').length/2);
let currentIndex = Math.ceil((+current.getAttribute('data-slick-index') + 1)/2);
let arrowsInform = document.querySelector('.arrows__inform');
let transform = document.querySelector('.slick-track');

arrowsInform.textContent = `${currentIndex} of ${countOfCouchesBlock}`

function changArrowInfo (){
  current = document.querySelector('.couches .slick-current');
  currentIndex = Math.ceil((+current.getAttribute('data-slick-index') + 1)/2);
  arrowsInform.textContent = `${currentIndex} of ${countOfCouchesBlock}`
}
arrowsNext.addEventListener('click', function(){
  changArrowInfo()
})
arrowsPrev.addEventListener('click', function(){
  changArrowInfo ()
})
transform.onclick = function(){
  changArrowInfo ()
}




// errowsInfo
// function infoErrow (count = 0){
//   console.log(count)
//   if ($(window).width() > 420) {
//     count = Math.ceil(count/2)
//   }
  
//   let slickDots = document.querySelectorAll('.couches ul.slick-dots li button');
//   let arrowsInform = document.querySelector('.arrows__inform');

// arrowsInform.textContent = slickDots[count].getAttribute('aria-label')
//   arrowsNext.addEventListener('click', function(){
//     if (count<slickDots.length-1){
//       count ++;
//     } else {
//       count = slickDots.length-1;
//     }
//   arrowsInform.textContent = slickDots[count].getAttribute('aria-label')
//   })
//   arrowsPrev.addEventListener('click', function(){
//     if (count>0){
//       count --;
//     } else {
//       count = 0;
//     }
//     arrowsInform.textContent = slickDots[count].getAttribute('aria-label')
//   })
// }
// infoErrow()

// $(window).on('resize', function() {
//   let current = document.querySelector('.couches .slick-current');
//   let currentIndex = current.getAttribute('data-slick-index')
//   imitErrows();
//   infoErrow(currentIndex)
// })


