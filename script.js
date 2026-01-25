// Project click handlers
document.addEventListener('DOMContentLoaded', function() {
  const projects = document.querySelectorAll('.project');
  
  projects.forEach((project, index) => {
    project.addEventListener('click', function() {
      // Navigate to project page
      window.location.href = 'project.html';
    });
  });
});

// what app contact form js code

document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault(); // 🔥 page reload STOP

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let whatsappNumber = "923426271198";

    let whatsappMessage =
        `*New Contact Form Message*%0A%0A` +
        `👤 Name: ${name}%0A` +
        `📧 Email: ${email}%0A` +
        `📌 Subject: ${subject}%0A%0A` +
        `💬 Message:%0A${message}`;

    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
});