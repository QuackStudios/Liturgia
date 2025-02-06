/*  document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed.");

  let currentDropdown = null; // Track the currently open dropdown
  let currentLink = null; // Track the link associated with the current dropdown

  const createFeaturesDropdownContent = () => {
    console.log("Creating dropdown content for Features");
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown-header";
  
    const featureTexts = ["Features", "For Schools", "For Parishes"]; // Updated text for Features dropdown
  
    featureTexts.forEach((text, index) => {
      const childDiv = document.createElement("div");
      childDiv.className = `dropdown-item feature-item-${index + 1}`;
  
      // Create the span for the text
      const span = document.createElement("span");
      span.textContent = text; // Set the text for each item
      span.className = "dropdown-text";
  
      // Create the div container for the SVG
      const svgContainer = document.createElement("div");
      svgContainer.className = "dropdown-svg-container";
  
      // Create the div for the SVG background
      const svgBackground = document.createElement("div");
      svgBackground.className = "dropdown-svg-background";
  
      // Create the SVG element
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 14 14");
      svg.setAttribute("fill", "white");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.classList.add(
        "w-4",
        "stroke-current",
        "absolute",
        "left-0",
        "top-1/2",
        "-translate-y-1/2",
        "-translate-x-full",
        "group-hover/link:-translate-x-0",
        "transition-transform",
        "duration-300",
        "dropdown-svg" // Add the dropdown-svg class to the SVG
      );
  
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M.74 7h12m0 0-6-6m6 6-6 6");
      path.setAttribute("vector-effect", "non-scaling-stroke");
  
      svg.appendChild(path); // Add the path to the SVG
      svgBackground.appendChild(svg); // Add the SVG to the background container
      svgContainer.appendChild(svgBackground); // Add the background container to the SVG container
  
      // Append the text and SVG container to the child div
      childDiv.appendChild(span);
      childDiv.appendChild(svgContainer);
  
      // Append the child div to the dropdown
      dropdown.appendChild(childDiv);
    });
  
    return dropdown;
  };
  
  const createSupportDropdownContent = () => {
    console.log("Creating dropdown content for Support");
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown-header";
  
    const supportTexts = ["Support", "Pricing"]; // Updated text for Support dropdown
  
    supportTexts.forEach((text, index) => {
      const childDiv = document.createElement("div");
      childDiv.className = `dropdown-item support-item-${index + 1}`;
  
      // Create the span for the text
      const span = document.createElement("span");
      span.textContent = text; // Set the text for each item
      span.className = "dropdown-text";
  
      // Create the div container for the SVG
      const svgContainer = document.createElement("div");
      svgContainer.className = "dropdown-svg-container";
  
      // Create the div for the SVG background
      const svgBackground = document.createElement("div");
      svgBackground.className = "dropdown-svg-background";
  
      // Create the SVG element
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 14 14");
      svg.setAttribute("fill", "white");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.classList.add(
        "w-4",
        "stroke-current",
        "absolute",
        "left-0",
        "top-1/2",
        "-translate-y-1/2",
        "-translate-x-full",
        "group-hover/link:-translate-x-0",
        "transition-transform",
        "duration-300",
        "dropdown-svg" // Add the dropdown-svg class to the SVG
      );
  
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M.74 7h12m0 0-6-6m6 6-6 6");
      path.setAttribute("vector-effect", "non-scaling-stroke");
  
      svg.appendChild(path); // Add the path to the SVG
      svgBackground.appendChild(svg); // Add the SVG to the background container
      svgContainer.appendChild(svgBackground); // Add the background container to the SVG container
  
      // Append the text and SVG container to the child div
      childDiv.appendChild(span);
      childDiv.appendChild(svgContainer);
  
      // Append the child div to the dropdown
      dropdown.appendChild(childDiv);
    });
  
    return dropdown;
  };

  const positionDropdown = (dropdown, triggerElement) => {
    console.log(`Positioning dropdown for: ${triggerElement.title}`);
    const rect = triggerElement.getBoundingClientRect();
    dropdown.style.position = "absolute";
    dropdown.style.top = `${rect.bottom + window.scrollY}px`;
    console.log(`Dropdown positioned at top: ${dropdown.style.top}, left: ${dropdown.style.left}`);
  };

  const removeExistingDropdowns = () => {
    const existingDropdown = document.querySelector(".dropdown-header");
    if (existingDropdown) {
      console.log("Removing existing dropdown from DOM");
      existingDropdown.remove();
    }
  };

  const observer = new MutationObserver((mutationsList, observer) => {
    console.log("MutationObserver triggered.");
    const menu = document.querySelector(
      ".menu-left.flex.items-center.secondary-menu"
    );

    if (menu) {
      console.log("Menu found:", menu);

      const links = menu.querySelectorAll("a.r-text-sm.custom-underline");
      console.log("Links found:", links);

      const featuresLink = Array.from(links).find((link) => link.title === "Features");
      const supportLink = Array.from(links).find((link) => link.title === "Support");

      if (featuresLink && supportLink) {
        console.log("All required links found. Disconnecting observer.");
        observer.disconnect();

        const addHoverListeners = (link, createDropdownContent) => {
          let dropdown = null;

          const showDropdown = () => {
            // Remove any existing dropdowns from the DOM
            removeExistingDropdowns();

            // Create and show the new dropdown
            dropdown = createDropdownContent();
            document.body.appendChild(dropdown);
            positionDropdown(dropdown, link);

            dropdown.addEventListener("mouseenter", () => {
              console.log("Mouse entered dropdown");
            });

            dropdown.addEventListener("mouseleave", () => {
              console.log("Mouse left dropdown");
              checkAndRemoveDropdown();
            });

            // Set the current dropdown and link
            currentDropdown = dropdown;
            currentLink = link;
          };

          const checkAndRemoveDropdown = () => {
            const isHoveringLink = link.matches(":hover");
            const isHoveringDropdown = dropdown && dropdown.matches(":hover");
            const isHoveringMenu = menu.matches(":hover");

            if (!isHoveringLink && !isHoveringDropdown && !isHoveringMenu) {
              console.log("Removing dropdown");
              if (dropdown) {
                dropdown.remove();
                dropdown = null;
                currentDropdown = null; // Clear the current dropdown
                currentLink = null; // Clear the current link
              }
            }
          }; 

          link.addEventListener("mouseenter", () => {
            console.log(`Mouse entered: ${link.title}`);
            showDropdown();
          });

          link.addEventListener("mouseleave", () => {
            console.log(`Mouse left: ${link.title}`);
            checkAndRemoveDropdown();
          });

          menu.addEventListener("mouseleave", () => {
            console.log("Mouse left menu");
            checkAndRemoveDropdown();
          });
        };

        addHoverListeners(featuresLink, createFeaturesDropdownContent);
        addHoverListeners(supportLink, createSupportDropdownContent);
      } else {
        console.log("One or more required links are missing.");
      }
    } else {
      console.log("Menu not found yet.");
    }
  });

  console.log("Starting MutationObserver...");
  observer.observe(document.body, { childList: true, subtree: true });
});


document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed.");

  // Function to toggle the hover-active class on the nav element
  const toggleNavHoverClass = () => {
    const navElement = document.querySelector("nav.top-bar.fixed.top-0.w-full.transition-all.full");
    const dropdowns = document.querySelectorAll(".dropdown-header");

    if (navElement) {
      if (dropdowns.length > 0) {
        // Add the hover-active class if dropdowns are present
        navElement.classList.add("hover-active");
      } else {
        // Remove the hover-active class if no dropdowns are present
        navElement.classList.remove("hover-active");
      }
    }
  };

  // MutationObserver to monitor changes in the DOM
  const dropdownObserver = new MutationObserver(() => {
    console.log("Dropdown mutation detected.");
    toggleNavHoverClass();
  });

  // Start observing the body for changes
  dropdownObserver.observe(document.body, { childList: true, subtree: true });

  // Your existing code here...
});
*/