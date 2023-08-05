 
//  / hidden user notofication

const hidBtn=document.getElementById('icon-hidden');
const messageNot=document.getElementById('messages');
 
// hidBtn.addEventListener('click',()=>{
//    const services =document.getElementById('services')
//   messageNot.classList.remove('visible')
// })
// function toggleElement() {
//     messageNot.classList.toggle('visible');
//   }
  
//   // تنفيذ عرض وإخفاء العنصر كل ثلاث ثوانٍ
//   setInterval(toggleElement, 3000);

/// header links and show and hide menue
let linkP=document.getElementById("peple_links");
let menu1=document.getElementById('menu1')
let linkC=document.getElementById("company_links");
let menu2=document.getElementById('menu2')


linkP.addEventListener('mouseover',()=>{
    if( menu2.style.display=='block'){
        menu2.style.display='none'
    }
    menu1.style.display='block';
})
menu1.addEventListener('mouseleave',()=>{
    menu1.style.display='none'
 
})

linkC.addEventListener('mouseover',()=>{
    if( menu1.style.display=='block'){
        menu1.style.display='none'
    }
    menu2.style.display='block'
})
menu2.addEventListener('mouseleave',()=>{
    menu2.style.display='none'
 
})

// side menu in small screen 

// links sub menu 
//first link
let subLink1=document.getElementById('sibar_Sub_link1');
let subMenu1=document.getElementById('sibar_Sub_menu1');
let subUparrow1=document.getElementById('sibar_Sub_Uparow1');
let subDownarrow1=document.getElementById('sibar_Sub_Updown1');
// second link 
let subLink2=document.getElementById('sibar_Sub_link2');
let subMenu2=document.getElementById('sibar_Sub_menu2');
let subUparrow2=document.getElementById('sibar_Sub_Uparow2');
let subDownarrow2=document.getElementById('sibar_Sub_Updown2');

subLink1.addEventListener("click",()=>{
    if(subUparrow1.classList.contains('d-none')){
        subUparrow1.classList.remove('d-none')
        subDownarrow1.classList.add('d-none')
        subMenu1.classList.remove('d-none')
    }
    else{
        subUparrow1.classList.add('d-none')
        subDownarrow1.classList.remove('d-none')
        subMenu1.classList.add('d-none')
    }

})
subLink2.addEventListener("click",()=>{
    if(subUparrow2.classList.contains('d-none')){
        subUparrow2.classList.remove('d-none')
        subDownarrow2.classList.add('d-none')
        subMenu2.classList.remove('d-none')
    }
    else{
        subUparrow2.classList.add('d-none')
        subDownarrow2.classList.remove('d-none')
        subMenu2.classList.add('d-none')
    }

})