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
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 640,
          settings: "unslick"
        },
      ]
    });
  }
})

// $('.carousel').slick({
//   infinite: false,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   arrows: false,
//   adaptiveHeight: true,
//   responsive: [
//     {
//       breakpoint: 640,
//       settings: {
//         initialSlide: 1,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         centerMode: true,
//         dots: true,
//       }
//     },
//   ]
// });





$('.carousel-2').slick({
  dots: true,
  arrows: true,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  centerMode: false,
  centerPadding: '50px',
  prevArrow: '<button type="button" class="arrows__prev arrow"><i class="icon icon-arrowPrev"></i></button>',
  nextArrow: '<button type="button" class="arrows__next arrow"><i class="icon icon-arrowNext"></i></button>',
  appendArrows: $('.arrows'),
  responsive: [
    {
      breakpoint: 640,
      settings: {
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    }
  ]
});


// //imitation click on errows
  let arrowsPrev = document.querySelector('.arrows__prev'); 
  let arrowsNext = document.querySelector('.arrows__next'); 
//   function imitErrows (){
//     let slickPrev = document.querySelector('.slick-prev');
//     let slickNext = document.querySelector('.slick-next');

//     arrowsPrev.addEventListener('click', getObj.bind(null,slickPrev))
//     arrowsNext.addEventListener('click', getObj.bind(null,slickNext))

//     function getObj (getObj) {
//       let event = new Event("click");
//       getObj.dispatchEvent(event);
//     }
//   }
// imitErrows();

// errowsInfo
let arrowsInform = document.querySelector('.arrows__inform');
let transform = document.querySelector('.slick-track');

function changArrowInfo (){
  let current = document.querySelector('.couches .slick-current');
  let countOfCouchesBlock = Math.ceil(+document.querySelectorAll('.couch-card').length/2);
  let currentIndex = Math.ceil((+current.getAttribute('data-slick-index') + 1)/2);
  arrowsInform.textContent = `${currentIndex} of ${countOfCouchesBlock}`
  if(currentIndex === 1) {
    arrowsPrev.style.color = 'gray'
    arrowsNext.style.color = 'black'
  } else if(currentIndex === countOfCouchesBlock) {
    arrowsPrev.style.color = 'black'
    arrowsNext.style.color = 'gray'
  } else {
    arrowsPrev.style.color = 'black'
    arrowsNext.style.color = 'black'
  }
}
changArrowInfo ();
arrowsNext.addEventListener('click', function(){
  changArrowInfo()
})
arrowsPrev.addEventListener('click', function(){
  changArrowInfo ()
})
transform.onclick = function(){
  changArrowInfo ()
}



