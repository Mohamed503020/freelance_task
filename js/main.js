window.addEventListener('scroll', function() {
  var header = document.getElementById("main-header")
  var scrollPosition = window.scrollY;
  let menuMainHeader = document.querySelectorAll(".main-header .menu");
  let showClass = document.querySelectorAll(".main-header .menu.show");
  let topHeader= document.getElementById("top-header")
  if (scrollPosition > 5) {
    menuMainHeader.forEach(ele => {
      ele.style.transition = "top ease 0.5s";
      ele.style.top = "100px";
    });
    if (showClass) {
      menuMainHeader.forEach(ele => {
        ele.style.transitionDelay = "0.5s";
      });
    }
    header.style.top=`0px `
    header.style.border="none"
  } else {
        header.style.top=`${topHeader.offsetHeight}px `

    if (showClass) {
      menuMainHeader.forEach(ele => {
        ele.style.transitionDelay = "0.5s";
        ele.style.top = "125px";
      });
    }
  }
});
// hidden user notification
const hidBtn = document.getElementById('icon-hidden');
const messageNot = document.getElementById('messages');

if (hidBtn) {
  hidBtn.addEventListener('click', () => {
    const services = document.getElementById('services')
    messageNot.classList.remove('visible');
  });

  function toggleElement() {
    messageNot.classList.toggle('visible');
  }

  // Execute display and hide every three seconds
  setTimeout(toggleElement, 3000);
}
let bodyCommentUser=document.getElementById("bodyUserNcomment");
if(bodyCommentUser){
  bodyCommentUser.innerHTML= bodyCommentUser.textContent.slice(0, 30);

}
// Header links and show/hide menu
document.addEventListener('DOMContentLoaded', function() {
  var scrollPosition = window.scrollY;
  let linkP = document.getElementById("peple_links");
  let menu1 = document.getElementById('menu1');
  let linkC = document.getElementById("company_links");
  let menu2 = document.getElementById('menu2');
  let menu3 = document.getElementById('menu3');
  let linkV = document.getElementById("legal_links");

  if (linkC) {
    linkC.addEventListener('mouseover', () => {
      menu2.classList.add('show');
      menu1.classList.remove('show');
      menu3.classList.remove('show');
    });
  }

  if (menu2) {
    menu2.addEventListener('mouseleave', () => {
      menu2.classList.remove('show');
    });
  }

  if (linkP) {
    linkP.addEventListener('mouseover', () => {
      menu1.classList.add('show');
      menu2.classList.remove('show');
      menu3.classList.remove('show');
    });
  }

  if (menu1) {
    menu1.addEventListener('mouseleave', () => {
      menu1.classList.remove('show');
    });
  }

  if (linkV) {
    linkV.addEventListener('mouseover', () => {
      menu3.classList.add('show');
      menu2.classList.remove('show');
      menu1.classList.remove('show');
    });
  }

  if (menu3) {
    menu3.addEventListener('mouseleave', () => {
      menu3.classList.remove('show');
    });
  }
});
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
// three link 
let subLink3=document.getElementById('sibar_Sub_link3');
let subMenu3=document.getElementById('sibar_Sub_menu3');
let subUparrow3=document.getElementById('sibar_Sub_Uparow3');
let subDownarrow3=document.getElementById('sibar_Sub_Updown3');
if(subLink1){
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
}

if(subLink2){

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
    
}

if(subLink3){

    subLink3.addEventListener("click",()=>{
        if(subUparrow3.classList.contains('d-none')){
            subUparrow3.classList.remove('d-none')
            subDownarrow3.classList.add('d-none')
            subMenu3.classList.remove('d-none')
        }
        else{
            subUparrow3.classList.add('d-none')
            subDownarrow3.classList.remove('d-none')
            subMenu3.classList.add('d-none')
        }
    
    })
        
    }
// comment of rating  التقييمات 

let form =`
<form action="" class="mt-2" id='form'>
<div class="row">
  <div class="col-12 col-md-6">
  <div class="mb-3">
  <small for="name" class="form-label"> الإسم الكامل <span class="text-danger">*</span></small>
  <input type="text" class="form-control" name="name" maxlength="20" data-parsley-required-message="هذه القيمة مطلوبة" required="" id="name" autocomplete="off">
  </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="mb-3">
    <small for="email" class="form-label"> رقم الهاتف<span class="text-danger">*</span></small>
    <input type="number" class="form-control" name="phone" data-parsley-type-message="يجب أن يكون بريداُ إلكترونياً صالحاً" data-parsley-required-message="هذه القيمة مطلوبة" required="" id="phone" aria-describedby="emailHelp" autocomplete="off">
    </div>
    </div>
  <div class="col-12 col-md-6">
  <div class="mb-3">
  <small for="email" class="form-label">البريد الإلكتروني<span class="text-danger">*</span></small>
  <input type="email" class="form-control" name="email" data-parsley-type-message="يجب أن يكون بريداُ إلكترونياً صالحاً" data-parsley-required-message="هذه القيمة مطلوبة" required="" id="email" aria-describedby="emailHelp" autocomplete="off">
  </div>
  </div>
  <div class="mb-3">
  <small for="comment" class="form-label"> التعليقات<span class="text-danger">*</span></small>
  <textarea name="comment" class="form-control" required="" id="comment" rows="5" data-parsley-required-message="هذه القيمة مطلوبة" autocomplete="off"></textarea>
  </div>
  <div class="" dir="rtl">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" required="" data-parsley-required-message="هذه القيمة مطلوبة" autocomplete="off" data-parsley-multiple="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
  أوافق على <a class="text-success" href="" target="”_blank”">سياسة الخصوصية</a>  
  </label>
  </div>
  </div>
  <button  class="btn btn-danger mt-4" id="btn_reply-form">إرسال </button>
  </div>
</form>`

let replay = document.querySelectorAll('.replay');
replay.forEach(ele=>{
  ele.addEventListener("click",()=>{
    let div =document.createElement('div');
    div.innerHTML=form;
   let content=document.querySelector("form");
    if(content.style.display='none'){
      ele.after(div)

    }
  })
})




//  table page content
let Container =document.getElementById("ez-toc-container");
let hidContBtn=document.getElementById("hidCbtn");
let showContBtn=document.getElementById("showCbtn");
if(Container){
hidContBtn.addEventListener("click",()=>{
  Container.style.height="185px";
  hidContBtn.style.display='none';
  showContBtn.style.display="block";
  Container.scrollIntoView({ behavior: 'smooth' })
})
showContBtn.addEventListener("click",()=>{
  Container.style.height="auto";
  hidContBtn.style.display='block';
  showContBtn.style.display="none";
  Container.scrollIntoView({ behavior: 'smooth' })

})}


//stepper content 
let stepForm = document.getElementById('stepForm');
if(stepForm){
let stepNextBtn = document.getElementById("step_nextBtn");
let sendStepBtn = document.getElementById("sendStepBtn");

let StepPrevBtn = document.getElementById('step_prevBtn');
let stepContent1 = document.getElementById("step_content_1");
let stepContent2 = document.getElementById("step_content_2");
let stepHeader1 = document.getElementById("step_header_1");
let stepHeader2 = document.getElementById("step_header_2");

(function () {
  stepContent2.style.display = "none";
  StepPrevBtn.style.display = "none";
  sendStepBtn.style.display = "none";

})();

stepNextBtn.setAttribute("type", "button");
stepNextBtn.addEventListener("click",nexFunction);

function nexFunction (e){
  e.preventDefault();
  StepPrevBtn.style.display = 'inline-block';
  stepContent1.style.display = "none";
  stepContent2.style.display = "block";
  stepNextBtn.style.display = "none";
  sendStepBtn.style.display = "block";
  stepHeader2.classList.add("active");
}
if(sendStepBtn){
 sendStepBtn.addEventListener("click",(e)=>{
  e.preventDefault();
stepForm.submit()
 })
}

StepPrevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  StepPrevBtn.style.display = 'none';
  stepContent1.style.display = "block";
  stepContent2.style.display = "none";
  stepNextBtn.style.display = "block";
  sendStepBtn.style.display = "none";
  stepHeader2.classList.remove("active");
});

}
//======= profile setting"
let profileForm = document.getElementById("profileForm");
if(profileForm){

let btnEditProfile =document.getElementById("editProfile");
let btnSaveProfile =document.getElementById("saveProfile");
    // Enable/disable form inputs
    function toggleFormInputs(disabled) {
      var inputs = document.querySelectorAll("#profileForm input");
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = disabled;
      }
    }
    toggleFormInputs(true);
    btnEditProfile.addEventListener("click",(e)=>{
  e.preventDefault();
  btnEditProfile.style.display="none";
  console.log(btnSaveProfile);
  btnSaveProfile.style.display="block";
  toggleFormInputs(false)
    })


    btnSaveProfile.addEventListener("click",(e)=>{
      e.preventDefault();
       profileForm.submit()
        })
      }