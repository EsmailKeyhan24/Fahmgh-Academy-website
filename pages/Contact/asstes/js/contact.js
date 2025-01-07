const navigation_list=document.querySelector('.navigation_list')
const toggle=document.getElementById('toggle')
toggle.addEventListener('click' , ()=>{
    navigation_list.classList.toggle('active')
})