 function toggle(){
   var blur=document.getElementById('blur');
   blur.classList.toggle('active')
   document.querySelector("body").style.overflow = 'hidden';
   document.documentElement.scrollTop;
   var popup=document.getElementById('popup');
   popup.classList.toggle('active')

   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
   }
   function toggle2(){
   var blur=document.getElementById('blur');
   blur.classList.toggle('active')
   document.querySelector("body").style.overflow = 'visible';
   var popup=document.getElementById('popup');
   popup.classList.toggle('active')
   }
   function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
