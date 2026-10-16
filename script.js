
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

function closeMenu() {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";

  if (isOpen) {
    mainNav.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation");
    document.body.classList.add("menu-open");
  } else {
    closeMenu();
  }
});

// Close the menu when a navigation link is selected.
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Close the menu with Escape.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// Reset the mobile menu when returning to desktop width.
window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});

// Automatically update the copyright year.
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal content smoothly as sections enter the viewport.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -30px 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

// Demo contact: insert the real school's WhatsApp number
// using international format without +, spaces or hyphens.
const schoolWhatsAppNumber = "";

const whatsappLink = document.getElementById("whatsappLink");

whatsappLink.addEventListener("click", (event) => {
  if (!schoolWhatsAppNumber) {
    event.preventDefault();

    alert(
      "This is a portfolio demo. Add a school WhatsApp number in script.js to activate this contact button."
    );

    return;
  }

  const message =
    "Hello, I would like to enquire about admissions at Crestfield Academy.";

  whatsappLink.href =
    "https://wa.me/" +
    schoolWhatsAppNumber +
    "?text=" +
    encodeURIComponent(message);
});
