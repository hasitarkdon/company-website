document.querySelectorAll(".dropdown").forEach((dropdown) => {
  dropdown.addEventListener("mouseenter", () => {
    const menu = dropdown.querySelector(".dropdown-menu");
    menu.style.display = "block";
  });

  dropdown.addEventListener("mouseleave", () => {
    const menu = dropdown.querySelector(".dropdown-menu");
    menu.style.display = "none";
  });
});
// Get all modal trigger links
const modalTriggers = document.querySelectorAll(".modal-trigger");

// Get all modal elements
const modals = document.querySelectorAll(".modal");

// Close modal buttons
const closeModalButtons = document.querySelectorAll(".close-modal");

// Show the modal when a link is clicked
modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    const modalId = trigger.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.classList.add("show"); // Show the modal by adding 'show' class
  });
});

// Close the modal when the close button is clicked
closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    modal.classList.remove("show"); // Hide the modal by removing 'show' class
  });
});

// Close the modal if user clicks outside the modal content
modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show"); // Close modal when clicking outside content
    }
  });
});
