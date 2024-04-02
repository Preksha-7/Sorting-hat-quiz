document.addEventListener('DOMContentLoaded', function() {
  const doorLeft = document.getElementById('left');
  const doorRight = document.getElementById('right');
  const mcgonagallContainer = document.getElementById('mcgonagallContainer');
  const stuContainer = document.getElementById('stuContainer');
  const aud = document.getElementById('aud1');
  const subtitleDiv = document.getElementById('subtitle');
 
 
 
  setTimeout(() => {
     // Reset doors to their initial positions
     doorLeft.style.transform = 'translateX(-40%)';
     doorRight.style.transform = 'translateX(8%)';
 
     setTimeout(() => {
      doorLeft.style.transform = 'translateX(0)';
      doorRight.style.transform = 'translateX(0)';
      mcgonagallContainer.style.opacity = '1';

      // After revealing McGonagall, slide to the left
      setTimeout(() => {
        mcgonagallContainer.style.left = '0';
        setTimeout(() =>{
          aud.play();
        },4000);
       
      }, 2000); // Adjust timing as needed
    }, 3000); // 3 seconds delay
 }, 3000); // 1 second delay to ensure doors are reset before moving apart
});

setTimeout(() =>{
  stuContainer.style.opacity = '1';
}); 

