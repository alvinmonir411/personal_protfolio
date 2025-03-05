// Function to open the popup
function openFullScreen(imageSrc) {
  document.getElementById("fullScreenView").classList.remove("hidden");
  document.getElementById("fullScreenImage").src = imageSrc;
}

function closeFullScreen() {
  document.getElementById("fullScreenView").classList.add("hidden");
}
// another section
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

function toggleMenu() {
  menu.classList.add("hidden");
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// for animated text

const words = [
  "Monir!",
  "a Web Developer!",
  "a JavaScript Enthusiast!",
  "a Front-End Specialist!",
];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typing-text").textContent = currentWord.substring(
      0,
      j - 1
    );
    j--;
  } else {
    document.getElementById("typing-text").textContent = currentWord.substring(
      0,
      j + 1
    );
    j++;
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
// for skills section

function toggleDetails(sectionId) {
  const section = document.getElementById(sectionId);
  const button = section.previousElementSibling.querySelector("button");
  const isHidden = section.classList.contains("hidden");

  if (isHidden) {
    section.classList.remove("hidden");
    button.textContent = "Hide Details";
  } else {
    section.classList.add("hidden");
    button.textContent = "Show Details";
  }
}
// form validation
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // Reset error messages
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    nameError && nameError.classList.add("hidden");
    emailError && emailError.classList.add("hidden");
    messageError && messageError.classList.add("hidden");

    // Name Validation
    const name = document.getElementById("name").value.trim();
    if (!name) {
      nameError && nameError.classList.remove("hidden");
      isValid = false;
    }

    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailRegex.test(email)) {
      emailError && emailError.classList.remove("hidden");
      isValid = false;
    }

    // Message Validation
    const message = document.getElementById("message").value.trim();
    if (!message) {
      messageError && messageError.classList.remove("hidden");
      isValid = false;
    }

    if (isValid) {
      // Form is valid, proceed with form submission (e.g., AJAX)
      alert("Form submitted successfully!");
      // Optionally, reset the form
      document.getElementById("contactForm").reset();
    }
  });
