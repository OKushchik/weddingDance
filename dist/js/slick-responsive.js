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
//         adaptiveHeight: true,
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
  prevArrow: '<button type="button" class="arrows__prev arrow"><i class="fas fa-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="arrows__next arrow"><i class="fas fa-arrow-right"></i></button>',
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
let transform = document.querySelector('.couches__section');

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
transform.addEventListener ('mouseup', function(){
  changArrowInfo ()
})


/////
const element = document.querySelector('.burger-popup');
const elementOpen = document.querySelector('.burger-icon.burger-open');
const elementClose = document.querySelector('.burger-icon.burger-close');

// elementOpen.addEventListener('click', function(){
//   if(element.classList.contains('animate__fadeInDownBig')) {
//     element.classList.remove('animate__animated', 'animate__fadeInDownBig')
//   } else if (element.classList.contains('animate__fadeOutUpBig')){
//     element.classList.remove('animate__animated', 'animate__fadeOutUpBig')
//   } else {
//     element.classList.add('animate__animated', `${typeOfAnimation}`)
//   }
// })

elementOpen.addEventListener('click', addAnimation.bind(null,'animate__fadeInDownBig','animate__fast'))
elementClose.addEventListener('click', addAnimation.bind(null,'animate__fadeOutUpBig','animate__slow'))

function addAnimation (typeOfAnimation, slow) {
  if (element.classList.contains('animate__fadeInDownBig')) {
    element.classList.remove('animate__animated', 'animate__fadeInDownBig', 'animate__fast')

  }
  if (element.classList.contains('animate__fadeOutUpBig')){
    element.classList.remove('animate__animated', 'animate__fadeOutUpBig', 'animate__slow')

  } 
    
     element.classList.add('animate__animated', `${typeOfAnimation}`,`${slow}`) 

}


// $(window).on('load', function() {
//   setTimeout(function(){ 

//     // document.querySelector('.show-case__text').style.display = 'block';
//     document.querySelector('.show-case__img').classList.add('changeSizeImg');
//     document.querySelector('.show-case__text').classList.add('changeSizeTitle');

// }, 1000);

// })

