const btn = document.getElementById("btn");
const container = document.querySelector(".btn-group");

// Store the "Home" position (center of the container)
const resetPosition = () => {
  btn.style.left = "50%";
  btn.style.top = "50%";
  btn.style.transform = "translate(-50%, -50%)";
};

// Initial placement
resetPosition();

btn.addEventListener("pointerover", () => {
  const padding = 50; // Safety margin from window edges

  // Get container dimensions to ensure we move OUTSIDE of it
  const contRect = container.getBoundingClientRect();

  let randomX, randomY;
  let isInside = true;

  // Keep calculating until the target coordinates are outside the box
  while (isInside) {
    randomX = Math.random() * (window.innerWidth - btn.offsetWidth - padding);
    randomY = Math.random() * (window.innerHeight - btn.offsetHeight - padding);

    // Check if the new random point overlaps with the container
    const buffer = 20; // Extra distance from the box
    if (
      randomX < contRect.left - buffer ||
      randomX > contRect.right + buffer ||
      randomY < contRect.top - buffer ||
      randomY > contRect.bottom + buffer
    ) {
      isInside = false;
    }
  }

  // Move the button to the "escape" position
  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;
  btn.style.transform = "none"; // Remove centering transform for free movement
});

// Detect when the mouse leaves the DIV to bring the button back
container.addEventListener("pointerleave", () => {
  resetPosition();
});
