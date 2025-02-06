function updateMenuHeadings() {
  
    // Ensure dropdown is always hidden
    const dropdownMenu = document.querySelector(".secondary-menu-dropdown");
    if (dropdownMenu) {
      dropdownMenu.style.display = "none"; // Hide dropdown permanently
    }
  
    // Update the first menu item: Change 'Products' to 'Home'
    const homeMenuItem = document.querySelector(
      '.secondary-menu.hidden.sm\\:flex.items-center.r-gap-12.text-asphalt a[title="Products"]'
    );
    if (homeMenuItem) {
      homeMenuItem.textContent = "Home";
      homeMenuItem.setAttribute("title", "Home");
      homeMenuItem.setAttribute("href", "/");
    }
  
    // Update the second menu item: Change 'For partners & installers' to 'Product' -> '/features'
    const productMenuItem = document.querySelector(
      '.secondary-menu.hidden.sm\\:flex.items-center.r-gap-12.text-asphalt a[title="For partners & installers"]'
    );
    if (productMenuItem) {
      productMenuItem.textContent = "Features";
      productMenuItem.setAttribute("title", "Features");
      productMenuItem.setAttribute("href", "/features");
    }
  
    // Update the third menu item: Change 'Need help?' to 'Support' -> '/contact'
    const supportMenuItem = document.querySelector(
      '.secondary-menu.hidden.sm\\:flex.items-center.r-gap-12.text-asphalt a[title="Need help?"]'
    );
    if (supportMenuItem) {
      supportMenuItem.textContent = "Support";
      supportMenuItem.setAttribute("title", "Support");
      supportMenuItem.setAttribute("href", "/support");
    }
  }
  
  // Observe DOM changes to dynamically update menu headings
  function observeDOMChanges() {
    const targetNode = document.body;
  
    if (!targetNode) {
      console.error("Failed to find the target node for MutationObserver.");
      return;
    }
  
    const observer = new MutationObserver(() => {
      updateMenuHeadings();
    });
  
    observer.observe(targetNode, {
      childList: true,
      subtree: true,
    });
  
  }
  
  // Initialize on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", () => {
    updateMenuHeadings();
    observeDOMChanges();
  });