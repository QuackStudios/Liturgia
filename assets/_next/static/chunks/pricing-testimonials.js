document.addEventListener('DOMContentLoaded', () => {
    const MAX_RETRIES = 10; // Maximum number of retries to find the targetDiv
    const RETRY_INTERVAL = 500; // Time (in ms) between retries
  
    let retryCount = 0;
  
    function initializeTestimonials() {
      const targetDiv = document.getElementById('module-7e5ed076-d3fb-4e38-a863-907cb8423e07');
  
      if (!targetDiv) {
        // Retry mechanism: Check for the targetDiv again after a delay
        if (retryCount < MAX_RETRIES) {
          retryCount++;
          console.warn(`Target div not found. Retrying (${retryCount}/${MAX_RETRIES})...`);
          setTimeout(initializeTestimonials, RETRY_INTERVAL);
        } else {
          console.error('Target div not found after maximum retries. Testimonials section will not be added.');
        }
        return;
      }
  
      // Add the testimonials section
      let testimonialsSection = document.querySelector('.testimonials');
      if (!testimonialsSection) {
        testimonialsSection = document.createElement('section');
        testimonialsSection.className = 'testimonials';
  
        const cardsContent = [
          {
            text: "I have used Liturgia to prepare liturgies ever since it was first published. It has everything needed - texts, documents, suggestions - to make it an invaluable  resource.",
            attribution: "- Liturgy Coordinator, Diocese of Wollongong NSW"
          },
          {
            text: "While I find Liturgia invaluable in preparing liturgies for the communities to which I belong, it has become my travel companion too.  Travelling, I have an opportunity for quiet reflection as I engage with the Prayer of the Church. ",
            attribution: "- Parish Volunteer, Diamond Creek, Victoria "
          },
          {
            text: "Liturgia is great! Complete and accurate information about any liturgy in the Church year is instantly available, making music planning dramatically easier. ",
            attribution: "-  Director of Music, St. Ignatius’ Parish, Toowong"
          },
          {
            text: "Liturgia is a wonderful resource for all those involved in the celebration of the Church’s liturgy.  The excellent suggestions for homily notes, the prayer of the faithful and the music suggestions, together with examples of illustrations for the relevant Sundays, enrich the celebration of the liturgy abundantly.",
            attribution: "- Lecturer in Liturgy (Holy Spirit Seminary, Banyo)"
          }
        ];
  
        testimonialsSection.innerHTML = `
          <div class="carousel-container">
            <div class="cc-title">Testimonials</div>
            <div class="carousel-track">
              ${cardsContent
                .map(
                  (card, index) => `
                <div class="carousel-card">
                  <div class="cc-lhs">
                    <div class="cc-lhs-text">
                      <div class="card-main-text">
                        <span class="quotation-mark1">"</span>
                        <span class="testimonial-main-text optional-size-adjust-p${index + 1}">${card.text}</span>
                        <span class="quotation-mark2">"</span>
                        <span class="quote-attribution">${card.attribution}</span>
                      </div>
                    </div>
                  </div>
                </div>
              `
                )
                .join('')}
            </div>
            <div class="slide-indicator">
              ${cardsContent
                .map(
                  (_, index) => `
                <div class="slide-indicator-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
              `
                )
                .join('')}
            </div>
          </div>
        `;
  
        // Inject the testimonials section after the target div
        targetDiv.after(testimonialsSection);
        console.log('Testimonials section added after the target div');
      }
  
      // Function to initialize the slider logic
      function initializeSlider() {
        const track = testimonialsSection.querySelector('.carousel-track');
        const dots = testimonialsSection.querySelectorAll('.slide-indicator-dot');
        const cards = testimonialsSection.querySelectorAll('.carousel-card');
        const totalCards = cards.length;
        let currentIndex = 0;
        let autoScrollInterval;
  
        if (totalCards === 0) {
          console.error('No cards found. Slider will not initialize.');
          return;
        }
  
        // Function to calculate card width dynamically
        function getCardWidth() {
          return cards[0].getBoundingClientRect().width;
        }
  
        // Function to update the slide position
        function updateSlidePosition() {
          const cardWidth = getCardWidth();
          track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
  
        // Function to update the active slide indicator
        function updateSlideIndicator() {
          dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
          });
        }
  
        // Function to auto-scroll the carousel
        function autoScroll() {
          currentIndex = (currentIndex + 1) % totalCards;
          requestAnimationFrame(() => {
            updateSlidePosition();
            updateSlideIndicator();
          });
        }
  
        // Start auto-scrolling every 10 seconds
        function startAutoScroll() {
          autoScrollInterval = setInterval(autoScroll, 10000);
        }
  
        // Add click event to dots for manual navigation
        dots.forEach((dot) => {
          dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index'), 10);
            requestAnimationFrame(() => {
              updateSlidePosition();
              updateSlideIndicator();
            });
            if (autoScrollInterval) {
              clearInterval(autoScrollInterval); // Reset auto-scroll on manual navigation
              startAutoScroll();
            }
          });
        });
  
        // Resize listener to ensure proper alignment
        let resizeTimeout;
        window.addEventListener('resize', () => {
          clearTimeout(resizeTimeout);
  
          // Pause transitions during resizing
          track.style.transition = 'none';
  
          resizeTimeout = setTimeout(() => {
            requestAnimationFrame(() => {
              updateSlidePosition();
  
              // Re-enable transitions after resizing
              setTimeout(() => {
                track.style.transition = 'transform 1s ease-in-out';
              }, 50);
            });
          }, 200); // Debounce resize event
        });
  
        // Ensure the initial slide position is correct
        requestAnimationFrame(() => {
          updateSlidePosition();
          startAutoScroll();
        });
      }
  
      // Check if the cards are already in the DOM
      const cards = testimonialsSection.querySelectorAll('.carousel-card');
      if (cards.length > 0) {
        console.log('Cards already present. Initializing slider...');
        initializeSlider();
      } else {
        // Use a MutationObserver to detect when the cards are added to the DOM
        const observer = new MutationObserver((mutationsList, observer) => {
          const cards = testimonialsSection.querySelectorAll('.carousel-card');
          if (cards.length > 0) {
            console.log('Cards detected. Initializing slider...');
            observer.disconnect(); // Stop observing once the cards are detected
            initializeSlider(); // Initialize the slider logic
          }
        });
  
        // Start observing the testimonials section for changes
        observer.observe(testimonialsSection, { childList: true, subtree: true });
      }
    }
  
    // Start the initialization process
    initializeTestimonials();
  });