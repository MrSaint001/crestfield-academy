
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Mobile navigation
function closeMenu() {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";

  mainNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Close menu" : "Open menu"
  );
});

// Close after choosing a navigation link.
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Close using Escape.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// Reset navigation when switching to desktop.
window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});

// Automatically update the footer year.
document.getElementById("year").textContent =
  new Date().getFullYear();

// WhatsApp demo contact.
// Replace the empty string with a real number in international format,
// without +, spaces or hyphens, before using this for a real school.
const schoolWhatsAppNumber = "";

const whatsappLink = document.getElementById("whatsappLink");

whatsappLink.addEventListener("click", (event) => {
  if (!schoolWhatsAppNumber) {
    event.preventDefault();

    alert(
      "Portfolio demo: add the school's WhatsApp number in script.js to activate this contact link."
    );

    return;
  }

  const message =
    "Hello, I would like to make an enquiry about Crestfield Academy.";

  whatsappLink.href =
    "https://wa.me/" +
    schoolWhatsAppNumber +
    "?text=" +
    encodeURIComponent(message);
});
