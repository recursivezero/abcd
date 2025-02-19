document.querySelector("dialog").addEventListener("close", (e) => {
  const dialog = e.target;
  dialog.setAttribute("closing", "");
  dialog.addEventListener(
    "animationend",
    () => {
      dialog.removeAttribute("closing");
    },
    { once: true }
  );
});
