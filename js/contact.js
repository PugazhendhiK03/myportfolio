document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let statusMessage = document.getElementById("statusMessage");

    if (name && email && message) {
        statusMessage.textContent = "Message Sent Successfully!";
        statusMessage.style.color = "green";

        // Reset form fields
        document.getElementById("contactForm").reset();
    } else {
        statusMessage.textContent = "Please fill all fields!";
        statusMessage.style.color = "red";
    }
});
