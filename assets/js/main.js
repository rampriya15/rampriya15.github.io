
// SHOW MENU


  const titles = ["Software Developer", "Programmer", "Problem  Solver",];
  let currentIndex = 0;

  function animateText() {
    const textElement = document.getElementById("animated-text");
    const currentTitle = titles[currentIndex];
    textElement.innerHTML = ""; // Clear previous text

    // Create a span for each letter
    currentTitle.split("").forEach((letter, index) => {
      const letterSpan = document.createElement("span");
      letterSpan.textContent = letter;
      letterSpan.style.animationDelay = `${index * 0.1}s`; // Delay each letter's animation
      textElement.appendChild(letterSpan);
    });

    // After all letters are shown, fade out the entire text
    setTimeout(() => {
      textElement.style.animation = "fadeOut 1s forwards";
    }, currentTitle.length * 100 + 1000); // Delay to fade out after all letters have animated

    // Move to the next title after the fade out
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % titles.length; // Cycle to next title
      textElement.style.animation = ""; // Reset animation
      animateText(); // Call recursively for next text
    }, currentTitle.length * 100 + 2000);
  }

  animateText(); // Initial call to start the animation










  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if(toggle && nav){
          toggle.addEventListener('click', () =>{
                nav.classList.toggle('show')
          });
    }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//----------------contact form------------------


// Initialize EmailJS with your Public Key (User ID)
// Ensure EmailJS script is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your Public Key (User ID)
  emailjs.init("WBuosXD053gFiU24n"); // Replace with your EmailJS user ID

  // Form submission handler
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the values from the form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate inputs (optional but recommended)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }

    // Send email using EmailJS
    emailjs.send("service_uvfmylj", "template_jf3ggc8", {
      name: name,
      email: email,
      message: message,
    })
    .then(function(response) {
      // Show success notification
      document.getElementById('notification').style.display = 'block';

      // Clear form fields after successful submission
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';

      // Log success message in the console
      console.log('Message sent successfully!', response.status, response.text);
    }, function(error) {
      // Show error alert if something goes wrong
      alert('Failed to send the message. Please try again.');
      console.log('Failed to send the message.', error);
    });
  });
});
