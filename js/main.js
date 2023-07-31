 
//  / hidden user notofication

const hidBtn=document.getElementById('icon-hidden');
const messageNot=document.getElementById('messages');
 
hidBtn.addEventListener('click',()=>{
   const services =document.getElementById('services')
    messageNot.style.display='none';
    services.style.marginTop='-85px'
})