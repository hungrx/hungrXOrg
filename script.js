 // JavaScript function to toggle the image and animation
 
 let toggle = true;
    
 function changeImage() {
   const imageElement = document.getElementById("toggleImage");
   const buttonElement = document.getElementById("toggleButton");

   // Toggle the image source
   if (toggle) {
     imageElement.src = "./media/2nd image.png";
     imageElement.classList.add("styled-image"); // Add class for styling

   } else {
     imageElement.src = "./media/1st image.png";
     imageElement.classList.remove("styled-image"); // Remove class

   }

   // Toggle the button animation
   buttonElement.classList.toggle("active");

   toggle = !toggle; // Flip the toggle state
}



document.addEventListener("DOMContentLoaded", () => {
  const appStoreButton = document.getElementById("app-store-button");
  const googlePlayButton = document.getElementById("google-play-button");
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");
  const closePopupButton = document.getElementById("closePopup");

  const showPopup = () => {
    overlay.classList.remove("hidden");
    popup.classList.remove("hidden");
  };

  const hidePopup = () => {
    overlay.classList.add("hidden");
    popup.classList.add("hidden");
  };

  appStoreButton.addEventListener("click", showPopup);
  googlePlayButton.addEventListener("click", showPopup);
  closePopupButton.addEventListener("click", hidePopup);
  overlay.addEventListener("click", hidePopup);
});

// // Select buttons and popup elements
// const appStoreButton = document.getElementById('app-store-button');
// const googlePlayButton = document.getElementById('google-play-button');
// const popup = document.getElementById('popup');
// const overlay = document.getElementById('overlay');
// const closePopupButton = document.getElementById('close-popup');

// // Function to show popup
// function showPopup() {
//     popup.style.display = 'block';
//     overlay.style.display = 'block';
// }

// // Function to close popup
// function closePopup() {
//     popup.style.display = 'none';
//     overlay.style.display = 'none';
// }

// // Add event listeners to buttons
// appStoreButton.addEventListener('click', showPopup);
// googlePlayButton.addEventListener('click', showPopup);
// closePopupButton.addEventListener('click', closePopup);
// overlay.addEventListener('click', closePopup);




document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".hero-nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.querySelector('.home-nav').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor behavior
  document.getElementById('home').scrollIntoView({
    behavior: 'smooth',  // Smooth scroll effect
    block: 'start'       // Scroll to the start of the section
  });
});



function changeImage() {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const image = document.getElementById('toggleImage');

  if (toggleSwitch.checked) {
    image.src = './media/2nd image.png'; // Change to second image
  } else {
    image.src = './media/1st image.png'; // Change to first image
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('prelaunch-form');
  
  // Only add the event listener if the form exists
  if (form) {
    form.onsubmit = async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      
      try {
        const response = await fetch('https://hungrxorg.onrender.com/users/addUser', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email }),
        });
        
        const data = await response.json();
        
        // Hide form and show success message
        document.getElementById('prelaunch-form').style.display = 'none';
        document.getElementById('successMessage').classList.remove('hidden');
        
        // Redirect after 3 seconds (optional)
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    };
  }
  
  // Make sure success message is hidden on page load
  const successMessage = document.getElementById('successMessage');
  if (successMessage) {
    successMessage.classList.add('hidden');
  }
});
//gfiireh
//ijvgirji


document.addEventListener("DOMContentLoaded", function() {
  const scrollContainer = document.querySelector(".app-image");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const imageContainer = document.querySelector(".image-container");

  // Force buttons to be visible initially
  leftBtn.style.display = "block";
  rightBtn.style.display = "block";
  
  // Log elements to check if they're being found correctly
  console.log("Scroll container:", scrollContainer);
  console.log("Left button:", leftBtn);
  console.log("Right button:", rightBtn);
  console.log("Image container:", imageContainer);

  function updateImageWidth() {
    const imageWidth = document.querySelector(".image").clientWidth;
    const gap = 10; // Gap value defined in CSS
    return imageWidth + gap;
  }

  function updateButtonVisibility() {
    // If at the beginning, hide left button
    if (scrollContainer.scrollLeft < 5) {
      leftBtn.style.display = "none";
    } else {
      leftBtn.style.display = "block";
    }
    
    // Calculate maximum scroll width
    const totalWidth = imageContainer.scrollWidth;
    const visibleWidth = scrollContainer.clientWidth;
    const maxScrollLeft = totalWidth - visibleWidth;
    
    console.log({
      totalWidth: totalWidth,
      visibleWidth: visibleWidth,
      maxScrollLeft: maxScrollLeft,
      currentScrollLeft: scrollContainer.scrollLeft
    });
    
    // If at the end, hide right button
    if (scrollContainer.scrollLeft >= maxScrollLeft - 5) {
      rightBtn.style.display = "none";
    } else {
      rightBtn.style.display = "block";
    }
  }

  // Handle button clicks
  rightBtn.addEventListener("click", function() {
    console.log("Right button clicked");
    scrollContainer.scrollBy({
      left: updateImageWidth(),
      behavior: "smooth"
    });
    setTimeout(updateButtonVisibility, 300);
  });

  leftBtn.addEventListener("click", function() {
    console.log("Left button clicked");
    scrollContainer.scrollBy({
      left: -updateImageWidth(),
      behavior: "smooth"
    });
    setTimeout(updateButtonVisibility, 300);
  });

  // Update on scroll
  scrollContainer.addEventListener("scroll", updateButtonVisibility);

  // Update on resize
  window.addEventListener("resize", function() {
    setTimeout(updateButtonVisibility, 200);
  });
  
  // Initial check after images have loaded
  window.addEventListener("load", function() {
    setTimeout(updateButtonVisibility, 200);
  });
  
  // Initial check
  setTimeout(updateButtonVisibility, 200);
});