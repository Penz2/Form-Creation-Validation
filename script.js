document.addEventListener("DOMContentLoaded", function () {
  // Form and Feedback Division Selection
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Form Submission Event Listener
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent actual form submission

    // Retrieve and Trim Inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Initialize Validation
    let isValid = true;
    const messages = [];

    // Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email Validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email must contain '@' and '.'.");
    }

    // Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

   // Display Feedback
feedbackDiv.style.display = "block";
feedbackDiv.classList.remove("error", "success");

if (isValid) {
  feedbackDiv.textContent = "Registration successful!";
  feedbackDiv.classList.add("success");
} else {
  feedbackDiv.innerHTML = messages.join("<br>");
  feedbackDiv.classList.add("error");
}
  });
});
