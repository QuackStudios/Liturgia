const testimonialsObserver = new MutationObserver((mutationsList, observer) => {
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
                    <span class="quotation-mark1">"</span>
                    <span class="testimonial-main-text">I have been using Liturgia since about 2006 when I started participating formally in leading or arranging Masses and Funerals and Sacraments for adults and for children. I have even used the section for dedication for a church. I find the tool very easy to navigate, very easy to use, and comprehensive in its cover.</span>
                    <span class="quotation-mark2">"</span>
                    <span class="quote-attribution">- Fr C, Parish Priest, Archdiocese of Melbourne</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Duplicate the 4 cards for seamless looping -->
            <div class="carousel-card">
              <div class="cc-lhs">
                <div class="cc-lhs-text">
                  <div class="card-main-text">
                    <span class="quotation-mark1">"</span>
                    <span class="testimonial-main-text">I have been using Liturgia since about 2006 when I started participating formally in leading or arranging Masses and Funerals and Sacraments for adults and for children. I have even used the section for dedication for a church. I find the tool very easy to navigate, very easy to use, and comprehensive in its cover.</span>
                    <span class="quotation-mark2">"</span>
                    <span class="quote-attribution">- Fr C, Parish Priest, Archdiocese of Melbourne</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
  
      // Find the target div with the specified ID
      const targetDiv = document.getElementById('module-12e5336c-74dc-4d6d-843b-d9ed839ff435');
      if (targetDiv) {
        // Inject the testimonials section after the target div
        targetDiv.after(testimonialsSection);
        console.log('Testimonials section added after the target div');
  
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
      } else {
        console.error('Target div with the specified ID not found');
      }
    }
  });
  
  // Start observing the document body for changes
  testimonialsObserver.observe(document.body, { childList: true, subtree: true });