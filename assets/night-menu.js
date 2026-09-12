document.documentElement.classList.add("js");

const menuControl = document.querySelector(".nightshift-menu-trigger");
const menuPanel = document.querySelector("#nightshift-navigation");
const narrowScreen = window.matchMedia("(max-width: 860px)");

function applyMenuMode(event) {
  if (!menuControl || !menuPanel) {
    return;
  }

  const mobile = event.matches;
  menuControl.setAttribute("aria-expanded", String(!mobile));
  menuPanel.hidden = mobile;
}

if (menuControl && menuPanel) {
  applyMenuMode(narrowScreen);

  menuControl.addEventListener("click", () => {
    const isOpen = menuControl.getAttribute("aria-expanded") === "true";
    menuControl.setAttribute("aria-expanded", String(!isOpen));
    menuPanel.hidden = isOpen;
  });

  narrowScreen.addEventListener("change", applyMenuMode);
}
