const navigation_list=document.querySelector('.navigation_list')
const toggle=document.getElementById('toggle')
toggle.addEventListener('click' , ()=>{
    navigation_list.classList.toggle('active')
})



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});




// ========================  start section_products ============ 
const _sectionProducts = document.querySelectorAll('.card')
window.addEventListener('scroll', () => {
  let _scrollTop = window.innerHeight / 5 * 6
  for (i = 0; i < _sectionProducts.length; i++) {
    let _st = _sectionProducts[i].getBoundingClientRect().top
    if (_st < _scrollTop) {
      _sectionProducts[i].classList.add('show')
      _counter()
      console.log(_st < _scrollTop)
    }
  }
})




const _counter_card = document.querySelectorAll('.counter_card')
let _count = 0
function _counter() {
  setTimeout(() => {
    setInterval(() => {
      if (_count < 3001) {
        _counter_card[0].innerHTML = _count++
      }
      if (_count < 322) {
        _counter_card[1].innerHTML = _count++
      }
      if (_count < 1001) {
        _counter_card[2].innerHTML = _count++
      }
      if (_count < 600) {
        _counter_card[3].innerHTML = _count++
      }
    }, 100);
  }, 500);
}
// ========================  end  section_products ============ 


function initializeSlider(sliderClass) {
  const slider = tns({
    container: sliderClass,
    controls:false,
    navPosition:'bottom',
    mouseDrag:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayButtonOutput:false,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      },
      992:{
        items:3
      }
    },
  });

  // Function to apply hover effect to index 2
  function applyHoverEffect() {
    const slides = document.querySelectorAll(`${sliderClass} .tns-slide-active`);
    slides.forEach(card => card.classList.remove('hover'));
   
    

    // Target index 2 directly (third card, zero-based index)
    if (slides[1]) {
      slides[1].classList.add('hover');
    }
  }

  // Listen for slide changes
  slider.events.on('indexChanged', applyHoverEffect);

  // Initial hover effect
  applyHoverEffect();
}
// Initialize both sliders
initializeSlider('.slider-1');
initializeSlider('.slider-2');


// ========== Timer or Clock *****======= 
let clock=new Date();
h=clock.getHours;
m=clock.getMinutes;
s=clock.getSeconds;
