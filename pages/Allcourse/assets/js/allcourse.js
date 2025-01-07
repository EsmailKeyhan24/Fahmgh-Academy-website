const navigation_list=document.querySelector('.navigation_list')
const toggle=document.getElementById('toggle')
toggle.addEventListener('click' , ()=>{
    navigation_list.classList.toggle('active')
})


const cardPagination = document.querySelectorAll('.card-pagination>div');

for( i = 0; i < cardPagination.length; i++){
    _span = document.createElement('span')
    _span.classList.add('btnPagination')

    document.querySelector('.pagination').appendChild(_span)

}
let count = 0
const span = document.querySelectorAll('.pagination>span');

for( i = 0; i<span.length; i++){
    span[i].innerHTML = count
    count++
}
span[0].innerHTML = "<"
span[span.length-1].innerHTML = ">"


