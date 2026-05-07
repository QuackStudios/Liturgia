const pricingPlans = {
  parishes: {
    label: 'Parishes',
    defaultUsers: 'up-to-5',
    annualText: 'billed annually',
    buttonText: 'Purchase a Licence',
    users: {
      'up-to-5': {
        label: 'Up to 5 Users',
        price: 355,
        note: '',
        url: 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia',
      },
      'up-to-10': {
        label: 'Up to 10 Users',
        price: 435,
        note: '',
        url: 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia-10-users',
      },
      'up-to-20': {
        label: 'Up to 20 Users',
        price: 510,
        note: '',
        url: 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia-20-users',
      },
      'up-to-30': {
        label: 'Up to 30 Users',
        price: 565,
        note: '',
        url: 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia-20-users-1',
      },
      '30-plus': {
        label: '30+ Users',
        price: 695,
        note: '',
        url: 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia-30-users',
      },
    },
  },
  schools: {
    label: 'Schools',
    defaultUsers: 'up-to-5',
    annualText: 'billed annually',
    buttonText: 'Purchase a Licence',
    users: {
      'up-to-5': {
        label: 'Up to 5 Users',
        price: 355,
        note: '',
        url: 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia',
      },
      'up-to-10': {
        label: 'Up to 10 Users',
        price: 435,
        note: '',
        url: 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia-10-users',
      },
      'up-to-20': {
        label: 'Up to 20 Users',
        price: 510,
        note: '',
        url: 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia-20-users',
      },
      'up-to-30': {
        label: 'Up to 30 Users',
        price: 565,
        note: '',
        url: 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia-20-users-1',
      },
      '30-plus': {
        label: '30+ Users',
        price: 695,
        note: '',
        url: 'https://shop.liturgybrisbane.net.au/collections/liturgia/products/liturgia-30-users',
      },
    },
  },
};

const promoPlans = {
  diocesan: {
    tabLabel: 'Diocesan Parish Licence',
    heading: 'Diocesan Parish Licence',
    body: 'Liturgia offers a 23% discount when a diocesan office subscribes for each parish in the diocese. The diocesan package also includes a 90-minute online training session. Contact Liturgy Brisbane for more information and we’ll be happy to assist.',
    discount: '23%',
    price: '$275',
    priceLabel: 'per Parish',
  },
  groupSchools: {
    tabLabel: 'Group Schools Licence',
    heading: 'Group Schools Licence',
    body: 'Liturgia offers a 60% discount when a Catholic Education Office subscribes for each school in the diocese. The group package also includes a 90-minute online training session. Contact Liturgy Brisbane for more information and we’ll be happy to assist.',
    discount: '60%',
    price: '$145',
    priceLabel: 'per School',
  },
};

const observer = new MutationObserver((mutationsList, observer) => {
  let modulesSection = document.querySelector('.modules-pp');
  if (!modulesSection) {
    modulesSection = document.createElement('section');
    modulesSection.className = 'modules-pp';

    modulesSection.innerHTML = `
    <div class="pricing-calculator-container">
    <div class="pricing-wrapper-div">
    <div class="calculator-container">
        <div class="controls pricing-controls-grid">
          <div class="pricing-control-group">
            <label for="pricing-audience">Select Licence Type</label>
            <div class="pricing-type-switcher" aria-label="Licence type selector">
              <button class="pricing-type-switch-button pricing-type-button active" type="button" data-value="parishes">Parishes</button>
              <button class="pricing-type-switch-button pricing-type-button" type="button" data-value="schools">Schools</button>
            </div>
          </div>

          <div class="pricing-control-group">
            <label for="pricing-class">Select Number of Users</label>
            <div class="custom-dropdown pricing-users-dropdown" data-dropdown-type="pricing-users">
              <button class="dropdown-button pricing-users-button" type="button">Up to 5 Users</button>
              <ul class="dropdown-menu pricing-users-menu"></ul>
            </div>
          </div>
        </div>

        <div class="price-card">
          <div class="calculator-price-section" style="display: flex; align-items: center; gap: 0.5rem;">
            <div class="price" id="price">$355</div>
            <div class="gst"></div>
            <div class="discount-note" id="discount-note" style="color: #4caf50; font-size: 0.85rem;"></div>
          </div>
          <div class="annual-text">
            <div class="calc-text" id="calc-text">billed annually</div>
          </div>
          <button onclick="getStarted()" id="pricing-purchase-button">Purchase a Licence <span class="arrow-symbol"> →</span></button>
        </div>
      </div>
      
      <div class="rhs-bulk-licensing-text diocesan-promo-section" data-active-promo="diocesan">
        <div class="promo-switcher" aria-label="Bulk licence type selector">
          <button class="promo-switch-button active" type="button" data-promo-type="diocesan">Diocesan Parish Licence</button>
          <button class="promo-switch-button" type="button" data-promo-type="groupSchools">Group Schools Licence</button>
        </div>

        <h3 class="diocesan-promo-heading">Diocesan Parish Licence</h3>

        <div class="diocesan-promo-content">
          <div class="diocesan-promo-details">
            <p>Liturgia offers a 23% discount when a diocesan office subscribes for each parish in the diocese. The diocesan package also includes a 90-minute online training session. Contact Liturgy Brisbane for more information and we’ll be happy to assist.</p>
            <div class="diocesan-promo-contact">
              <a href="/support" class="promo-contact-button">
                Contact Us <span class="arrow-symbol"> →</span>
              </a>
            </div>
          </div>

          <div class="diocesan-promo-visuals">
            <div class="promo-discount-graphic">
              <span class="promo-discount-value">23%</span>
              <span class="promo-discount-text">DISCOUNT</span>
            </div>
            <div class="promo-price-box">
              <span></span>
              <strong class="promo-price-value">$275</strong>
              <span class="promo-price-label">per Parish</span>
            </div>
          </div>
        </div>
      </div>

      <div class="trusted-by-content">
        <div class="trusted-by-text">Trusted by</div>
        <div class="trusted-by-logos">
          <div class="tb-logo-1"><img class="tb-logo-img" src="assets/_next/image/BCE-logo.jpg"></div>
          <div class="tb-logo-2"><img class="tb-logo-img" src="assets/_next/image/logo_dbb.svg"></div>
          <div class="tb-logo-3"><img class="tb-logo-img" src="assets/_next/image/logo_cs_inline_colour.png"></div>
          <div class="tb-logo-4"><img class="tb-logo-img" src="assets/_next/image/crest-csdp-horizontal-colour.svg"></div>
           <div class="tb-logo-4"><img class="tb-logo-img" src="rockhampton-logo.png"></div>
        </div>
      </div>
    </div>
    </div>
    `;

    document.querySelector('header').after(modulesSection);

    const desktopPromoStyle = document.createElement('style');
    desktopPromoStyle.textContent = `
      .pricing-calculator-container {
        display: flex;
        gap: 1rem; 
        padding: 1rem;
        align-items: center;
      }

      .calculator-container {
        flex-shrink: 0;
      }

      .pricing-controls-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .pricing-control-group {
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
      }

      .custom-dropdown {
        position: relative;
      }

      .dropdown-button {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #ffffff;
        border: 1px solid rgba(26, 37, 51, 0.14);
        border-radius: 8px;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
        color: #4a4a4a;
        cursor: pointer;
      }

      .dropdown-button::after {
        content: '▾';
        font-size: 0.85rem;
        color: #777;
        margin-left: 0.75rem;
      }

      .dropdown-menu {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        right: 0;
        z-index: 50;
        display: none;
        list-style: none;
        margin: 0;
        padding: 0.35rem;
        background: #ffffff;
        border: 1px solid rgba(26, 37, 51, 0.12);
        border-radius: 10px;
        box-shadow: 0 14px 32px rgba(0, 0, 0, 0.14);
      }

      .custom-dropdown.active .dropdown-menu {
        display: block;
      }

      .dropdown-menu li {
        border-radius: 7px;
        cursor: pointer;
        transition: background-color 0.2s ease, color 0.2s ease;
      }

      .dropdown-menu li:hover {
        background-color: #f0f2f5;
      }

      .calc-sub-text {
        display: block;
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.25;
        opacity: 0.85;
      }

      .calc-sub-text-feature {
        font-size: 0.9rem;
        opacity: 0.95;
      }

      .calc-asterisk {
        color: #e6007e;
        font-size: 1.05rem;
        font-weight: 800;
        line-height: 1;
      }

      .rhs-bulk-licensing-text.diocesan-promo-section {
        flex-grow: 1.5;
        display: flex;
        flex-direction: column;
        background-color: #f0f2f5;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07);
        color: #333;
        margin-left: 1.5rem;
      }

      .pricing-type-switcher,
      .promo-switcher {
        display: inline-grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.35rem;
        width: 100%;
        max-width: 520px;
        background: rgba(255, 255, 255, 0.78);
        border: 1px solid rgba(26, 37, 51, 0.1);
        border-radius: 999px;
        padding: 0.35rem;
        margin-bottom: 1.4rem;
      }

      .pricing-type-switcher {
        max-width: none;
        margin-bottom: 0;
      }

      .pricing-type-switch-button,
      .promo-switch-button {
        border: 0;
        background: transparent;
        color: #1a2533;
        cursor: pointer;
        border-radius: 999px;
        font-weight: 700;
        padding: 0.75rem 1rem;
        font-size: 90% !important;
        transition: background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
      }

      .pricing-type-switch-button.active,
      .promo-switch-button.active {
        background: #1a2533;
        color: #ffffff;
        box-shadow: 0 8px 20px rgba(26, 37, 51, 0.18);
      }

      .pricing-type-switch-button:hover,
      .promo-switch-button:hover {
        transform: translateY(-1px);
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
        flex-direction: column;
        gap: 2rem;
        flex-grow: 1;
      }

      .diocesan-promo-details {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      .diocesan-promo-details p {
        font-size: 1rem;
        line-height: 1.7;
        color: #4a4a4a;
        margin-bottom: 1.5rem;
        flex-grow: 1;
      }
      
      .diocesan-promo-contact {
        margin-top: auto;
      }

      .promo-contact-button {
        display: inline-block;
        background-color: #e6007e;
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
        background-color: #c00069;
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
        margin-top: 1rem;
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
        background-color: #1a2533;
        color: white;
        padding: 1.25rem 1.75rem;
        border-radius: 10px;
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
        min-width: 220px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      }

      .promo-price-value {
        display: block;
        font-size: 2.5rem;
        line-height: 1;
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

      @media (min-width: 1024px) {
        .pricing-calculator-container {
          gap: 2rem;
          padding: 2rem;
        }

        .rhs-bulk-licensing-text.diocesan-promo-section {
          margin-left: 2rem;
        }

        .diocesan-promo-content {
          flex-direction: row;
          align-items: flex-start; 
          gap: 2.5rem;
        }

        .diocesan-promo-details {
          flex: 1.5;
          text-align: left;
        }

        .diocesan-promo-heading {
          text-align: left;
        }

        .diocesan-promo-visuals {
          flex: 1;
          align-items: flex-end;
          margin-top: 0;
        }

        .promo-discount-graphic,
        .promo-price-box {
          width: 100%; 
          max-width: 250px;
        }

        .diocesan-promo-contact {
          align-self: flex-start;
        }
      }
    `;
    document.head.appendChild(desktopPromoStyle);

    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
  @media (max-width: 768px) {
    .modules-pp {
      min-height: 500px;
      padding: 1.5rem;
      box-sizing: border-box;
      height: auto !important;
    }

    .pricing-calculator-container {
      flex-direction: column;
      align-items: center; 
      gap: 1.5rem;
      padding: 0.5rem;
    }
    
    .calculator-container {
      padding: 1rem;
      max-width: 100%;
      flex-direction: column;
      height: auto;
      width: 100%;
    }

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

    .pricing-type-switcher,
    .promo-switcher {
      max-width: none;
      border-radius: 16px;
    }

    .pricing-type-switch-button,
    .promo-switch-button {
      border-radius: 12px;
      padding: 0.65rem 0.55rem;
      font-size: 0.8rem;
    }

    .rhs-bulk-licensing-text.diocesan-promo-section {
      width: 100%;
      margin-left: 0;
      margin-top: 0;
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
      width: 100%;
    }

    .promo-discount-graphic,
    .promo-price-box {
      width: auto;
      min-width: 0;
      max-width: 90%;
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

    .promo-price-value {
      font-size: 1.3rem;
    }

    .promo-price-box span {
      font-size: 0.75rem;
    }
    
    .trusted-by-content {
      display: flex;
      flex-direction: column; 
      align-items: center; 
      gap: 0.5rem; 
      margin-top: 1.5rem;
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
      gap: 1.5rem;
      width: 100%;
    }

    .tb-logo-img {
      max-width: 50px; 
      height: auto;
    }

    .text-animation {
      text-align: center;
    }

    .flex.items-center.gap-3.r-mt-8 {
      align-items: center;
      justify-content: center;
    }

    .testimonials {
      height: auto;
      min-height: 300px;
    }

    .r-mt-8 {
      justify-content: center;
    }
  }
`;
    document.head.appendChild(mobileStyle);

    initializeCustomDropdowns();
    initializePricingTypeSwitcher();
    initializePromoSwitcher();
    updateUserDropdown('parishes');
    updatePrice();
  }
});

observer.observe(document.body, { childList: true, subtree: true });

function initializeCustomDropdowns() {
  const dropdowns = document.querySelectorAll('.custom-dropdown');

  dropdowns.forEach((dropdown) => {
    const dropdownButton = dropdown.querySelector('.dropdown-button');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    if (dropdownButton && dropdownMenu && !dropdownButton.hasAttribute('data-initialized')) {
      dropdownButton.setAttribute('data-initialized', 'true');

      dropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();

        document.querySelectorAll('.custom-dropdown').forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove('active');
          }
        });

        dropdown.classList.toggle('active');
      });

      dropdownMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
          dropdownButton.textContent = e.target.textContent;
          dropdownButton.setAttribute('data-value', e.target.getAttribute('data-value'));
          dropdown.classList.remove('active');
          updatePrice();
        }
      });
    }
  });
}

function initializePricingTypeSwitcher() {
  const pricingTypeButtons = document.querySelectorAll('.pricing-type-switch-button');

  if (!pricingTypeButtons.length) {
    return;
  }

  pricingTypeButtons.forEach((button) => {
    if (button.hasAttribute('data-initialized')) {
      return;
    }

    button.setAttribute('data-initialized', 'true');

    button.addEventListener('click', () => {
      const selectedType = button.getAttribute('data-value') || 'parishes';

      pricingTypeButtons.forEach((typeButton) => {
        typeButton.classList.toggle('active', typeButton.getAttribute('data-value') === selectedType);
      });

      updateUserDropdown(selectedType);
      updatePrice();
    });
  });
}

function updateUserDropdown(pricingType) {
  const selectedType = pricingPlans[pricingType] ? pricingType : 'parishes';
  const usersDropdown = document.querySelector('.pricing-users-dropdown');
  const usersButton = document.querySelector('.pricing-users-button');
  const usersMenu = document.querySelector('.pricing-users-menu');
  const plan = pricingPlans[selectedType];

  if (!usersDropdown || !usersButton || !usersMenu || !plan) {
    return;
  }

  usersMenu.innerHTML = Object.keys(plan.users).map((userKey) => {
    const userOption = plan.users[userKey];
    return `<li data-value="${userKey}">${userOption.label}</li>`;
  }).join('');

  const defaultUserKey = plan.defaultUsers;

  usersButton.textContent = plan.users[defaultUserKey].label;
  usersButton.setAttribute('data-value', defaultUserKey);
  usersDropdown.setAttribute('data-selected-pricing-type', selectedType);
  usersButton.disabled = false;
}

function updatePrice() {
  const priceElement = document.getElementById('price');
  const discountNote = document.getElementById('discount-note');
  const activeTypeButton = document.querySelector('.pricing-type-switch-button.active');
  const usersButton = document.querySelector('.pricing-users-button');
  const calcText = document.getElementById('calc-text');
  const purchaseButton = document.getElementById('pricing-purchase-button');

  const selectedType = activeTypeButton && activeTypeButton.getAttribute('data-value') ? activeTypeButton.getAttribute('data-value') : 'parishes';
  const plan = pricingPlans[selectedType] || pricingPlans.parishes;
  const selectedUserKey = usersButton && usersButton.getAttribute('data-value') ? usersButton.getAttribute('data-value') : plan.defaultUsers;
  const selectedUserPlan = plan.users[selectedUserKey] || plan.users[plan.defaultUsers];

  if (priceElement) {
    priceElement.textContent = `$${selectedUserPlan.price}`;
  } else {
    console.error('Price element not found in the DOM.');
  }

  if (discountNote) {
    discountNote.textContent = selectedUserPlan.note || '';
  }

  if (calcText) {
    calcText.innerHTML = plan.annualText;
  }

  if (purchaseButton) {
    purchaseButton.innerHTML = `${plan.buttonText} <span class="arrow-symbol"> →</span>`;
  }
}

function initializePromoSwitcher() {
  const promoSection = document.querySelector('.rhs-bulk-licensing-text.diocesan-promo-section');
  const promoButtons = document.querySelectorAll('.promo-switch-button');

  if (!promoSection || !promoButtons.length || promoSection.hasAttribute('data-promo-initialized')) {
    return;
  }

  promoSection.setAttribute('data-promo-initialized', 'true');

  promoButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const promoType = button.getAttribute('data-promo-type');
      updatePromoSection(promoType);
    });
  });
}

function updatePromoSection(promoType) {
  const promo = promoPlans[promoType] || promoPlans.diocesan;
  const promoSection = document.querySelector('.rhs-bulk-licensing-text.diocesan-promo-section');
  const heading = document.querySelector('.diocesan-promo-heading');
  const body = document.querySelector('.diocesan-promo-details p');
  const discountValue = document.querySelector('.promo-discount-value');
  const priceValue = document.querySelector('.promo-price-value');
  const priceLabel = document.querySelector('.promo-price-label');

  if (promoSection) {
    promoSection.setAttribute('data-active-promo', promoType);
  }

  document.querySelectorAll('.promo-switch-button').forEach((button) => {
    button.classList.toggle('active', button.getAttribute('data-promo-type') === promoType);
  });

  if (heading) heading.textContent = promo.heading;
  if (body) body.textContent = promo.body;
  if (discountValue) discountValue.textContent = promo.discount;
  if (priceValue) priceValue.textContent = promo.price;
  if (priceLabel) priceLabel.textContent = promo.priceLabel;
}

const observer2 = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      const dropdownButton = document.querySelector('.dropdown-button');
      const dropdownMenu = document.querySelector('.dropdown-menu');

      if (dropdownButton && dropdownMenu) {
        initializeCustomDropdowns();
        initializePricingTypeSwitcher();
        initializePromoSwitcher();
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
  const activeTypeButton = document.querySelector('.pricing-type-switch-button.active');
  const usersButton = document.querySelector('.pricing-users-button');

  const selectedType = activeTypeButton && activeTypeButton.getAttribute('data-value') ? activeTypeButton.getAttribute('data-value') : 'parishes';
  const plan = pricingPlans[selectedType] || pricingPlans.parishes;
  const selectedUserKey = usersButton && usersButton.getAttribute('data-value') ? usersButton.getAttribute('data-value') : plan.defaultUsers;
  const selectedUserPlan = plan.users[selectedUserKey] || plan.users[plan.defaultUsers];

  const redirectUrl = selectedUserPlan.url || 'https://shop.liturgybrisbane.net.au/collections/liturgia';

  if (redirectUrl) {
    window.open(redirectUrl, '_blank');
  }
}