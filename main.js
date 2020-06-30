import Swup from 'swup';


$(document).ready(function () {
  $("#mobile-menu").click(function () { 
  $(".mobile-nav").toggleClass("active")
 invert = () => {
  const nav = $(".mobile-nav")  
  if (nav.hasClass('active')){
    $(".mobile-menu__img").css({
      'filter'         : 'invert(1)',
      '-webkit-filter' : 'invert(1)',
      '-moz-filter'    : 'invert(1)',
    
     });
   }
   else {
    $(".mobile-menu__img").css({
      'filter'         : 'invert(0)',
      '-webkit-filter' : 'invert(0)',
      '-moz-filter'    : 'invert(0)',
    
     });
   }
  

  }
invert();
  });


});

const images = document.querySelectorAll('.anim');

  observer = new IntersectionObserver((e)=>{

       console.log(e);
       e.forEach(entry =>{

         if (entry.intersectionRatio>0){
          entry.target.style.animation = `header 1s  forwards ease-out`;  
        }
        else{
        entry.target.style.animation=`none`;
        }   

      })
  })

images.forEach( image =>{
observer.observe(image)
})


