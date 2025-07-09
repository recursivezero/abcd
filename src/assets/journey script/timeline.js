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

  let events = JSON.parse(localStorage.getItem("timelineEvents") || "[]");
  let editIndex = null;
  const DEFAULT_SPACING = 100;
  const HOVER_SPACING = 290;

  function save() {
    localStorage.setItem("timelineEvents", JSON.stringify(events));
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

      // Add hover effect to adjust spacing
      el.addEventListener("mouseenter", () => {
        adjustSpacingOnHover(idx, HOVER_SPACING);
      });

      el.addEventListener("mouseleave", () => {
        adjustSpacingOnHover(idx, DEFAULT_SPACING);
      });

      el.querySelector(".edit-btn").addEventListener("click", () => {
        editIndex = idx;
        eventDate.value = ev.date;
        eventDesc.value = ev.description;
        formOverlay.classList.add("active");
      });

      el.querySelector(".delete-btn").addEventListener("click", () => {
        if (confirm("Delete this event?")) {
          events.splice(idx, 1);
          save();
          render();
        }
      });

      timelineContainer.appendChild(el);
    });

    // Set dynamic height for the timeline line after DOM updates
    setTimeout(() => {
      const line = document.querySelector(".timeline-line");
      if (line) {
        const totalHeight = timelineContainer.scrollHeight;
        line.style.height = totalHeight + "px";
      }
    }, 0);

    timelineWrapper.scrollTop = timelineWrapper.scrollHeight;
  }

  function adjustSpacingOnHover(hoveredIndex, spacing) {
    const events = document.querySelectorAll(".timeline-event");
    events.forEach((event, idx) => {
      if (idx > hoveredIndex) {
        event.style.top = `${hoveredIndex * DEFAULT_SPACING + spacing + (idx - hoveredIndex - 1) * DEFAULT_SPACING}px`;
      }
    });
  }

  addBtn.addEventListener("click", () => {
    editIndex = null;
    eventForm.reset();
    formOverlay.classList.add("active");
  });

  cancelBtn.addEventListener("click", () => {
    formOverlay.classList.remove("active");
  });

  formOverlay.addEventListener("click", (e) => {
    if (e.target === formOverlay) {
      formOverlay.classList.remove("active");
    }
  });

  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const date = eventDate.value.trim();
    const desc = eventDesc.value.trim().split(/\s+/).slice(0, 40).join(" ");

    if (editIndex !== null) {
      events[editIndex] = { date, description: desc };
    } else {
      events.push({ date, description: desc });
    }

    save();
    render();
    formOverlay.classList.remove("active");
  });

  themeToggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  render();
});
