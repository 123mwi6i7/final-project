document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("popup").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("popup").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});
document.querySelector(".book-now").addEventListener("click", function() {
    alert("Redirecting to booking page...");
    window.location.href = "booking.html";
});
document.getElementById("requestForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Collect form data
    const service = document.getElementById("service").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    const contact = document.getElementById("contact").value;

    // Generate WhatsApp message link
    if(contact) {
        const message = `Hello! I have a request for ${service} at ${location}. Details: ${description}`;
        const whatsappURL = `https://wa.me/${contact}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    }

    // Show confirmation popup
    document.getElementById("popup").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});
