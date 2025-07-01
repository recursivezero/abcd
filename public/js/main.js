// Language Switcher
const translations = {
  english: {
    zodiacsBtn: "Indian Sun Signs"
  },
  hindi: {
    zodiacsBtn: "भारतीय राशियाँ"
  }
};

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang === "hindi" ? "hi" : "en";
  document.body.classList.toggle("hindi", lang === "hindi");
  document.getElementById("englishBtn")?.classList.toggle("active", lang === "english");
  document.getElementById("hindiBtn")?.classList.toggle("active", lang === "hindi");
  // Update homepage button if present
  const zodiacsBtn = document.getElementById("zodiacsBtn");
  if (zodiacsBtn) zodiacsBtn.textContent = translations[lang].zodiacsBtn;
  window.dispatchEvent(new Event("languagechange"));
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("language") || "english";
  setLanguage(lang);

  // Attach event listeners
  document.getElementById("englishBtn")?.addEventListener("click", () => setLanguage("english"));
  document.getElementById("hindiBtn")?.addEventListener("click", () => setLanguage("hindi"));

  // Dark mode
  const darkToggle = document.getElementById("darkModeToggle");
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    if (darkToggle) darkToggle.checked = true;
  }
  darkToggle?.addEventListener("change", () => {
    const enabled = darkToggle.checked;
    document.body.classList.toggle("dark-mode", enabled);
    localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
  });

  // Zodiac page logic
  if (window.location.pathname.includes("zodiac")) {
    fetch("/data/zodiacs.json")
      .then((res) => res.json())
      .then((zodiacs) => {
        let currentLang = localStorage.getItem("language") || "english";
        const zodiacsGrid = document.getElementById("zodiacsGrid");
        function renderCards() {
          zodiacsGrid.innerHTML = "";
          zodiacs.forEach((zodiac, i) => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `<h3>${zodiac.name[currentLang]}</h3><p>${zodiac.dates[currentLang]}</p>`;
            card.addEventListener("click", () => openModal(i));
            zodiacsGrid.appendChild(card);
          });
        }
        function openModal(i) {
          const zodiac = zodiacs[i];
          document.getElementById("modalImage").src = `/data/zodiacim/${zodiac.image}`;
          document.getElementById("modalTitle").textContent = zodiac.name[currentLang];
          document.getElementById("modalDescription").textContent = zodiac.description[currentLang];
          document.getElementById("modalPoints").innerHTML = zodiac.points[currentLang]
            .map((pt) => `<li>${pt}</li>`)
            .join("");
          document.getElementById("zodiacModal").style.display = "block";
        }
        function closeModal() {
          document.getElementById("zodiacModal").style.display = "none";
        }
        document.querySelector(".close")?.addEventListener("click", closeModal);
        document.getElementById("zodiacModal")?.addEventListener("click", (e) => {
          if (e.target.id === "zodiacModal") closeModal();
        });
        window.addEventListener("languagechange", () => {
          currentLang = localStorage.getItem("language") || "english";
          renderCards();
        });
        renderCards();
      });
  }
});
