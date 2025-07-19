document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addEventBtn");
  const formOverlay = document.getElementById("formOverlay");
  const eventForm = document.getElementById("eventForm");
  const cancelBtn = document.getElementById("cancelBtn");
  const emptyState = document.getElementById("emptyState");
  const timelineWrapper = document.getElementById("timelineWrapper");
  const timelineContainer = document.getElementById("timelineContainer");
  const eventDate = document.getElementById("eventDate");
  const eventDesc = document.getElementById("eventDesc");
  const eventTitle = document.getElementById("eventTitle");
  const charCounter = document.getElementById("charCounter");
  const titleCounter = document.getElementById("titleCounter");
  const expandCollapseBtn = document.getElementById("expandCollapseBtn");
  const deleteModal = document.getElementById("deleteModal");
  const cancelDeleteBtn = document.getElementById("cancelDelete");
  const confirmDeleteBtn = document.getElementById("confirmDelete");

  const CHAR_LIMIT = 150;
  const TITLE_LIMIT = 20;
  const DEFAULT_SPACING = 100;
  const EXPANDED_SPACING = 290;

  let events = JSON.parse(localStorage.getItem("timelineEvents") || "[]");
  let editIndex = null;
  let deleteIndex = null;
  let allExpanded = false;
  let currentlyExpanded = new Set();

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  function sortEvents() {
    events.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  sortEvents();

  function saveEvents() {
    localStorage.setItem("timelineEvents", JSON.stringify(events));
  }

  function adjustSpacing() {
    const allEvents = document.querySelectorAll(".timeline-event");
    let currentTop = 0;

    allEvents.forEach((el, idx) => {
      el.style.top = `${currentTop}px`;
      currentTop += allExpanded || currentlyExpanded.has(idx) ? EXPANDED_SPACING : DEFAULT_SPACING;
    });

    const line = document.querySelector(".timeline-line");
    if (line) line.style.height = `${currentTop}px`;
  }

  function toggleAllLabels() {
    allExpanded = !allExpanded;
    expandCollapseBtn.textContent = allExpanded ? "↕️ Collapse All" : "↕️ Expand All";
    if (allExpanded) currentlyExpanded.clear();
    renderTimeline();
  }

  function renderTimeline() {
    timelineContainer.innerHTML = '<div class="timeline-line"></div>';

    if (events.length === 0) {
      emptyState.style.display = "block";
      timelineWrapper.style.display = "none";
      return;
    }

    emptyState.style.display = "none";
    timelineWrapper.style.display = "block";
    sortEvents();

    events.forEach((event, idx) => {
      const eventElement = document.createElement("div");
      eventElement.className = "timeline-event";

      const isExpanded = allExpanded || currentlyExpanded.has(idx);

      eventElement.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-label ${idx % 2 === 0 ? "left" : "right"} ${isExpanded ? "expanded" : ""}">
          <span class="event-date">${formatDate(event.date)}</span>
          <span class="event-title"><strong>${event.title || "Untitled"}</strong></span>
          <span class="event-description">${event.description}</span>
          <div class="event-actions">
            <button class="edit-btn">✏️ Edit</button>
            <button class="delete-btn">🗑️ Delete</button>
          </div>
        </div>
      `;

      const label = eventElement.querySelector(".timeline-label");

      label.addEventListener("click", (e) => {
        if (e.target.closest(".edit-btn") || e.target.closest(".delete-btn")) return;
        if (allExpanded) return;

        if (currentlyExpanded.has(idx)) {
          currentlyExpanded.delete(idx);
          label.classList.remove("expanded");
        } else {
          currentlyExpanded.add(idx);
          label.classList.add("expanded");
        }

        adjustSpacing();
      });

      eventElement.querySelector(".edit-btn").addEventListener("click", () => {
        editIndex = idx;
        eventTitle.value = event.title || "";
        eventDate.value = event.date;
        eventDesc.value = event.description;
        titleCounter.textContent = `${event.title?.length || 0} / ${TITLE_LIMIT}`;
        charCounter.textContent = `${event.description.length} / ${CHAR_LIMIT}`;
        formOverlay.classList.add("active");
      });

      eventElement.querySelector(".delete-btn").addEventListener("click", () => {
        deleteIndex = idx;
        deleteModal.classList.add("active");
      });

      timelineContainer.appendChild(eventElement);
    });

    adjustSpacing();
  }

  function updateCharCounter() {
    const text = eventDesc.value;
    if (text.length > CHAR_LIMIT) eventDesc.value = text.slice(0, CHAR_LIMIT);
    charCounter.textContent = `${eventDesc.value.length} / ${CHAR_LIMIT}`;
  }

  function updateTitleCounter() {
    const text = eventTitle.value;
    if (text.length > TITLE_LIMIT) eventTitle.value = text.slice(0, TITLE_LIMIT);
    titleCounter.textContent = `${eventTitle.value.length} / ${TITLE_LIMIT}`;
  }

  addBtn.addEventListener("click", () => {
    editIndex = null;
    eventForm.reset();
    eventTitle.value = "";
    eventDesc.value = "";
    eventDate.valueAsDate = new Date();
    titleCounter.textContent = `0 / ${TITLE_LIMIT}`;
    charCounter.textContent = `0 / ${CHAR_LIMIT}`;
    formOverlay.classList.add("active");
  });

  cancelBtn.addEventListener("click", () => {
    formOverlay.classList.remove("active");
  });

  formOverlay.addEventListener("click", (e) => {
    if (e.target === formOverlay) formOverlay.classList.remove("active");
  });

  eventDesc.addEventListener("input", updateCharCounter);
  eventTitle.addEventListener("input", updateTitleCounter);

  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = eventTitle.value.trim();
    let date = eventDate.value.trim();
    const description = eventDesc.value.trim();

    if (!date) {
      alert("Please enter a date");
      return;
    }

    if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
      const dateObj = new Date(date);
      if (isNaN(dateObj)) {
        alert("Please enter a valid date");
        return;
      }
      date = dateObj.toISOString().split("T")[0];
    }

    if (editIndex !== null) {
      events[editIndex] = { title, date, description };
    } else {
      events.push({ title, date, description });
    }

    sortEvents();
    saveEvents();
    formOverlay.classList.remove("active");
    renderTimeline();
  });

  expandCollapseBtn.addEventListener("click", toggleAllLabels);

  cancelDeleteBtn.addEventListener("click", () => {
    deleteModal.classList.remove("active");
    deleteIndex = null;
  });

  confirmDeleteBtn.addEventListener("click", () => {
    if (deleteIndex !== null) {
      events.splice(deleteIndex, 1);
      currentlyExpanded.delete(deleteIndex);
      saveEvents();
      renderTimeline();
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

  renderTimeline();
});
