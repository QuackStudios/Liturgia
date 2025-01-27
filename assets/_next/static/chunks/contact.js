document.addEventListener('DOMContentLoaded', () => {
  // Function to update the text of each nested div
  function updateNestedDivText() {
    const nestedDiv1 = document.querySelector('.nested-div-1');
    const nestedDiv2Child1 = document.querySelector('.nested-div-2-child-1');
    const nestedDiv2Child2 = document.querySelector('.nested-div-2-child-2');
    const nestedDiv3Child1 = document.querySelector('.nested-div-3-child-1');
    const nestedDiv3Child2 = document.querySelector('.nested-div-3-child-2');
  
    if (nestedDiv1) nestedDiv1.textContent = 'Contact Information';
  
    if (nestedDiv2Child1) nestedDiv2Child1.textContent = 'Phone Number:';
    if (nestedDiv2Child2) nestedDiv2Child2.textContent = '(07) 3324 3314';
  
    if (nestedDiv3Child1) nestedDiv3Child1.textContent = 'Email Address:';
    if (nestedDiv3Child2) nestedDiv3Child2.textContent = 'liturgy@liturgybrisbane.net.au';

  }

  // Ensure the contact form is added first
  function ensureContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) {
      const targetDiv = document.querySelector('.min-h-screen');
      const footer = document.querySelector('footer');

      if (targetDiv && footer) {
        const newSection = document.createElement('section');
        newSection.className = 'contact-form flex';

        // Create the left-hand side (LHS) div
        const lhsDiv = document.createElement('div');
        lhsDiv.className = 'lhs w-1/2';

        // Add the custom form to the LHS
        const formHTML = `
          <div class="s-form">
            <form id="contactForm"
                  class="contact-form"
                  method="POST"
                  accept-charset="UTF-8"
                  enctype="multipart/form-data">
              <input type="hidden" name="pageTitle" value="Contact">
              
              <div class="s-form__field">
                <div class="s-form__label">
                  <label class="s-label" for="contactForm_fullName">Name and Surname <span class="s-form__label__info">*</span></label>
                </div>
                <div class="s-form__input">
                  <input type="text" name="fullName" class="s-input js-form-input" id="contactForm_fullName" required="">
                </div>
              </div>
              <div class="s-spacer s-spacer--medium"></div>
              
              <div class="s-form__field">
                <div class="s-form__label">
                  <label class="s-label" for="contactForm_email">Email Address <span class="s-form__label__info">*</span></label>
                </div>
                <div class="s-form__input">
                  <input type="email" name="email" class="s-input js-form-input" id="contactForm_email" required="">
                </div>
              </div>
              <div class="s-spacer s-spacer--medium"></div>
              
              <div class="s-form__field">
                <div class="s-form__label">
                  <label class="s-label" for="contactForm_phone">Phone Number</label>
                </div>
                <div class="s-form__input">
                  <input type="text" name="phone" class="s-input js-form-input" id="contactForm_phone">
                </div>
              </div>
              <div class="s-spacer s-spacer--medium"></div>
              
              <div class="s-form__field">
                <div class="s-form__label">
                  <label class="s-label" for="contactForm_message">Your Enquiry <span class="s-form__label__info">*</span></label>
                </div>
                <div class="s-form__input">
                  <textarea name="message" class="s-input s-input--textarea js-form-input" id="contactForm_message" required="" rows="5"></textarea>
                </div>
              </div>
              <div class="s-spacer s-spacer--medium"></div>
              
              <div class="s-form__field">
                <div class="s-checkbox">
                  <input class="s-checkbox__input" type="checkbox" name="privacyPolicy" id="contactForm_privacyPolicy" required="">
                  <div class="s-checkbox__box"></div>
                  <label class="s-checkbox__label s-text--markup" for="contactForm_privacyPolicy">I agree to the privacy conditions<span class="s-form__label__info">*</span></label>
                </div>
              </div>
              <div class="s-spacer s-spacer--medium"></div>
              
              <div class="s-form__field s-form__field--full s-form__field--button">
                <button type="submit" class="s-link-button js-link-button">
                  <div class="s-link-button__text s-title s-title--small">Submit</div>
                  <div class="s-link-button__arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23.5" height="5" viewBox="0 0 23.5 5">
                      <path d="M2.5,0,5,3.5H0Z" transform="translate(23.5) rotate(90)"></path>
                      <line x2="20" transform="translate(0 2.5)" fill="none" stroke="#000" stroke-width="1" vector-effect="non-scaling-stroke"></line>
                    </svg>
                    <div class="s-link-button__circle js-link-button-circle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                        <g fill="none" stroke="#aaa" stroke-width="1">
                          <circle cx="40" cy="40" r="40" stroke="none"></circle>
                          <circle cx="40" cy="40" r="39.5" fill="none" vector-effect="non-scaling-stroke"></circle>
                        </g>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </form>
          </div>
        `;
        lhsDiv.innerHTML = formHTML;

        // Create the right-hand side (RHS) div
        const rhsDiv = document.createElement('div');
        rhsDiv.className = 'rhs w-1/2';

        for (let i = 1; i <= 3; i++) {
          // Create the parent div
          const nestedDiv = document.createElement('div');
          nestedDiv.className = `nested-div-${i}`;
        
          if (i === 1) {
            // For the first nested div, just add default content
            nestedDiv.textContent = 'Contact Information';
          } else {
            // For the second, third, fourth, and fifth nested divs, add two child divs
            const childDiv1 = document.createElement('div');
            childDiv1.className = `nested-div-${i}-child-1`;
            childDiv1.textContent = `Child 1 of Nested Div ${i}`; // Default content for child 1
        
            const childDiv2 = document.createElement('div');
            childDiv2.className = `nested-div-${i}-child-2`;
            childDiv2.textContent = `Child 2 of Nested Div ${i}`; // Default content for child 2
        
            // Append the child divs to the parent div
            nestedDiv.appendChild(childDiv1);
            nestedDiv.appendChild(childDiv2);
          }
        
          // Append the parent div to the right-hand side container
          rhsDiv.appendChild(nestedDiv);
        }

        newSection.appendChild(lhsDiv);
        newSection.appendChild(rhsDiv);

        footer.parentNode.insertBefore(newSection, footer);
        console.log('Contact form section with LHS and RHS added between the div and footer.');

        // Update the text of the nested divs after they are added
        updateNestedDivText();
      } else {
        console.warn('Target div or footer not found.');
      }
    }
  }

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList' || mutation.type === 'subtree') {
        ensureContactForm();
      }
    }
  });

  const body = document.body;
  if (body) {
    observer.observe(body, {
      childList: true,
      subtree: true,
    });

    ensureContactForm();
  } else {
    console.error('document.body is not available.');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed.');

  // Function to attach event listeners to inputs
  function attachInputListeners(input) {
    console.log('Attaching event listeners to input:', input);

    // Add 'is-focus' class on focus
    input.addEventListener('focus', () => {
      console.log(`Input focused:`, input);

      const formField = input.closest('.s-form__field');
      if (formField) {
        const label = formField.querySelector('.s-form__label');
        if (label) {
          label.classList.add('is-focus');
          console.log('Added "is-focus" class to label.');
        }
        input.parentNode.classList.add('is-focus');
        console.log('Added "is-focus" class to input parent.');
      }
    });

    // Remove 'is-focus' class on blur if the input is empty
    input.addEventListener('blur', () => {
      console.log(`Input blurred:`, input);

      if (input.value === '') {
        const formField = input.closest('.s-form__field');
        if (formField) {
          const label = formField.querySelector('.s-form__label');
          if (label) {
            label.classList.remove('is-focus');
            console.log('Removed "is-focus" class from label.');
          }
          input.parentNode.classList.remove('is-focus');
          console.log('Removed "is-focus" class from input parent.');
        }
      }
    });
  }

  // Function to initialize listeners for all existing inputs
  function initializeListeners() {
    const formInputs = document.querySelectorAll('.js-form-input');
    console.log(`Found ${formInputs.length} input(s) with the class "js-form-input".`);

    formInputs.forEach((input) => {
      attachInputListeners(input);
    });
  }

  // Initialize listeners for inputs already in the DOM
  initializeListeners();

  // MutationObserver to detect dynamically added inputs
  const inputObserver = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // Check if the added node is an input with the class "js-form-input"
            if (node.matches('.js-form-input')) {
              console.log('New input detected:', node);
              attachInputListeners(node);
            }

            // Check if the added node contains inputs with the class "js-form-input"
            const nestedInputs = node.querySelectorAll('.js-form-input');
            if (nestedInputs.length > 0) {
              console.log(`Found ${nestedInputs.length} new input(s) inside added node.`);
              nestedInputs.forEach((nestedInput) => {
                attachInputListeners(nestedInput);
              });
            }
          }
        });
      }
    });
  });

  // Observe the body for dynamically added inputs
  const body = document.body;
  if (body) {
    inputObserver.observe(body, {
      childList: true,
      subtree: true,
    });
    console.log('Input MutationObserver is now observing the body.');
  } else {
    console.error('document.body is not available.');
  }

  // Form submission and reset logic
  const form = document.getElementById('contactForm');
  const thankYouPopup = document.getElementById('thankYouPopup');
  const overlay = document.getElementById('overlay');
  const closePopup = document.getElementById('closePopup');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      console.log('Form submission intercepted');
      const formData = new FormData(form);

      fetch('https://formkeep.com/f/87c15317d18f', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          console.log('Form submitted successfully');
          overlay.style.display = 'block';
          thankYouPopup.style.display = 'block';
        } else {
          console.error('Form submission failed with status:', response.status);
          alert('There was an issue submitting the form. Please try again.');
        }
      }).catch(error => {
        console.error('Error:', error);
        alert('There was an issue submitting the form. Please try again.');
      });
    });
  } else {
    console.warn('Form with ID "contactForm" not found.');
  }

  if (closePopup) {
    closePopup.addEventListener('click', function () {
      overlay.style.display = 'none';
      thankYouPopup.style.display = 'none';
      resetForm();
    });
  } else {
    console.warn('Close popup button with ID "closePopup" not found.');
  }

  function resetForm() {
    if (!form) {
      console.warn('Form with ID "contactForm" not found. Cannot reset.');
      return;
    }

    console.log('Resetting form...');
    // Reset the form fields
    form.reset();

    // Clear input values and reset any inline styles
    form.querySelectorAll('input:not([type="checkbox"]), textarea').forEach(field => {
      field.value = '';
      field.style.removeProperty('background-color');
      field.style.removeProperty('border');
      field.style.removeProperty('color');
      field.style.removeProperty('padding');
      field.classList.remove('filled', 'has-value', 'is-focused');

      // Trigger collapse/expand behavior
      if (field.classList.contains('expanded')) {
        field.classList.remove('expanded');
      }

      // Remove focus class to collapse the input
      field.dispatchEvent(new Event('blur'));
    });

    // Reset checkboxes
    form.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    });

    // Remove custom class styling on form fields
    form.querySelectorAll('.s-form__field, .form-field').forEach(field => {
      field.classList.remove('has-value', 'is-focused', 'filled');
    });

    // Reset any labels that might be stuck in an active state
    form.querySelectorAll('label').forEach(label => {
      label.classList.remove('filled', 'active', 'has-value');
    });

    // Reset placeholders if they exist
    form.querySelectorAll('.placeholder').forEach(placeholder => {
      placeholder.style.transform = '';
      placeholder.style.transition = '';
    });

    // Remove any validation-related classes
    form.querySelectorAll('.is-invalid, .is-valid').forEach(field => {
      field.classList.remove('is-invalid', 'is-valid');
    });

    // Reset custom elements like select boxes or checkboxes
    form.querySelectorAll('.custom-select, .custom-checkbox').forEach(element => {
      element.classList.remove('selected', 'checked');
    });

    // Force a repaint to ensure all style resets take effect
    form.style.display = 'none';
    setTimeout(() => {
      form.style.display = 'block';
    }, 10);

    console.log('Form reset complete.');
  }
});