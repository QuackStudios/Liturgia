// Function to update the text content of the <a> elements
function updateTextContent(targetNode) {
  console.log("Running updateTextContent on:", targetNode);

  const itemsToReplace = {
    "Products": "Our Products",
    "For partners & installers": "Partners & Installers",
    "Need help?": "Support",
    "Company": "About Us",
    "Info Hub": "Knowledge Base",
    "Find an installer": "Locate Installer"
  };

  // Use a broader selector to target all <a> elements in the menu
  const links = targetNode.querySelectorAll("a"); // Broader selector
  console.log("Found links:", links);

  links.forEach((link) => {
    const currentText = link.textContent.trim();
    console.log("Current text:", currentText);

    if (itemsToReplace[currentText]) {
      console.log(`Replacing "${currentText}" with "${itemsToReplace[currentText]}"`);
      link.textContent = itemsToReplace[currentText];
    } else {
      console.log(`No replacement found for "${currentText}"`);
    }
  });
}

// MutationObserver callback
const observerCallback = (mutationsList) => {
  console.log("MutationObserver triggered");
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          console.log("Added node:", node);

          // Check if the added node contains <a> elements
          if (node.querySelectorAll && node.querySelectorAll("a").length > 0) {
            console.log("Matched target node containing <a> elements:", node);

            // Delay processing to ensure the menu is fully rendered
            setTimeout(() => updateTextContent(node), 100);
          } else {
            console.log("Node does not contain target <a> elements:", node);
          }
        }
      });
    }
  }

  // Reapply changes to the entire container to ensure persistence
  console.log("Reapplying changes to the entire container");
  setTimeout(() => updateTextContent(targetContainer), 100);
};

// Start observing the parent container
const targetContainer = document.querySelector(".overflow-auto"); // Adjust this selector to the parent container
if (targetContainer) {
  console.log("Target container found:", targetContainer);

  const observer = new MutationObserver(observerCallback);

  observer.observe(targetContainer, {
    childList: true,
    subtree: true
  });

  console.log("MutationObserver started");

  // Initial update for already existing elements
  setTimeout(() => updateTextContent(targetContainer), 100);

  // Periodically reapply changes to ensure persistence
  setInterval(() => {
    console.log("Reapplying changes periodically");
    updateTextContent(targetContainer);
  }, 1000); // Adjust the interval as needed
} else {
  console.error("Target container not found. Check the selector.");
}