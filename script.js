window.addEventListener("load", function () {
  const startBtn = document.getElementById("startJourney");
  const target = document.getElementById("info");

  if (!startBtn || !target) return;

  startBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const startY = window.pageYOffset;
    const targetY = target.getBoundingClientRect().top + startY;
    const duration = 800; // adjust as needed
    const startTime = performance.now();

    function easeOutQuad(t) {
      return t * (2 - t); // starts faster
    }

    function scroll() {
      const now = performance.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);

      window.scrollTo(0, startY + (targetY - startY) * eased);

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");

  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
});
