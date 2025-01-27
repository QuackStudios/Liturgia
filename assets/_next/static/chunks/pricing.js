const observer = new MutationObserver((mutationsList, observer) => {
  // Check if the "modules-pp" section exists
  let modulesSection = document.querySelector('.modules-pp');
  if (!modulesSection) {
    // Create the "modules-pp" section
    modulesSection = document.createElement('section');
    modulesSection.className = 'modules-pp';

    // Add the pricing calculator HTML
    modulesSection.innerHTML = `
      <div class="calculator-container">
        <div class="controls">
          <label for="pricing-class">Select Pricing Class</label>
          <div class="custom-dropdown">
            <button class="dropdown-button">1-5 Seats</button>
            <ul class="dropdown-menu">
              <li data-value="355">1-5 Seats</li>
              <li data-value="435">6-10 Seats</li>
              <li data-value="510">11-20 Seats</li>
              <li data-value="565">21-30 Seats</li>
            </ul>
          </div>
        </div>
        <div class="price-card">
          <div class="calculator-price-section">
            <div class="price" id="price">\$355</div>
            <div class="gst">+GST</div>
          </div>
          <div class="annual-text">
            <div class="calc-text">billed annualy*</div>
          </div>
          <button onclick="getStarted()">Get Started <span class="arrow-symbol"> →</span></button>
        </div>
      </div>
      <div class="bulk-licensing-text">Liturgia offers competitive rates for organizations interested in bulk purchasing. Contact us to learn more about our flexible options. </div>
      <div class="trusted-by-content">
        <div class="trusted-by-text">Trusted By</div>
        <div class="trusted-by-logos">
          <div class="tb-logo-1"><img class="tb-logo-img" src="assets/_next/image/BCE-logo.jpg"></div>
          <div class="tb-logo-2"><img class="tb-logo-img" src="assets/_next/image/BCE-logo.jpg"></div>
          <div class="tb-logo-3"><img class="tb-logo-img" src="assets/_next/image/BCE-logo.jpg"></div>
          <div class="tb-logo-4"><img class="tb-logo-img" src="assets/_next/image/BCE-logo.jpg"></div>
        </div>
      </div>
    `;

    // Append the "modules-pp" section to the DOM
    document.querySelector('header').after(modulesSection);
    console.log('Modules-pp section added');
  }

  // Check if the "testimonials" section exists
  let testimonialsSection = document.querySelector('.testimonials');
  if (!testimonialsSection) {
    // Create the "testimonials" section
    testimonialsSection = document.createElement('section');
    testimonialsSection.className = 'testimonials';

    // Add the carousel HTML
    testimonialsSection.innerHTML = `
      <div class="carousel-container">
      <div class="cc-title">Testimonials</div>
        <div class="carousel-track">
          <!-- Customizable content for 4 cards -->

          <div class="carousel-card">
          <div class="cc-lhs">
              <div class="cc-lhs-text">
                  <div class="card-main-text">
                    <span class="quotation-mark1">"</span><span class="testimonial-main-text">I have been using Liturgia since about 2006 when I started participating
                     formally in leading or arranging Masses and Funerals and Sacraments for adults and for children. I have even
                    used the section for dedication for a church. I find the tool very easy to navigate, very easy
                    to use, and comprehensive in its cover.</span><span class="quotation-mark2">"</span>
                   <span class="quote-attribution">- Fr C, Parish Priest, Archdiocese of Melbourne </span> 
                 </div>
              </div>
          </div>
          </div>

          <div class="carousel-card">
            <div class="cc-lhs">
              <div class="cc-lhs-text">
                  <div class="card-main-text">
                    <span class="quotation-mark1">"</span><span class="testimonial-main-text">I have been using Liturgia since about 2006 when I started participating
                     formally in leading or arranging Masses and Funerals and Sacraments for adults and for children. I have even
                    used the section for dedication for a church. I find the tool very easy to navigate, very easy
                    to use, and comprehensive in its cover.</span><span class="quotation-mark2">"</span>
                   <span class="quote-attribution">- Fr C, Parish Priest, Archdiocese of Melbourne </span> 
                 </div>
              </div>
          </div>
          </div>
          <div class="carousel-card">
            <div class="cc-lhs">
              <div class="cc-lhs-text">
                  <div class="card-main-text">
                    <span class="quotation-mark1">"</span><span class="testimonial-main-text">I have been using Liturgia since about 2006 when I started participating
                     formally in leading or arranging Masses and Funerals and Sacraments for adults and for children. I have even
                    used the section for dedication for a church. I find the tool very easy to navigate, very easy
                    to use, and comprehensive in its cover.</span><span class="quotation-mark2">"</span>
                   <span class="quote-attribution">- Fr C, Parish Priest, Archdiocese of Melbourne </span> 
                 </div>
              </div>
          </div>
          </div>
          <div class="carousel-card">
            <div class="cc-lhs">
              <div class="cc-lhs-text">
                  <div class="card-main-text">
                    <span class="quotation-mark1">"</span><span class="testimonial-main-text">I have been using Liturgia since about 2006 when I started participating
                     formally in leading or arranging Masses and Funerals and Sacraments for adults and for children. I have even
                    used the section for dedication for a church. I find the tool very easy to navigate, very easy
                    to use, and comprehensive in its cover.</span><span class="quotation-mark2">"</span>
                   <span class="quote-attribution">- Fr C, Parish Priest, Archdiocese of Melbourne </span> 
                 </div>
              </div>
          </div>
          </div>
          <!-- Duplicate the 4 cards for seamless looping -->
          <div class="carousel-card">
          <div class="cc-lhs">
              <div class="cc-lhs-text">
                  <div class="card-main-text">
                    <span class="quotation-mark1">"</span><span class="testimonial-main-text">I have been using Liturgia since about 2006 when I started participating
                     formally in leading or arranging Masses and Funerals and Sacraments for adults and for children. I have even
                    used the section for dedication for a church. I find the tool very easy to navigate, very easy
                    to use, and comprehensive in its cover.</span><span class="quotation-mark2">"</span>
                   <span class="quote-attribution">- Fr C, Parish Priest, Archdiocese of Melbourne </span> 
                 </div>
              </div>
          </div>
          </div>

          <div class="carousel-card">
            <div class="cc-lhs">
              <div class="cc-lhs-text">
                  <div class="card-main-text">
                    <span class="quotation-mark1">"</span><span class="testimonial-main-text">I have been using Liturgia since about 2006 when I started participating
                     formally in leading or arranging Masses and Funerals and Sacraments for adults and for children. I have even
                    used the section for dedication for a church. I find the tool very easy to navigate, very easy
                    to use, and comprehensive in its cover.</span><span class="quotation-mark2">"</span>
                   <span class="quote-attribution">- Fr C, Parish Priest, Archdiocese of Melbourne </span> 
                 </div>
              </div>
          </div>
          </div>
          <div class="carousel-card">
            <div class="cc-lhs">
              <div class="cc-lhs-text">
                  <div class="card-main-text">
                    <span class="quotation-mark1">"</span><span class="testimonial-main-text">I have been using Liturgia since about 2006 when I started participating
                     formally in leading or arranging Masses and Funerals and Sacraments for adults and for children. I have even
                    used the section for dedication for a church. I find the tool very easy to navigate, very easy
                    to use, and comprehensive in its cover.</span><span class="quotation-mark2">"</span>
                   <span class="quote-attribution">- Fr C, Parish Priest, Archdiocese of Melbourne </span> 
                 </div>
              </div>
          </div>
          </div>
          <div class="carousel-card">
            <div class="cc-lhs">
              <div class="cc-lhs-text">
                  <div class="card-main-text">
                    <span class="quotation-mark1">"</span><span class="testimonial-main-text">I have been using Liturgia since about 2006 when I started participating
                     formally in leading or arranging Masses and Funerals and Sacraments for adults and for children. I have even
                    used the section for dedication for a church. I find the tool very easy to navigate, very easy
                    to use, and comprehensive in its cover.</span><span class="quotation-mark2">"</span>
                   <span class="quote-attribution">- Fr C, Parish Priest, Archdiocese of Melbourne </span> 
                 </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    `;

    // Append the "testimonials" section after the "modules-pp" section
    const modules = document.querySelector('.modules');
    if (modules) {
      modules.after(testimonialsSection);
      console.log('Testimonials section added');

      // Initialize the auto-scrolling functionality
      const track = testimonialsSection.querySelector('.carousel-track');
      const cards = testimonialsSection.querySelectorAll('.carousel-card');
      const totalCards = cards.length;
      const cardWidth = cards[0].offsetWidth;
      let currentIndex = 0;

      function autoScroll() {
        currentIndex = (currentIndex + 1) % totalCards;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`; 

        // Reset to the start for seamless looping
        if (currentIndex === totalCards / 2) {
          setTimeout(() => {
            track.style.transition = 'none';
            currentIndex = 0;
            track.style.transform = `translateX(0)`;
            setTimeout(() => {
              track.style.transition = 'transform 1s ease-in-out';
            }, 50);
          }, 1000);
        }
      }

      // Start auto-scrolling every 10 seconds
          setInterval(autoScroll, 10000);

      // Resize listener to ensure proper alignment
      window.addEventListener('resize', () => {
        track.style.transition = 'none';
        track.style.transform = `translateX(-${currentIndex * cards[0].offsetWidth}px)`;
        setTimeout(() => {
          track.style.transition = 'transform 1s ease-in-out';
        }, 50);
      });
    }
  }
});

// Start observing the document body for changes
observer.observe(document.body, { childList: true, subtree: true });

  // Use event delegation to handle clicks on the div with aria-label="Open menu"
  document.body.addEventListener('click', (event) => {
    const divElement = event.target.closest('[aria-label="Open menu"]');
    if (divElement) {
      console.log('hello1');
      // Add a click event listener to the div
      console.log('hello2');
      // Select the <a> element with both classes "mr-element-xs" and "text-xl"
      const anchorElement = document.querySelector('.mr-element-xs.text-xl');
      console.log('hello3');
      // Toggle the class "logo-opacity-handle" on the <a> element
      if (anchorElement) {
        console.log('hello4');
        anchorElement.classList.toggle('logo-opacity-handle');
      }
    }
  });

// Function to initialize the custom dropdown
function initializeCustomDropdown() {
  const dropdownButton = document.querySelector('.dropdown-button');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  // Check if the dropdown elements exist and are not already initialized
  if (dropdownButton && dropdownMenu && !dropdownButton.hasAttribute('data-initialized')) {
    // Mark the button as initialized
    dropdownButton.setAttribute('data-initialized', 'true');

    // Add event listener to toggle the dropdown menu
    dropdownButton.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent click from propagating to the document
      const dropdown = dropdownButton.closest('.custom-dropdown'); // Get the parent .custom-dropdown
      console.log('Toggling class on:', dropdown); // Log the element being toggled
      dropdown.classList.toggle('active'); // Toggle the 'active' class
    });

    // Add event listener to handle menu item selection
    dropdownMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        // Update the button text with the selected item's text
        dropdownButton.textContent = e.target.textContent;

        // Get the selected value from the data-value attribute
        const selectedValue = e.target.getAttribute('data-value');
        console.log('Selected value:', selectedValue); // Log the selected value

        // Close the dropdown menu
        dropdownMenu.parentElement.classList.remove('active');

        // Call your updatePrice function with the selected value
        updatePrice(selectedValue);
      }
    });

    console.log('Custom dropdown initialized.');
  }
}

// Example updatePrice function
function updatePrice(value) {
  console.log('Updating price with value:', value);
  // Add your logic here to update the price based on the selected value
}

// MutationObserver to detect when the dropdown is added to the DOM
const observer2 = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // Check if the dropdown is now in the DOM
      const dropdownButton = document.querySelector('.dropdown-button');
      const dropdownMenu = document.querySelector('.dropdown-menu');

      if (dropdownButton && dropdownMenu) {
        // Initialize the custom dropdown
        initializeCustomDropdown();
      }
    }
  }
});

// Start observing the DOM for changes
observer2.observe(document.body, {
  childList: true, // Watch for added/removed child nodes
  subtree: true,   // Watch the entire DOM subtree
});

console.log('MutationObserver is now watching for dropdown elements.');

// Close the dropdown if the user clicks outside of it
document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-dropdown')) {
    console.log('Click outside detected. Closing dropdown.');
    document.querySelectorAll('.custom-dropdown').forEach((dropdown) => {
      dropdown.classList.remove('active'); // Remove 'active' class
    });
  }
});