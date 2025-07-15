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

  const deleteModal = document.getElementById("deleteModal");
  const cancelDeleteBtn = document.getElementById("cancelDelete");
  const confirmDeleteBtn = document.getElementById("confirmDelete");

  const CHAR_LIMIT = 100;
  const DEFAULT_SPACING = 100;
  const EXPANDED_SPACING = 290;

  let events = JSON.parse(localStorage.getItem("timelineEvents") || "[]");
  let expandedIndexes = JSON.parse(localStorage.getItem("expandedLabels") || "[]");
  let editIndex = null;
  let deleteIndex = null;

  function save() {
    localStorage.setItem("timelineEvents", JSON.stringify(events));
  }

  function saveExpanded() {
    localStorage.setItem("expandedLabels", JSON.stringify(expandedIndexes));
  }

  function adjustSpacing() {
    const allEvents = document.querySelectorAll(".timeline-event");
    let currentTop = 0;

    allEvents.forEach((el, idx) => {
      el.style.top = `${currentTop}px`;
      const isExpanded = expandedIndexes.includes(idx);
      currentTop += isExpanded ? EXPANDED_SPACING : DEFAULT_SPACING;
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

      el.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-label ${idx % 2 === 0 ? "left" : "right"} ${
          expandedIndexes.includes(idx) ? "expanded" : ""
        }">
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

      label.addEventListener("click", () => {
        const isExpanded = label.classList.contains("expanded");

        if (isExpanded) {
          label.classList.remove("expanded");
          expandedIndexes = expandedIndexes.filter((i) => i !== idx);
        } else {
          label.classList.add("expanded");
          expandedIndexes.push(idx);
        }

        saveExpanded();
        adjustSpacing();
      });

      // Edit button logic
      el.querySelector(".edit-btn").addEventListener("click", () => {
        editIndex = idx;
        eventDate.value = ev.date;
        eventDesc.value = ev.description;
        charCounter.textContent = `${ev.description.length} / ${CHAR_LIMIT}`;
        formOverlay.classList.add("active");
      });

      // Delete button logic (open modal)
      el.querySelector(".delete-btn").addEventListener("click", () => {
        deleteIndex = idx;
        deleteModal.classList.add("active");
      });

      timelineContainer.appendChild(el);
    });

    adjustSpacing();
  }

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

  cancelBtn.addEventListener("click", () => {
    formOverlay.classList.remove("active");
  });

  formOverlay.addEventListener("click", (e) => {
    if (e.target === formOverlay) {
      formOverlay.classList.remove("active");
    }
  });

  eventDesc.addEventListener("input", updateCharCounter);

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
    formOverlay.classList.remove("active");
    render();
  });

  themeToggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  // Confirm delete modal
  cancelDeleteBtn.addEventListener("click", () => {
    deleteModal.classList.remove("active");
    deleteIndex = null;
  });

  confirmDeleteBtn.addEventListener("click", () => {
    if (deleteIndex !== null) {
      events.splice(deleteIndex, 1);
      expandedIndexes = expandedIndexes.filter((i) => i !== deleteIndex);
      save();
      saveExpanded();
      render();
      deleteModal.classList.remove("active");
      deleteIndex = null;
    }
  });

  deleteModal.addEventListener("click", (e) => {
    if (e.target === deleteModal) {
      deleteModal.classList.remove("active");
      deleteIndex = null;
    }
  });

  render();
});
