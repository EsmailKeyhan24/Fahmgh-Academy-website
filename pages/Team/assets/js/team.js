const navigation_list=document.querySelector('.navigation_list')
const toggle=document.getElementById('toggle')
toggle.addEventListener('click' , ()=>{
    navigation_list.classList.toggle('active')
})



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