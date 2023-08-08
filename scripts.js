document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("animateFromLeft");

  setTimeout(function () {
      section.style.left = "0"; // Set the left property to 0 to move the section in from the left
  }, 100);
  });

  document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loadingScreen");

  // Simulate a delay to demonstrate the effect (replace with your actual content loading logic)
  setTimeout(function () {
      loadingScreen.style.opacity = "0";
      loadingScreen.style.transform = "scale(8)";
      setTimeout(function () {
          loadingScreen.style.display = "none";
          document.body.style.overflow = "auto"; // Enable scrolling after loading screen disappears
      }, 1500);
  }, 800); // Adjust the timeout (in milliseconds) to match your desired delay
  });

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const popin = document.querySelector('.main');
    
   
  
    if (scrollPosition >= 400) {
      popin.classList.add('scrolled');
    }

    else {
      popin.classList.remove('scrolled');
      
    }
  });
  
  function toggleNavbar() {
          var navbarLinks = document.getElementById("listitem");
          navbarLinks.classList.toggle("show");
  }

  function togglecontact() {
    var navbarLinks = document.getElementById("form");
    navbarLinks.classList.toggle("show");
}


// Function to check if the element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add the 'visible' class when the element is in the viewport
function handleScroll() {
  const flexContainer = document.querySelector('.centeralign');
  if (isElementInViewport(flexContainer)) {
    flexContainer.classList.add('visible');
    window.removeEventListener('scroll', handleScroll);
  }
}

// Listen for the scroll event and trigger the animation
window.addEventListener('scroll', handleScroll);







  


          
  