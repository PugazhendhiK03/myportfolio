document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            let tab = this.getAttribute("data-tab");

            // Remove active class from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Add active class to selected button and content
            this.classList.add("active");
            document.getElementById(tab).classList.add("active");
        });
    });
});
