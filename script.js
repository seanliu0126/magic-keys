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



// =======================
// Tutor Calendar Modal
// =======================
document.addEventListener("DOMContentLoaded", function () {
  const calendarModal = document.getElementById("calendarModal");
  const openCalendar = document.getElementById("openCalendar");
  const closeCalendar = document.getElementById("closeCalendar");

  if (openCalendar && calendarModal && closeCalendar) {
    // Open the calendar modal
    openCalendar.addEventListener("click", (e) => {
      e.preventDefault();
      calendarModal.style.display = "block";
    });

    // Close when clicking the X
    closeCalendar.addEventListener("click", () => {
      calendarModal.style.display = "none";
    });

    // Close when clicking outside the modal
    window.addEventListener("click", (e) => {
      if (e.target === calendarModal) {
        calendarModal.style.display = "none";
      }
    });
  }
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




