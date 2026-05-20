// 🌙 Dark Mode Toggle
const toggle = document.getElementById("darkToggle");
toggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 🎠 Carousel with Fade Effect (first image visible immediately)
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll(".carousel img");
  slides.forEach((slide, i) => {
    slide.style.opacity = i === slideIndex ? "1" : "0";
    slide.style.transition = "opacity 1s ease-in-out";
    slide.style.display = "block"; // keep them visible
  });
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 3000);
}

// Show first image right away
const firstSlide = document.querySelectorAll(".carousel img")[0];
if (firstSlide) firstSlide.style.opacity = "1";
showSlides();

// 📩 Contact Form Validation + Feedback
const form = document.getElementById("contactForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const feedback = document.createElement("div");
  feedback.className = "form-feedback";

  if (!name || !email || !message) {
    feedback.textContent = "⚠️ Please fill in all fields.";
    feedback.style.color = "red";
  } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    feedback.textContent = "⚠️ Please enter a valid email address.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "✅ Message sent successfully!";
    feedback.style.color = "green";
    form.reset();
  }

  form.appendChild(feedback);
  setTimeout(() => feedback.remove(), 3000);
});

// ✨ Extra Interactivity
// Hover zoom for service images
document.querySelectorAll(".cards .card img").forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "transform 0.3s ease";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});

// Navigation link hover animation
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "scale(1.1)";
    link.style.transition = "transform 0.3s ease";
  });
  link.addEventListener("mouseout", () => {
    link.style.transform = "scale(1)";
  });
});
