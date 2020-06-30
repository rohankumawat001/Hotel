


$(document).ready(function () {
$("#mobile-menu").click(function () { 
$(".mobile-nav").addClass("active")
  
});

$("#mobile-close").click(function(){
  $(".mobile-nav").removeClass("active")
});
})

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


