const observer = new MutationObserver((mutationsList, observer) => {
  let modulesSection = document.querySelector('.modules-pp');
  if (!modulesSection) {
    // Create the "modules-pp" section
    modulesSection = document.createElement('section');
    modulesSection.className = 'modules-pp';

    // Add the pricing calculator HTML
    modulesSection.innerHTML = `
    <div class="pricing-calculator-container">
    <div class="pricing-wrapper-div">
    <div class="calculator-container">
        <div class="controls">
          <label for="pricing-class">Select Pricing Class</label>
          <div class="custom-dropdown">
            <button class="dropdown-button">Up to 5 Users</button>
            <ul class="dropdown-menu">
              <li data-value="355">Up to 5 Users</li>
              <li data-value="435">Up to 10 Users</li>
              <li data-value="510">Up to 20 Users</li>
              <li data-value="565">Up to 30 Users</li>
              <li data-value="695">30+ Users</li>
            </ul>
          </div>
        </div>
        <div class="price-card">
          <div class="calculator-price-section" style="display: flex; align-items: center; gap: 0.5rem;">
            <div class="price" id="price">$355</div>
            <div class="gst"></div>
            <div class="discount-note" id="discount-note" style="color: #4caf50; font-size: 0.85rem;"></div>
          </div>
          <div class="annual-text">
            <div class="calc-text">billed annually*</div>
          </div>
          <button onclick="getStarted()">Get Started <span class="arrow-symbol"> →</span></button>
        </div>
      </div>
      
      <!-- Updated RHS Bulk Licensing / Diocesan Promo Section -->
      <div class="rhs-bulk-licensing-text diocesan-promo-section">
        <h3 class="diocesan-promo-heading">Diocesan License</h3>
        <div class="diocesan-promo-content">
          <div class="diocesan-promo-details">
            <p>Liturgia offers a 35% discount when a diocesan office subscribes for each parish in the diocese, or when a Catholic Education Office subscribes for each school in the diocese. The diocesan package also includes a two-hour online training session. Contact Liturgy Brisbane for more information and we’ll be happy to assist.</p>
            <div class="diocesan-promo-contact">
              <a href="/support" class="promo-contact-button">
                Contact Us <span class="arrow-symbol"> →</span>
              </a>
              
            </div>
          </div>
          <div class="diocesan-promo-visuals">
            <div class="promo-discount-graphic">
              <span>20%</span>
              <span class="promo-discount-text">DISCOUNT</span>
            </div>
            <div class="promo-price-box">
              <span></span>
              $275
              <span>per Parish / School</span>
            </div>
          </div>
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
      </div>
      <!-- End of Updated Section -->
    </div>
      
    `;

    // Append the "modules-pp" section to the DOM
    document.querySelector('header').after(modulesSection);

    // Add CSS for the new Diocesan Promo Section (Desktop and base styles)
    const desktopPromoStyle = document.createElement('style');
    desktopPromoStyle.textContent = `
      .pricing-calculator-container {
        display: flex;
        gap: 1rem; 
        padding: 1rem;
        align-items: stretch; /* Make children stretch to the same height */
      }

      .calculator-container {
        flex-shrink: 0; /* Prevent calculator from shrinking */
        /* Consider adding flex-basis or max-width if needed */
        /* e.g., flex: 0 0 400px; or max-width: 450px; */
      }

      .rhs-bulk-licensing-text.diocesan-promo-section {
        flex-grow: 1.5; /* Makes this section larger relative to calculator */
        display: flex; /* Enable flex for internal layout */
        flex-direction: column;
        background-color: #f0f2f5;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07);
        color: #333;
        margin-left: 1.5rem; /* Default spacing from calculator */
      }

      .diocesan-promo-heading {
        font-size: 2rem;
        font-weight: 700;
        color: #1a2533;
        margin-bottom: 1.5rem;
        text-align: center;
      }

      .diocesan-promo-content {
        display: flex;
        flex-direction: column; /* Default stack for mobile-first approach */
        gap: 2rem;
        flex-grow: 1; /* Allows content to fill vertical space */
      }

      .diocesan-promo-details {
        display: flex;
        flex-direction: column;
        flex-grow: 1; /* Allow details to take available space */
      }

      .diocesan-promo-details p {
        font-size: 1rem;
        line-height: 1.7;
        color: #4a4a4a;
        margin-bottom: 1.5rem;
        flex-grow: 1; /* Allow paragraph to take space before button */
      }
      
      .diocesan-promo-contact {
         margin-top: auto; /* Pushes button to the bottom of .diocesan-promo-details */
      }

      .promo-contact-button {
        display: inline-block;
        background-color: #e6007e; /* Liturgia brand color (pink) */
        color: white;
        padding: 0.85rem 1.8rem;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 1rem;
        transition: background-color 0.3s ease, transform 0.2s ease;
        text-align: center;
        border: none;
        cursor: pointer;
      }

      .promo-contact-button:hover {
        background-color: #c00069; /* Darker shade of pink */
        transform: translateY(-2px);
      }

      .promo-contact-button .arrow-symbol {
        margin-left: 0.5em;
        transition: transform 0.3s ease;
      }
      .promo-contact-button:hover .arrow-symbol {
        transform: translateX(3px);
      }

      .diocesan-promo-visuals {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        margin-top: 1rem; /* Spacing when stacked vertically */
      }

      .promo-discount-graphic {
        background: linear-gradient(135deg, #e6007e, #b30061);
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 10px;
        text-align: center;
        min-width: 180px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      }

      .promo-discount-graphic span:first-child {
        display: block;
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1;
      }

      .promo-discount-graphic .promo-discount-text {
        display: block;
        font-size: 1.1rem;
        text-transform: uppercase;
        margin-top: 0.5rem;
        letter-spacing: 0.5px;
      }

      .promo-price-box {
        background-color: #1a2533; /* Dark blue-grey */
        color: white;
        padding: 1.25rem 1.75rem;
        border-radius: 10px;
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
        min-width: 220px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      }

      .promo-price-box span {
        display: block;
        font-size: 0.85rem;
        font-weight: 400;
        color: #b0bec5;
      }
       .promo-price-box span:first-child {
        margin-bottom: 0.3rem;
      }
      .promo-price-box span:last-child {
        margin-top: 0.3rem;
      }

      /* Desktop layout adjustments (larger screens) */
      @media (min-width: 1024px) {
        .pricing-calculator-container {
            gap: 2rem; /* Larger gap for desktop */
            padding: 2rem;
        }
        .rhs-bulk-licensing-text.diocesan-promo-section {
            margin-left: 2rem;
        }
        .diocesan-promo-content {
          flex-direction: row; /* Side-by-side layout */
          align-items: flex-start; 
          gap: 2.5rem;
        }
        .diocesan-promo-details {
          flex: 1.5; /* More space for text */
          text-align: left;
        }
        .diocesan-promo-heading {
          text-align: left;
        }
        .diocesan-promo-visuals {
          flex: 1; /* Space for visuals */
          align-items: flex-end; /* Align visuals to the right of their container */
          margin-top: 0;
        }
        .promo-discount-graphic, .promo-price-box {
            width: 100%; 
            max-width: 250px; /* Cap width of visual elements */
        }
        .diocesan-promo-contact {
           align-self: flex-start; /* Align button to the left in its container */
        }
      }
    \`;
    document.head.appendChild(desktopPromoStyle);

    // Add mobile-specific CSS dynamically (appending to existing styles)
    const mobileStyle = document.createElement('style');
    let existingMobileStyles = \`
  @media (max-width: 768px) {
    /* Modules section */
    .modules-pp {
      min-height: 500px; /* Extend height for mobile */
      padding: 1.5rem;
      box-sizing: border-box;
      height: auto !important; /* Changed from 60vh to auto to accommodate content */
    }

    /* Pricing container stacks vertically on mobile */
    .pricing-calculator-container {
        flex-direction: column;
        align-items: center; 
        gap: 1.5rem; /* Space between calculator and promo section */
        padding: 0.5rem; /* Reduced padding for mobile */
    }
    
    /* Calculator container */
    .calculator-container {
      padding: 1rem;
      max-width: 100%; /* Full width on mobile */
      flex-direction: column;
      height: auto; /* Auto height */
      width: 100%; /* Ensure it takes full width */
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

    /* Bulk licensing text (now Diocesan Promo Section) for mobile */
    .rhs-bulk-licensing-text.diocesan-promo-section {
      width: 100%; /* Full width on mobile */
      margin-left: 0;
      margin-top: 0; /* Gap handled by parent .pricing-calculator-container */
      padding: 1.5rem;
      box-sizing: border-box;
    }
    .diocesan-promo-heading {
      font-size: 1.5rem; 
    }
    .diocesan-promo-details p {
      font-size: 0.9rem;
    }
    .promo-contact-button {
      padding: 0.7rem 1.2rem;
      font-size: 0.9rem;
      width: 100%; 
      box-sizing: border-box;
    }
    .diocesan-promo-visuals {
      gap: 1rem;
      width: 100%; /* Ensure visuals container takes full width */
    }
    .promo-discount-graphic, .promo-price-box {
      width: auto; /* Adjust width based on content */
      min-width: 0; /* Remove min-width for more flexibility */
      max-width: 90%; /* Prevent from being too wide */
      margin-left: auto;
      margin-right: auto;
    }
    .promo-discount-graphic span:first-child {
      font-size: 2.5rem;
    }
    .promo-discount-graphic .promo-discount-text {
      font-size: 0.9rem;
    }
    .promo-price-box {
      font-size: 1.3rem;
    }
    .promo-price-box span {
      font-size: 0.75rem;
    }
    
    /* Trusted-by-content adjustments */
    .trusted-by-content {
      display: flex;
      flex-direction: column; 
      align-items: center; 
      gap: 0.5rem; 
      margin-top: 1.5rem; /* Increased margin from content above */
      padding: 0.5rem;
    }

    .trusted-by-text {
      font-size: 0.9rem;
      font-weight: bold; 
      text-align: center;
      margin-bottom: 0.5rem;
      width: 100%;
    }

    .trusted-by-logos {
      display: flex;
      justify-content: center;
      flex-wrap: wrap; 
      gap: 1.5rem; /* Adjusted gap */
      width: 100%;
    }

    .tb-logo-img {
      max-width: 50px; 
      height: auto;
    }

    .text-animation {
      text-align: center;
    }

    .flex.items-center.gap-3.r-mt-8 { /* More specific selector if needed */
      align-items: center;
      justify-content: center; /* Ensure centering */
    }

    .testimonials {
      height: auto; /* Adjust height for mobile */
      min-height: 300px; /* Example min-height */
    }

    .r-mt-8 {
      justify-content: center;
    }
  }
`;
    // Note: The original mobileStyle.textContent is replaced here with a combined version.
    // If you had other styles in the original mobileStyle.textContent not shown in the prompt,
    // you'll need to merge them manually.
    mobileStyle.textContent = existingMobileStyles;
    document.head.appendChild(mobileStyle);
  }
});

// Start observing the document body for changes
observer.observe(document.body, { childList: true, subtree: true });


// Function to initialize the custom dropdown
function initializeCustomDropdown() {
  const dropdownButton = document.querySelector('.dropdown-button');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (dropdownButton && dropdownMenu && !dropdownButton.hasAttribute('data-initialized')) {
    dropdownButton.setAttribute('data-initialized', 'true');
    dropdownButton.addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdown = dropdownButton.closest('.custom-dropdown');
      dropdown.classList.toggle('active');
    });
    dropdownMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        dropdownButton.textContent = e.target.textContent;
        const selectedValue = e.target.getAttribute('data-value');
        dropdownMenu.parentElement.classList.remove('active');
        updatePrice(selectedValue);
      }
    });
  }
}

function updatePrice(value) {
  const priceElement = document.getElementById('price');
  const discountNote = document.getElementById('discount-note');
  const dropdownButton = document.querySelector('.dropdown-button');
  const selectedText = dropdownButton.textContent.trim();

  if (priceElement) {
    priceElement.textContent = `$${value} `;
    if (selectedText.includes("Diocesan")) {
      discountNote.textContent = "35% discount applied";
    } else {
      discountNote.textContent = "";
    }
  } else {
    console.error('Price element not found in the DOM.');
  }
}

const observer2 = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      const dropdownButton = document.querySelector('.dropdown-button');
      const dropdownMenu = document.querySelector('.dropdown-menu');
      if (dropdownButton && dropdownMenu) {
        initializeCustomDropdown();
      }
    }
  }
});

observer2.observe(document.body, {
  childList: true,
  subtree: true,
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-dropdown')) {
    document.querySelectorAll('.custom-dropdown').forEach((dropdown) => {
      dropdown.classList.remove('active');
    });
  }
});

function getStarted() {
  const dropdownButton = document.querySelector('.dropdown-button');
  if (!dropdownButton) {
    console.error('Dropdown button not found.');
    return;
  }
  const selectedText = dropdownButton.textContent.trim();
  let redirectUrl = '';

  switch (selectedText) {
    case 'Up to 5 Users':
      redirectUrl = 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia';
      break;
    case 'Up to 10 Users':
      redirectUrl = 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia-10-users';
      break;
    case 'Up to 20 Users':
      redirectUrl = 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia-20-users';
      break;
    case 'Up to 30 Users':
      redirectUrl = 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia-20-users-1';
      break;
    case '30+ Users':
      redirectUrl = 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia-30-users';
      break;
    default:
      console.error('Unknown pricing class selected: ', selectedText);
      redirectUrl = 'https://shop.liturgybrisbane.net.au/collections/liturgia';
      break;
  }

  if (redirectUrl) {
    if (selectedText.includes('Diocesan')) {
      window.location.href = redirectUrl;
    } else {
      window.open(redirectUrl, '_blank');
    }
  }
}