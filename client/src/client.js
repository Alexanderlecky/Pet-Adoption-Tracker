// Modal functionality
const modal = document.getElementById("propertyModal");
const closeBtn = document.querySelector(".close");
const viewBtn = document.querySelector(".view-btn");
const mapBtn = document.querySelector(".map-btn");
const locationInfo = document.getElementById("locationInfo");
const thankYouMessage = document.getElementById("thankYouMessage");

// Open modal when "View Property" button is clicked
viewBtn.addEventListener("click", function() {
    modal.style.display = "flex";
});

// Close modal when close button is clicked
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal when user clicks outside the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Show address and nearby location info when "View Location" button is clicked
mapBtn.addEventListener("click", function() {
    locationInfo.style.display = "block"; // Show the location info
});

// Show thank you message when "Buy Now" button is clicked in the card
const buyBtn = document.querySelector('.buy-btn');
buyBtn.addEventListener('click', function() {
    thankYouMessage.style.display = "block"; // Show the thank you message
});
