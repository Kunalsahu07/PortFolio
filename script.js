// Get elements
const modal = document.getElementById("loginModal");
const loginButton = document.getElementById("loginButton");
const closeButton = document.querySelector(".close");

// Show modal on button click
loginButton.addEventListener("click", () => {
    modal.style.display = "flex";
    document.body.classList.add("modal-active");
});

// Close modal when clicking the close button
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-active");
});

// Close modal when clicking outside of the box
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-active");
    }
});
