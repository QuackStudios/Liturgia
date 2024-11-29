document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const cards = document.querySelectorAll(".card");

  // Set the first card to appear by default
  gsap.set(cards[0], {
    y: "0%", // Place in the viewport
    opacity: 1, // Make visible
  });

  // Animate the remaining cards
  cards.forEach((card, index) => {
    if (index === 0) return; // Skip the first card

    gsap.fromTo(
      card,
      {
        y: "100%", // Start below the viewport
        opacity: 0, // Start invisible
      },
      {
        y: "0%", // Slide into position
        opacity: 1, // Become visible
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features",
          start: `${index * 300}vh top`, // Require more scroll to trigger each card
          end: `${(index + 1) * 300}vh top`, // End after more scroll
          scrub: 1,
          onEnter: () => {
            card.classList.add("active"); // Add active class to current card
          },
          onLeave: () => {
            card.classList.remove("active"); // Remove active class when leaving
          },
          onEnterBack: () => {
            card.classList.add("active"); // Re-add active class when scrolling back
          },
          onLeaveBack: () => {
            card.classList.remove("active"); // Remove active class when scrolling back
          },
        },
      }
    );
  });

  // Debugging: Log scroll position dynamically
  window.addEventListener("scroll", () => {
    console.log("Scroll Position:", window.scrollY);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const leftColumn = document.querySelector(".left-column");
  const topLine = document.querySelector('.top-line');
  const bottomLine = document.querySelector('.bottom-line');
  const ball = document.querySelector('.ball');

  if (!leftColumn || !topLine || !bottomLine || !ball) {
    console.error("Required elements are missing!");
    return;
  }

  // Get the height of the left column
  const leftColumnHeight = leftColumn.offsetHeight;
  console.log("Left Column Height:", leftColumnHeight);

  function updateScrollIndicator() {
    // Calculate the scrollable height using the left column height
    const scrollableHeight = leftColumnHeight - window.innerHeight;
    const scrollY = window.scrollY;

    console.log("Scrollable Height:", scrollableHeight);
    console.log("Window ScrollY:", scrollY);

    if (scrollableHeight <= 0) {
      console.warn("No scrollable content!");
      return;
    }

    // Calculate the scroll percentage
    const scrollPercentage = scrollY / scrollableHeight;
    console.log("Scroll Percentage:", scrollPercentage);

    // Update indicator styles
    const maxLineHeight = 265; // Adjust as needed
    const maxBallMovement = 0; // Adjust as needed

    const newTopLineHeight = scrollPercentage * maxLineHeight;
    const newBottomLineHeight = (1 - scrollPercentage) * maxLineHeight;
    const ballMovement = scrollPercentage * maxBallMovement;

    // Apply calculated styles
    topLine.style.height = `${Math.max(newTopLineHeight, 0)}px`;
    bottomLine.style.height = `${Math.max(newBottomLineHeight, 0)}px`;
    ball.style.transform = `translateY(${ballMovement}px)`;
  }

  // Attach scroll listener to the window
  window.addEventListener("scroll", updateScrollIndicator);

  // Initial calculation
  updateScrollIndicator();
});

gsap.from(".top-text", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

// Main page menu button
const menuButton = document.getElementById('menu-button');
const menuOverlay = document.querySelector('.menu-page-overlay');

// Event listener for the main menu button to open overlay
menuButton.addEventListener('click', () => {
  menuOverlay.style.visibility = 'visible';
  menuOverlay.classList.add('visible');
});

// Overlay page menu button to close overlay
const menuButton1 = document.getElementById('menu-button1');

// Event listener for the overlay menu button to close overlay
menuButton1.addEventListener('click', () => {
  menuOverlay.classList.remove('visible');

  // Wait for the fade-out transition to complete before hiding
  setTimeout(() => {
    menuOverlay.style.visibility = 'hidden';
  }, 400); // Match with your CSS transition duration
});