
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Reveal page sections as they enter the viewport.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

// Replace this with a real school WhatsApp number before deployment.
const schoolWhatsAppNumber = "";

document.getElementById("whatsappLink").addEventListener("click", (event) => {
  if (!schoolWhatsAppNumber) {
    event.preventDefault();
    alert(
      "This is a portfolio demo. Add the school's WhatsApp number in script.js to activate this link."
    );
    return;
  }

  event.currentTarget.href =
    "https://wa.me/" +
    schoolWhatsAppNumber +
    "?text=" +
    encodeURIComponent(
      "Hello, I would like to enquire about admissions at Crestfield Academy."
    );
});