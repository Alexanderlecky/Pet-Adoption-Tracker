// Modal functionality
const modal = document.getElementById("propertyModal");
const closeBtn = document.querySelector(".close");
const viewBtn = document.querySelector(".view-btn");
const mapBtn = document.querySelector(".map-btn");
const mapFrame = document.getElementById("mapFrame");

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

// Show map when "View Location" button is clicked
mapBtn.addEventListener("click", function() {
    // Set the map location to the property address
    // You can change this URL to show the exact address of the property
    mapFrame.src = "https://www.google.com/maps/embed/v1/place?q=Beverly+Hills,+CA&key=YOUR_GOOGLE_MAPS_API_KEY";
});

// Like button functionality
const wishlistIcon = document.querySelector('.wishlist-icon i');

// Toggle 'like' (wishlist) when the heart icon is clicked
wishlistIcon.addEventListener('click', function() {
    wishlistIcon.classList.toggle('liked');
});
