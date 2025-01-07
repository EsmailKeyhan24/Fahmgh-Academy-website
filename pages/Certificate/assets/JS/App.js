const navigation_list=document.querySelector('.navigation_list')
const toggle=document.getElementById('toggle')
toggle.addEventListener('click' , ()=>{
    navigation_list.classList.toggle('active')
})


const section=document.querySelectorAll('.container_certificate>section')
const _li=document.querySelectorAll('.navigation_Btn>ul>li')
_li.forEach((li , index )=>{
    _li[0].classList.add('active')
    section[0].classList.add('show')
    li.addEventListener('click' , ()=>{
        for(i=0; i<_li.length; i++){
            _li[i].classList.remove('active')
        }
        li.classList.add('active')

        // ***** Add style to sections **** 
        for(j=0; j<section.length; j++){
            section[j].classList.remove('show')
        }
        section[index].classList.add('show')
    })
})