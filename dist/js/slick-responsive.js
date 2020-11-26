
$(window).on('load resize orientationchange', function() {
  if ($('.carousel').hasClass('slick-initialized') === false && $(window).width() < 824) {
    $('.carousel').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      arrows: false,
      centerMode: true,
      adaptiveHeight: true,
      initialSlide: 0,
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

  prevArrow: '<button type="button" class="arrows__prev arrow"><i class="fas fa-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="arrows__next arrow"><i class="fas fa-arrow-right"></i></button>',
  appendArrows: $('.arrows'),
  responsive: [
    {
      breakpoint: 640,
      settings: {
        infinite: true,
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    }
  ]
});


// errowsInfo
let arrowsPrev = document.querySelector('.arrows__prev'); 
let arrowsNext = document.querySelector('.arrows__next'); 
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
transform.addEventListener ('touchend', function(){
  changArrowInfo ()
})


/////Popap animation
const element = document.querySelector('.burger-popup');
const elementOpen = document.querySelector('.burger-icon.burger-open');
const elementClose = document.querySelector('.burger-icon.burger-close');

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



