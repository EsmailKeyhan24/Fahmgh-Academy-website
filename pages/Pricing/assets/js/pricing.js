const navigation_list=document.querySelector('.navigation_list')
const toggle=document.getElementById('toggle')
toggle.addEventListener('click' , ()=>{
    navigation_list.classList.toggle('active')
})



const _qustionHeader = document.querySelectorAll('.question_header');
const _qustionBody = document.querySelectorAll('.question-body')



_qustionHeader.forEach((item , index)=>{
    item.addEventListener('click' , ()=>{
        for(i=0; i<_qustionBody.length; i++){
            _qustionBody[i].classList.remove('show')
        }
        _qustionBody[index].classList.toggle('show')
    })
})

































// _li.forEach((e)=>{
//     e.addEventListener('click', ()=>{
//         for(i=0; i<_li.length; i++ ){
//             _li[i].classList.remove('show')
//         }

//         if(!(flag % 2)){
//             e.classList.add('show')
//         }else{
//             e.classList.remove('show')
//         }
//         icon();
//     })
//     flag++;
// });

// function icon(){
//     if(!(flag % 2)){
//         for(i=0; i<_i.length; i++){
//             _i[i].style.transform = 'rotate(360deg)'
//         }
//     }else{
//         for(i=0; i<_i.length; i++){
//             _i[i].style.transform = 'rotate(0)'
//         }
//     }
//     flag++;
// }