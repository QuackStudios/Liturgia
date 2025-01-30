document.addEventListener('DOMContentLoaded', () => {
  const MAX_RETRIES = 10; // Maximum number of retries to find the targetDiv
  const RETRY_INTERVAL = 500; // Time (in ms) between retries

  let retryCount = 0;

  function initializeTestimonials() {
    const targetDiv = document.getElementById('module-bf27f9b2-ca80-4ad2-8552-0ba827f59050');

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
          text: "Liturgia, is such an intuitive platform. When preparing a liturgy, it gives me flexibility to freely customise the celebration, whilst keeping it valid and licit because of the Church approved structure, words and prayers provided. I recommend it to anyone preparing a liturgy!",
          attribution: "- Assistant Principal - Religious Education at St Stephen’s School, Algester, Archdiocese of Brisbane"
        },
        {
          text: "I rely on Liturgia constantly for planning and preparing liturgies in my work. With so many resources just one click away, it makes checking facts, finding readings, preparing liturgy or locating that elusive prayer simple and seamless!",
          attribution: "-  Staff Campus Pastoral Associate, Australian Catholic University"
        },
        {
          text: "Liturgia has many readily-accessible resources for my classroom practice and makes preparation of a Mass or Liturgy of the Word so much easier. A few clicks on the website and Liturgia produces a well-presented word document or PowerPoint for use. There are many libraries of resources to explore!",
          attribution: "-  Classroom teacher, Archdiocese of Brisbane"
        },
        {
          text: "I have been using Liturgia for several years now. I find it very comprehensive and very easy to navigate. I especially appreciate the copyright attributions that accompany hymns and the fact that these citations are personalised to our organisation.",
          attribution: "- Mission & Ministries Manager, North Sydney"
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