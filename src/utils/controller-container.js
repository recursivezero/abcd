// ControllerContainer logic, reusable for any page

document.addEventListener("DOMContentLoaded", () => {
  const caseToggle = document.querySelector(".case-toggle");
  const fontToggle = document.querySelector(".font-toggle");
  const imgToggle = document.querySelector(".img-toggle");
  const colorToggle = document.querySelector(".color-toggle");
  const bgToggle = document.querySelector(".bg-toggle");
  const resetButton = document.getElementById("resetButton");

  const toggleImgSwitch = document.getElementById("toggleImg");
  const toggleCaseSwitch = document.getElementById("toggleCase");
  const toggleFontSwitch = document.getElementById("toggleFont");
  const toggleBackgroundSwitch = document.getElementById("toggleBg");
  const toggleColorSwitch = document.getElementById("toggleColor");
  const mainEl = document.querySelector("main");
  const boardDiv = document.getElementById("board");
  const charDiv = document.getElementById("char");
  const info = document.querySelector(".info");

  const originalState = {
    mainElBackgroundBlendMode: "normal",
    mainElFilter: "brightness(1)",
    boardDivBackgroundColor: "",
    boardDivBackgroundImage: "",
    charDivFontFamily: "",
    charDivColor: "",
    infoText: "Press any key",
    charText: ""
  };

  const controlButtons = [caseToggle, fontToggle, imgToggle, colorToggle, bgToggle, resetButton];
  let isKeyboardNav = false;

  if (caseToggle) {
    caseToggle.addEventListener("click", () => {
      const isActive = caseToggle.classList.contains("active");
      if (isActive) {
        caseToggle.classList.remove("active");
        caseToggle.setAttribute("aria-checked", "false");
        caseToggle.textContent = "Aa";
        caseToggle.style.fontSize = "1.25rem";
      } else {
        caseToggle.classList.add("active");
        caseToggle.setAttribute("aria-checked", "true");
        caseToggle.textContent = "Aa";
        caseToggle.style.fontSize = "1rem";
      }
    });
  }

  if (fontToggle) {
    fontToggle.addEventListener("click", () => {
      const isActive = fontToggle.classList.contains("active");
      if (!isActive) {
        fontToggle.classList.add("active");
        fontToggle.setAttribute("aria-checked", "true");
        if (toggleFontSwitch) toggleFontSwitch.checked = true;
      }
    });
  }

  if (imgToggle) {
    imgToggle.addEventListener("click", () => {
      const isActive = imgToggle.classList.contains("active");
      if (!isActive) {
        bgToggle && bgToggle.classList.remove("active");
        bgToggle && bgToggle.setAttribute("aria-checked", "false");
        if (toggleBackgroundSwitch) toggleBackgroundSwitch.checked = false;
        imgToggle.classList.add("active");
        imgToggle.setAttribute("aria-checked", "true");
        if (toggleImgSwitch) toggleImgSwitch.checked = true;
      }
    });
  }

  if (colorToggle) {
    colorToggle.addEventListener("click", () => {
      const isActive = colorToggle.classList.contains("active");
      if (!isActive) {
        colorToggle.classList.add("active");
        colorToggle.setAttribute("aria-checked", "true");
        if (toggleColorSwitch) toggleColorSwitch.checked = true;
      }
    });
  }

  if (bgToggle) {
    bgToggle.addEventListener("click", () => {
      const isActive = bgToggle.classList.contains("active");
      if (!isActive) {
        imgToggle && imgToggle.classList.remove("active");
        imgToggle && imgToggle.setAttribute("aria-checked", "false");
        if (toggleImgSwitch) toggleImgSwitch.checked = false;
        bgToggle.classList.add("active");
        bgToggle.setAttribute("aria-checked", "true");
        if (toggleBackgroundSwitch) toggleBackgroundSwitch.checked = true;
      }
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      caseToggle && caseToggle.classList.remove("active");
      caseToggle && caseToggle.setAttribute("aria-checked", "false");
      caseToggle && (caseToggle.textContent = "Aa");
      caseToggle && (caseToggle.style.fontSize = "1.25rem");
      fontToggle && fontToggle.classList.remove("active");
      fontToggle && fontToggle.setAttribute("aria-checked", "false");
      imgToggle && imgToggle.classList.remove("active");
      imgToggle && imgToggle.setAttribute("aria-checked", "false");
      colorToggle && colorToggle.classList.remove("active");
      colorToggle && colorToggle.setAttribute("aria-checked", "false");
      bgToggle && bgToggle.classList.remove("active");
      bgToggle && bgToggle.setAttribute("aria-checked", "false");
      if (toggleCaseSwitch) toggleCaseSwitch.checked = false;
      if (toggleFontSwitch) toggleFontSwitch.checked = false;
      if (toggleImgSwitch) toggleImgSwitch.checked = false;
      if (toggleColorSwitch) toggleColorSwitch.checked = false;
      if (toggleBackgroundSwitch) toggleBackgroundSwitch.checked = false;
      if (mainEl) {
        mainEl.style.backgroundBlendMode = originalState.mainElBackgroundBlendMode;
        mainEl.style.filter = originalState.mainElFilter;
      }
      if (boardDiv) {
        boardDiv.style.backgroundColor = originalState.boardDivBackgroundColor;
        boardDiv.style.backgroundImage = originalState.boardDivBackgroundImage;
      }
      if (charDiv) {
        charDiv.style.fontFamily = originalState.charDivFontFamily;
        charDiv.style.color = originalState.charDivColor;
        charDiv.textContent = originalState.charText;
      }
      if (info) {
        info.textContent = originalState.infoText;
      }
      document.dispatchEvent(
        new CustomEvent("keyboardReset", {
          detail: { originalState: originalState }
        })
      );
    });
  }

  controlButtons.forEach((button) => {
    if (!button) return;
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        button.click();
      } else if (event.key === "Tab") {
        isKeyboardNav = true;
      }
    });
    button.addEventListener("focus", () => {
      if (isKeyboardNav) {
        controlButtons.forEach((btn) => btn && btn.classList.remove("keyboard-focus"));
        button.classList.add("keyboard-focus");
      }
    });
    button.addEventListener("blur", () => {
      button.classList.remove("keyboard-focus");
    });
    button.addEventListener("mousedown", () => {
      isKeyboardNav = false;
      button.classList.remove("keyboard-focus");
    });
  });

  document.addEventListener("mousedown", () => {
    isKeyboardNav = false;
    controlButtons.forEach((btn) => btn && btn.classList.remove("keyboard-focus"));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      isKeyboardNav = true;
    }
  });
});
