// Responsive Navbar Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelector('.nav-links');
  const navToggle = document.createElement('button');
  
  // Set the Menu button properties
  navToggle.textContent = 'Menu';
  navToggle.classList.add('nav-toggle');
  
  // Add the button to the page
  document.querySelector('.navbar .container').prepend(navToggle);
  
  // Toggle the visibility of the navigation links
  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
  
  // Smooth Scroll for Navigation Links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Collapsible FAQs (if you have an FAQ section)
  document.querySelectorAll('.faq-item h4').forEach(item => {
    item.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
})