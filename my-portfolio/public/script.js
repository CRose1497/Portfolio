// Existing DOMContentLoaded event to add a fade-in effect to the hero section
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    heroSection.classList.add('fade-in'); // Add a class for an animation
  
    // Scroll event to add a 'scrolled' class to the hero section
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        heroSection.classList.add('scrolled');
      } else {
        heroSection.classList.remove('scrolled');
      }
    });
  
  
    // Add scroll-triggered animation for specific elements
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    window.addEventListener('scroll', function() {
      elementsToAnimate.forEach(function(element) {
        if (window.scrollY + window.innerHeight > element.offsetTop) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    });
  
  });
  