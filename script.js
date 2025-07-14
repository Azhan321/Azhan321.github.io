 function toggleMenu() {
      document.getElementById('menu').classList.toggle('active');
    }
 function switchTab(tabName) {
    const panels = document.querySelectorAll(".tab-panel");
    const buttons = document.querySelectorAll(".tab-btn");

    panels.forEach(panel => {
      panel.classList.remove("active");
      if (panel.classList.contains(tabName)) {
        panel.classList.add("active");
      }
    });

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
  }

  // Optional: default to show Experience on page load
  document.addEventListener("DOMContentLoaded", () => {
    switchTab("experience");
  });
   