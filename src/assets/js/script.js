 function toggle(){
   var blur=document.getElementById('blur');
   blur.classList.toggle('active')
   document.querySelector("body").style.overflow = 'hidden';
   var popup=document.getElementById('popup');
   popup.classList.toggle('active')
   }
   function toggle2(){
   var blur=document.getElementById('blur');
   blur.classList.toggle('active')
   document.querySelector("body").style.overflow = 'visible';
   var popup=document.getElementById('popup');
   popup.classList.toggle('active')
   }