 
//  / hidden user notofication

const hidBtn=document.getElementById('icon-hidden');
const messageNot=document.getElementById('messages');
 
hidBtn.addEventListener('click',()=>{
   const services =document.getElementById('services')
    messageNot.style.display='none';
    services.style.marginTop='-85px'
})

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