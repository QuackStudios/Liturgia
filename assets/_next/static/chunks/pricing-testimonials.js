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
            text: "With a few clicks of the mouse, I can browse through various options available and insert texts into booklets and presentations which look professional and are easy to use in liturgical celebrations. Liturgia has made my ministry of liturgical preparation much smoother and simpler than before with its easy-to-use and straightforward approach. ",
            attribution: "- Parish Priest, Archdiocese of Melbourne."
          },
          {
            text: "I have been using Liturgia for 20 plus years. I have been able to print each week for parishioners to join in the Entrance and Communion Antiphons and the Response Psalm. Liturgia enables me to print personalised Orders of Service for Baptisms which families keep to remember the occasion. It is a handy resource with all rituals close at hand to prepare occasional liturgies. ",
            attribution: "- Parish Priest, Sacred Heart Parish, Invercargill, NZ"
          },
          {
            text: "I have been using Liturgia since about 2006 when I started participating formally in leading or arranging Masses and Funerals and Sacraments for adults and for children. I have even used the section for dedication for a church. I find the tool very easy to navigate, very easy to use, and comprehensive in its cover.",
            attribution: "-  Fr C, Parish Priest, Archdiocese of Melbourne"
          },
          {
            text: "Liturgia is an invaluable tool for anyone involved in preparing liturgical celebrations, regardless of the occasion. It is efficient and well resourced; with everything you could possibly need right at your fingertips.",
            attribution: "- Parish Priest – Diocese of Maitland-Newcastle"
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