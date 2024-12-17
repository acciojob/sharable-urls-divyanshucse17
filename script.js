
document.addEventListener("DOMContentLoaded", function () {
    // Select form elements
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const yearInput = document.getElementById("year");
    const urlDisplay = document.getElementById("url");

    // Base URL
    const baseUrl = "https://localhost:8080/";

    // Form submit event
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get input values
        const nameValue = nameInput.value.trim();
        const yearValue = yearInput.value.trim();

        // Construct query string
        let queryString = [];
        if (nameValue) {
            queryString.push(`name=${encodeURIComponent(nameValue)}`);
        }
        if (yearValue) {
            queryString.push(`year=${encodeURIComponent(yearValue)}`);
        }

        // Build full URL
        const fullUrl = queryString.length > 0 
            ? `${baseUrl}?${queryString.join("&")}`
            : baseUrl;

        // Update the URL display
        urlDisplay.textContent = fullUrl;
    });
});

