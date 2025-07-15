(() => {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));
})();

document.addEventListener("DOMContentLoaded", () => {
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
  const charCounter = document.getElementById("charCounter");
  const CHAR_LIMIT = 100;

  const DEFAULT_SPACING = 100;
  const EXPANDED_SPACING = 290;

  let events = JSON.parse(localStorage.getItem("timelineEvents") || "[]");
  let editIndex = null;

  function save() {
    localStorage.setItem("timelineEvents", JSON.stringify(events));
  }

  function adjustSpacing(expandedIndex = null) {
    const allEvents = document.querySelectorAll(".timeline-event");
    allEvents.forEach((el, idx) => {
      if (expandedIndex === null || idx <= expandedIndex) {
        el.style.top = `${idx * DEFAULT_SPACING}px`;
      } else {
        el.style.top = `${
          expandedIndex * DEFAULT_SPACING + EXPANDED_SPACING + (idx - expandedIndex - 1) * DEFAULT_SPACING
        }px`;
      }
    });

    setTimeout(() => {
      const line = document.querySelector(".timeline-line");
      if (line) {
        line.style.height = timelineContainer.scrollHeight + "px";
      }
    }, 0);
  }

  function render() {
    timelineContainer.innerHTML = '<div class="timeline-line"></div>';

    if (events.length === 0) {
      emptyState.style.display = "block";
      timelineWrapper.style.display = "none";
      return;
    }

    emptyState.style.display = "none";
    timelineWrapper.style.display = "block";

    events.forEach((ev, idx) => {
      const el = document.createElement("div");
      el.className = "timeline-event";
      el.style.top = idx * DEFAULT_SPACING + "px";

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

      const label = el.querySelector(".timeline-label");
      label.title = "Click to expand";

      // Click-to-expand behavior
      label.addEventListener("click", () => {
        const isExpanded = label.classList.contains("expanded");

        // Collapse all
        document.querySelectorAll(".timeline-label.expanded").forEach((l) => {
          l.classList.remove("expanded");
        });

        if (!isExpanded) {
          label.classList.add("expanded");
          adjustSpacing(idx);
        } else {
          adjustSpacing(null);
        }
      });

      // Edit Event
      el.querySelector(".edit-btn").addEventListener("click", () => {
        editIndex = idx;
        eventDate.value = ev.date;
        eventDesc.value = ev.description;
        charCounter.textContent = `${ev.description.length} / ${CHAR_LIMIT}`;
        formOverlay.classList.add("active");
      });

      // Delete Event
      el.querySelector(".delete-btn").addEventListener("click", () => {
        if (confirm("Delete this event?")) {
          events.splice(idx, 1);
          save();
          render();
        }
      });

      timelineContainer.appendChild(el);
    });

    adjustSpacing(null);
  }

  // Live character counter
  function updateCharCounter() {
    const val = eventDesc.value;
    if (val.length > CHAR_LIMIT) {
      eventDesc.value = val.slice(0, CHAR_LIMIT);
    }
    charCounter.textContent = `${eventDesc.value.length} / ${CHAR_LIMIT}`;
  }

  // Add New Event
  addBtn.addEventListener("click", () => {
    editIndex = null;
    eventForm.reset();
    eventDate.valueAsDate = new Date();
    charCounter.textContent = `0 / ${CHAR_LIMIT}`;
    formOverlay.classList.add("active");
  });

  // Cancel form
  cancelBtn.addEventListener("click", () => {
    formOverlay.classList.remove("active");
  });

  // Click outside form to close
  formOverlay.addEventListener("click", (e) => {
    if (e.target === formOverlay) {
      formOverlay.classList.remove("active");
    }
  });

  eventDesc.addEventListener("input", updateCharCounter);

  // Save form
  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = eventDate.value.trim();
    const desc = eventDesc.value.trim();

    if (editIndex !== null) {
      events[editIndex] = { date, description: desc };
    } else {
      events.push({ date, description: desc });
    }

    save();
    render();
    formOverlay.classList.remove("active");
  });

  // Theme toggle
  themeToggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  render();
});
