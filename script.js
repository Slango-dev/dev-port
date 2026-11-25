// ================= PORTFOLIO INTERACTIVE FUNCTIONS =================
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. AUTOMATIC FOOTER YEAR
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. MOBILE NAVIGATION MENU TOGGLE
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close mobile menu automatically after clicking a section link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 3. ONE-CLICK COPY EMAIL ADDRESS BUTTON
  // NOTE: Make sure you update data-email="your.email@example.com" in index.html!
  const copyEmailBtn = document.getElementById("copyEmailBtn");

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      const emailToCopy = copyEmailBtn.getAttribute("data-email");
      const originalText = copyEmailBtn.textContent;

      try {
        await navigator.clipboard.writeText(emailToCopy);
        copyEmailBtn.textContent = "Copied to Clipboard!";
        copyEmailBtn.style.borderColor = "#10b981";
        copyEmailBtn.style.color = "#10b981";
      } catch (err) {
        // Fallback if clipboard permissions are blocked in local file preview
        copyEmailBtn.textContent = emailToCopy;
      }

      setTimeout(() => {
        copyEmailBtn.textContent = originalText;
        copyEmailBtn.style.borderColor = "";
        copyEmailBtn.style.color = "";
      }, 2500);
    });
  }

  // 4. HIGHLIGHT ACTIVE SECTION IN NAVBAR ON SCROLL
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      const matchingLink = document.querySelector(`.nav-link[href="#${id}"]`);

      if (matchingLink) {
        if (scrollPos >= top && scrollPos < top + height) {
          matchingLink.classList.add("active");
        } else {
          matchingLink.classList.remove("active");
        }
      }
    });
  });
});