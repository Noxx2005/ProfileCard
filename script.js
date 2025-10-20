document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("currentTime");
  if (timeElement) {
    // Show the time in milliseconds immediately
    timeElement.textContent = Date.now();

    // Update every 100ms
    setInterval(() => {
      timeElement.textContent = Date.now();
    }, 100);
  }
});


// === CONTACT FORM VALIDATION (only runs if contact form exists) ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Clear previous errors
    document.querySelectorAll(".error-message").forEach((el) => (el.textContent = ""));

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const successMsg = document.getElementById("test-contact-success");

    // Name validation
    if (!name.value.trim()) {
      valid = false;
      document.getElementById("test-contact-error-name").textContent = "Full name is required.";
    }

    // Email validation
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email.value.trim()) {
      valid = false;
      document.getElementById("test-contact-error-email").textContent = "Email is required.";
    } else if (!emailPattern.test(email.value)) {
      valid = false;
      document.getElementById("test-contact-error-email").textContent = "Enter a valid email.";
    }

    // Subject validation
    if (!subject.value.trim()) {
      valid = false;
      document.getElementById("test-contact-error-subject").textContent = "Subject is required.";
    }

    // Message validation
    if (!message.value.trim()) {
      valid = false;
      document.getElementById("test-contact-error-message").textContent = "Message is required.";
    } else if (message.value.length < 10) {
      valid = false;
      document.getElementById("test-contact-error-message").textContent = "Message must be at least 10 characters.";
    }

    // Success
    if (valid) {
      successMsg.hidden = false;
      form.reset();
    } else {
      successMsg.hidden = true;
    }
  });
});
