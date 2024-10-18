document.addEventListener('DOMContentLoaded', () => {
    // Select necessary elements
    const modal = document.getElementById('propertyModal');
    const viewBtn = document.querySelector('.view-btn');
    const closeBtn = document.querySelector('.close');
    
    // Open Modal when "View Property" is clicked
    viewBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Close Modal when 'X' is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close Modal when clicking outside of the content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
