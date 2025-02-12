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
        const modulesSection = document.querySelector('.modules'); // Locate the section with the class "modules"
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
            	<div class="statify" id="popup1">
                  <div class="popup-content">
                    <h1>Thank you! 👍</h1>
                    <br>
                    <p>Thanks for your inquiry! We'll contact you shortly! 😊</p>
                  </div>
                </div>	
              <div class="s-form">
                <form id="contactForm"
                      class="contact-form"
                      method="POST"
                      action="https://script.google.com/macros/s/AKfycbzY_VTmTjH7vSXv0ymjY-ixuLIHqHwxBZiDL_LYTvMV-v-KW8nb22xHSDEgDliqTX-h/exec">
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

            rhsDiv.innerHTML = `
                <div class="nested-div-1">Contact Information</div>
                <div class="nested-div-2">
                  <div class="nested-div-2-child-1">Phone: (07) 3324 3314</div>
                  <div class="nested-div-2-child-2">Email: liturgia@liturgybrisbane.net.au</div>
                </div>
            `;

            newSection.appendChild(lhsDiv);
            newSection.appendChild(rhsDiv);

            modulesSection.parentNode.insertBefore(newSection, modulesSection);

            // Add mobile CSS dynamically
            const style = document.createElement('style');
            style.textContent = `
              @media (max-width: 768px) {
                .contact-form {
                  flex-direction: column;
                  gap: 2rem;
                }
                .lhs, .rhs {
                  width: 100%;
                }
                .s-form {
                  padding: 1rem;
                }
                .s-form__input input,
                .s-form__input textarea {
                  width: 100%;
                  padding: 0.8rem;
                  font-size: 1rem;
                  border: 1px solid #ccc;
                  border-radius: 5px;
                  box-sizing: border-box;
                }
                .rhs {
                  text-align: center;
                  padding: 1rem;
                  background-color: #f9f9f9;
                  border-radius: 8px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  margin-top: 1rem;
                }
                .rhs .nested-div-1 {
                  font-size: 1.2rem;
                  font-weight: bold;
                  color: #333;
                  margin-bottom: 0.5rem;
                }
                .rhs .nested-div-2-child-1,
                .rhs .nested-div-2-child-2 {
                  display: block;
                  margin-bottom: 0.5rem;
                  font-size: 1rem;
                  line-height: 1.5;
                  color: #555;
                  text-align: center;
                }
                .nested-div-2 {
                  display: flex;
                  flex-direction: column;
                }
                .nested-div-2-child-1 {
                  width: 100%;
                }    
              }
            `;
            document.head.appendChild(style);
        } else {
            console.warn('Target div or footer not found.');
        }
    }
}

// Adjust the height of the top div for mobile
function adjustTopDivHeight() {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        .min-h-screen {
          min-height: 50vh; /* Adjust the height for mobile screens */
        }
      }
    `;
    document.head.appendChild(style);
}

// Ensure the contact form is added and adjust top div height
ensureContactForm();
adjustTopDivHeight();

  function adjustTopDivHeight() {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        .min-h-screen {
          min-height: 50vh; /* Adjust the height for mobile screens */
        }
      }
    `;
    document.head.appendChild(style);
}

// Call the function to apply the changes
adjustTopDivHeight();



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
  // Function to attach event listeners to inputs
  function attachInputListeners(input) {
    // Add 'is-focus' class on focus
    input.addEventListener('focus', () => {
      const formField = input.closest('.s-form__field');
      if (formField) {
        const label = formField.querySelector('.s-form__label');
        if (label) {
          label.classList.add('is-focus');
        }
        input.parentNode.classList.add('is-focus');
      }
    });

    // Remove 'is-focus' class on blur if the input is empty
    input.addEventListener('blur', () => {
      if (input.value === '') {
        const formField = input.closest('.s-form__field');
        if (formField) {
          const label = formField.querySelector('.s-form__label');
          if (label) {
            label.classList.remove('is-focus');
          }
          input.parentNode.classList.remove('is-focus');
        }
      }
    });
  }

  // Function to initialize listeners for all existing inputs
  function initializeListeners() {
    const formInputs = document.querySelectorAll('.js-form-input');
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
              attachInputListeners(node);
            }

            // Check if the added node contains inputs with the class "js-form-input"
            const nestedInputs = node.querySelectorAll('.js-form-input');
            if (nestedInputs.length > 0) {
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
  } else {
    console.error('document.body is not available.');
  }


  function resetForm() {
    if (!form) {
      console.warn('Form with ID "contactForm" not found. Cannot reset.');
      return;
    }

    // Reset the form fields
    form.reset();

    // Clear input values and reset any inline styles
    form.querySelectorAll('input:not([type="checkbox"]), textarea').forEach((field) => {
      field.value = '';
      field.style.removeProperty('background-color');
      field.style.removeProperty('border');
      field.style.removeProperty('color');
      field.style.removeProperty('padding');
      field.classList.remove('filled', 'has-value', 'is-focused');

      // Trigger collapse/expand behaviour
      if (field.classList.contains('expanded')) {
        field.classList.remove('expanded');
      }

      // Remove focus class to collapse the input
      field.dispatchEvent(new Event('blur'));
    });

    // Reset checkboxes
    form.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });

    // Remove custom class styling on form fields
    form.querySelectorAll('.s-form__field, .form-field').forEach((field) => {
      field.classList.remove('has-value', 'is-focused', 'filled');
    });

  }
});

// Function to handle form submission
function attachFormSubmitHandler(form) {
  if (!form.dataset.listenerAttached) { // Ensure the listener is only attached once
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default behaviour (navigation)

      // Instantly scroll to the top of the page to ensure the popup is fully visible
      window.scrollTo(0, 0);

      // Select the popup element by its ID
      const popup = document.getElementById('popup1');
      if (popup) {
        popup.classList.add('show'); // Show the popup
        document.body.classList.add('popup-active'); // Disable scrolling on the body

        // Hide the popup after 1800ms and reset the form
        setTimeout(function () {
          popup.classList.remove('show'); // Hide the popup
          document.body.classList.remove('popup-active'); // Re-enable scrolling on the body
          form.reset(); // Reset the form fields
        }, 1800); // Set to 1800ms
      } else {
        console.warn('Popup element with ID "popup1" not found.');
      }

      // Collect form data
      const formData = new FormData(form);

      // Send the data to the Google Apps Script endpoint
      fetch(form.action, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.text())
        .then((data) => {
          // Show a success message to the user
          form.reset(); // Reset the form
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });

    // Mark the form to indicate the listener has been attached
    form.dataset.listenerAttached = "true";
  }
}

// MutationObserver to detect when the form with ID "contactForm" and popup with ID "popup1" are added to the DOM
const observer6 = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
          const popup = document.getElementById('popup1');
          if (popup && !popup.classList.contains('show')) {
              popup.style.display = "none"; // Ensure popup is hidden
          }
      }
  }
});

// Start observing the body for changes
observer6.observe(document.body, { childList: true, subtree: true });

// Check if the form and popup are already in the DOM (in case they were added before the observer started)
const existingForm = document.getElementById('contactForm');
if (existingForm) {
  attachFormSubmitHandler(existingForm);
}

const existingPopup = document.getElementById('popup1');
if (existingPopup) {
}



