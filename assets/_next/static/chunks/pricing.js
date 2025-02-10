const observer = new MutationObserver((mutationsList, observer) => {
  let modulesSection = document.querySelector('.modules-pp');
  if (!modulesSection) {
    // Create the "modules-pp" section
    modulesSection = document.createElement('section');
    modulesSection.className = 'modules-pp';

    // Add the pricing calculator HTML
    modulesSection.innerHTML = `
    <div class="pricing-calculator-container">
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
            <div class="calc-text">billed annually*</div>
          </div>
          <button onclick="getStarted()">Get Started <span class="arrow-symbol"> →</span></button>
        </div>
      </div>
      <div class="rhs-bulk-licensing-text">
      Liturgia offers competitive rates for organizations interested in bulk purchasing. Contact us to learn more about our flexible options. 
      </div>
    </div>
      <div class="trusted-by-content">
        <div class="trusted-by-text">Trusted By</div>
        <div class="trusted-by-logos">
          <div class="tb-logo-1"><img class="tb-logo-img" src="assets/_next/image/BCE-logo.jpg"></div>
          <div class="tb-logo-2"><img class="tb-logo-img" src="assets/_next/image/logo_dbb.svg"></div>
          <div class="tb-logo-3"><img class="tb-logo-img" src="assets/_next/image/logo_cs_inline_colour.png"></div>
          <div class="tb-logo-4"><img class="tb-logo-img" src="assets/_next/image/crest-csdp-horizontal-colour.svg"></div>
        </div>
      </div>

  
    `;

    // Append the "modules-pp" section to the DOM
    document.querySelector('header').after(modulesSection);


    // Add mobile-specific CSS dynamically
const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
  @media (max-width: 768px) {
    /* Modules section */
    .modules-pp {
      min-height: 500px; /* Extend height for mobile */
      padding: 1.5rem;
      box-sizing: border-box;
      height: 60vh !important;
    }

    /* Calculator container */
    .calculator-container {
      padding: 1rem;
      max-width: 90%;
      flex-direction: column;
      height: 100%;
    }

    /* Dropdown controls */
    .controls label {
      font-size: 0.9rem;
    }

    .dropdown-button {
      padding: 0.6rem;
      font-size: 0.9rem;
    }

    .dropdown-menu li {
      padding: 0.6rem;
      font-size: 0.9rem;
    }

    /* Pricing card */
    .price-card {
      padding: 1rem;
      font-size: 0.9rem;
    }

    .price {
      font-size: 2rem;
    }

    .gst {
      font-size: 0.8rem;
    }

    .annual-text {
      font-size: 0.8rem;
    }

    .price-card button {
      font-size: 0.9rem;
      padding: 0.6rem 1rem;
    }

    /* Bulk licensing text */
    .bulk-licensing-text {
      font-size: 0.8rem;
      line-height: 1.4;
    }

    /* Trusted-by-content adjustments */
    .trusted-by-content {
      display: flex;
      flex-direction: column; /* Stack text and logos vertically */
      align-items: center; /* Center-align text and logos */
      gap: 0.5rem; /* Add spacing between text and logos */
      margin-top: 1rem;
      padding: 0.5rem;
    }

    .trusted-by-text {
      font-size: 0.9rem;
      font-weight: bold; /* Emphasize the text */
      text-align: center;
      margin-bottom: 0.5rem;
      width: 100%;
      flex-direction: column;
    }

    .trusted-by-logos {
      display: flex;
      justify-content: center;
      flex-wrap: wrap; /* Allow logos to wrap */
      gap: 2.5rem; /* Reduce gap between logos */
      width: 100%;
    }

    .tb-logo-img {
      max-width: 50px; /* Smaller logos */
      height: auto;
    }

    .text-animation {
      text-align: center;
    }  

    .flex items-center gap-3 r-mt-8 {
      align-items: center;
    }  
    
    .testimonials {
    height: 45vh;
    }
    
    .r-mt-8 {
    justify-content: center;
    }
  }
`;
document.head.appendChild(mobileStyle);
}
});

// Start observing the document body for changes
observer.observe(document.body, { childList: true, subtree: true });



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
      dropdown.classList.toggle('active'); // Toggle the 'active' class
    });

    // Add event listener to handle menu item selection
    dropdownMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        // Update the button text with the selected item's text
        dropdownButton.textContent = e.target.textContent;

        // Get the selected value from the data-value attribute
        const selectedValue = e.target.getAttribute('data-value');

        // Close the dropdown menu
        dropdownMenu.parentElement.classList.remove('active');

        // Call your updatePrice function with the selected value
        updatePrice(selectedValue);
      }
    });


  }
}

function updatePrice(value) {

  // Find the price element in the DOM
  const priceElement = document.getElementById('price');

  // Check if the price element exists
  if (priceElement) {
    // Update the text content of the price element
    priceElement.textContent = `$${value}`;
  } else {
    console.error('Price element not found in the DOM.');
  }
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



// Close the dropdown if the user clicks outside of it
document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-dropdown')) {
    document.querySelectorAll('.custom-dropdown').forEach((dropdown) => {
      dropdown.classList.remove('active'); // Remove 'active' class
    });
  }
});