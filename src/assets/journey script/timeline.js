// ------------------------------
// Apply Theme on First Load
// ------------------------------
(() => {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));
})();

// ------------------------------
// Main Logic After DOM Load
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Element references
  const addBtn = document.getElementById("addEventBtn");
  const formOverlay = document.getElementById("formOverlay");
  const eventForm = document.getElementById("eventForm");
  const cancelBtn = document.getElementById("cancelBtn");
  const emptyState = document.getElementById("emptyState");
  const timelineWrapper = document.getElementById("timelineWrapper");
  const timelineContainer = document.getElementById("timelineContainer");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const eventDate = document.getElementById("eventDate");
  const eventDesc = document.getElementById("eventDesc");

  // Load saved events from localStorage
  let events = JSON.parse(localStorage.getItem("timelineEvents") || "[]");

  // Track index for edit mode
  let editIndex = null;

  // Distance between events on the timeline (in px)
  const SPACING = 288;

  // ------------------------------
  // Save events to localStorage
  // ------------------------------
  function save() {
    localStorage.setItem("timelineEvents", JSON.stringify(events));
  }

  // ------------------------------
  // Render the timeline events
  // ------------------------------
  function render() {
    // Reset timeline content
    timelineContainer.innerHTML = '<div class="timeline-line"></div>';

    // If no events, show empty state
    if (events.length === 0) {
      emptyState.style.display = "block";
      timelineWrapper.style.display = "none";
      return;
    }

    // Show timeline and set height dynamically
    emptyState.style.display = "none";
    timelineWrapper.style.display = "block";
    timelineWrapper.style.height = events.length * SPACING + 100 + "px";

    // Render each event
    events.forEach((ev, idx) => {
      const el = document.createElement("div");
      el.className = "timeline-event";
      el.style.top = idx * SPACING + "px";

      // Create event HTML
      el.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-label ${idx % 2 === 0 ? "left" : "right"}">
          <span class="event-date">${ev.date}</span>
          <span class="event-description">${ev.description}</span>
          <div class="event-actions">
            <button class="edit-btn">✏️ Edit</button>
            <button class="delete-btn">🗑️ Delete</button>
          </div>
        </div>
      `;

      // Edit button handler
      el.querySelector(".edit-btn").addEventListener("click", () => {
        editIndex = idx;
        eventDate.value = ev.date;
        eventDesc.value = ev.description;
        formOverlay.classList.add("active");
      });

      // Delete button handler
      el.querySelector(".delete-btn").addEventListener("click", () => {
        if (confirm("Delete this event?")) {
          events.splice(idx, 1);
          save();
          render();
        }
      });

      timelineContainer.appendChild(el);
    });
  }

  // ------------------------------
  // Event: Add New Event
  // ------------------------------
  addBtn.addEventListener("click", () => {
    editIndex = null;
    eventForm.reset();
    formOverlay.classList.add("active");
  });

  // ------------------------------
  // Event: Cancel Button
  // ------------------------------
  cancelBtn.addEventListener("click", () => {
    formOverlay.classList.remove("active");
  });

  // ------------------------------
  // Close form if clicked outside
  // ------------------------------
  formOverlay.addEventListener("click", (e) => {
    if (e.target === formOverlay) {
      formOverlay.classList.remove("active");
    }
  });

  // ------------------------------
  // Event: Submit Form
  // ------------------------------
  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const date = eventDate.value.trim();
    const desc = eventDesc.value.trim().split(/\s+/).slice(0, 40).join(" "); // Limit to 40 words

    if (editIndex !== null) {
      // Update existing event
      events[editIndex] = { date, description: desc };
    } else {
      // Add new event
      events.push({ date, description: desc });
    }

    save();
    render();
    formOverlay.classList.remove("active");
  });

  // ------------------------------
  // Event: Toggle Theme
  // ------------------------------
  themeToggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  // Initial render
  render();
});
