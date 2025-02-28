document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);
    let statusMessage = document.getElementById("statusMessage");

    try {
        let response = await fetch("https://formspree.io/f/mrgnygog", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            statusMessage.textContent = "Message Sent Successfully!";
            statusMessage.style.color = "green";
            form.reset();  // Reset form after successful submission
        } else {
            statusMessage.textContent = "Error sending message. Please try again!";
            statusMessage.style.color = "red";
        }
    } catch (error) {
        statusMessage.textContent = "Network error. Please check your connection!";
        statusMessage.style.color = "red";
    }
});