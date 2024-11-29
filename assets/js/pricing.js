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

// Scroll indicator update function
function updateScrollIndicator() {
    const topLine = document.querySelector('.top-line');
    const bottomLine = document.querySelector('.bottom-line');
    const ball = document.querySelector('.ball');
    const indicatorContainer = document.querySelector('.scroll-indicator');

    // Get the total scrollable height of the page
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the scroll percentage (0 to 1)
    const scrollPercentage = window.scrollY / scrollableHeight;

    // Set the max heights for the lines and ball movement range
    const maxLineHeight = 265; // Adjust the max line height as needed
    const minLineHeight = 0; // Minimum line length to maintain a gap

    // Adjust line heights based on scroll position
    const newTopLineHeight = scrollPercentage * maxLineHeight;
    const newBottomLineHeight = (1 - scrollPercentage) * maxLineHeight;

    // Apply calculated heights to the elements
    topLine.style.height = `${newTopLineHeight}px`;
    bottomLine.style.height = `${newBottomLineHeight}px`;

    // Move the ball based on scroll position
    const ballMovement = scrollPercentage * maxLineHeight;
    ball.style.transform = `translateY(${ballMovement}px)`;
}

// Call the function once to set the initial state
updateScrollIndicator();

// Pricing calculation variables and settings
let seatCount = 1; // Initialize with 1 seat
let isAnnual = false;
const licensePrices = {
    Parish: 27.5,
    School: 30,
    Diocese: 35,
};

// Function to update seat count
function updateSeats(change) {
    seatCount = Math.max(1, seatCount + change); // Ensure minimum seat count is 1
    document.getElementById("seats").textContent = seatCount === 1 ? `${seatCount} Seat` : `${seatCount} Seats`;
    updatePricing();
}

// Toggle between annual and monthly pricing
document.getElementById("annualToggle").addEventListener("change", (event) => {
    isAnnual = event.target.checked;
    updatePricing();
});

// Update pricing based on seat count, license type, and billing frequency
function updatePricing() {
    const licenseType = document.getElementById("license").value;
    const basePrice = licensePrices[licenseType];
    const monthlyPrice = basePrice * seatCount;
    const annualPrice = monthlyPrice * 12 * 0.9; // Apply 10% discount for annual pricing
    const annualMonthlyCost = annualPrice / 12; // Monthly cost for annual subscription

    if (isAnnual) {
        document.getElementById("price").textContent = `$${annualMonthlyCost.toFixed(2)}`;
        document.getElementById("total").textContent = `$${annualPrice.toFixed(2)} AUD`;
    } else {
        document.getElementById("price").textContent = `$${monthlyPrice.toFixed(2)}`;
        document.getElementById("total").textContent = `$${(monthlyPrice * 12).toFixed(2)} AUD`;
    }
}

// Update pricing when license type changes
document.getElementById("license").addEventListener("change", updatePricing);

// Initial setup
document.getElementById("seats").textContent = seatCount === 1 ? `${seatCount} Seat` : `${seatCount} Seats`;
updatePricing();