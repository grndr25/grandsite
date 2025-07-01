// ========== SIDEBAR LINK TO SECTION SWITCHING ==========
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.sidebar-menu a');
  const sections = document.querySelectorAll('.content-section');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.dataset.section;

      sections.forEach(sec => sec.classList.remove('active'));
      const targetSection = document.getElementById(targetId);
      if (targetSection) targetSection.classList.add('active');

      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});

// ========== MODALS ==========
function openModal(id) {
  closeModal(); // Ensure only one modal is open at a time
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "block";
}

function closeModal(id = null) {
  if (id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
  } else {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => modal.style.display = "none");
  }
}

// Close modal when clicking outside
window.addEventListener("click", event => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// ========== INDIVIDUAL OPEN FUNCTIONS ==========
function openUdpModal() { openModal("udpModal"); }
function openManipModal() { openModal("manipModal"); }
function openDigitalModal() { openModal("digitalModal"); }
function openTraditionalModal() { openModal("traditionalModal"); }
function openConcreteModal() { openModal("concreteModal"); }
function openMusicModal() { openModal("musicModal"); }
function openActivitiesModal() { openModal("activitiesModal"); }
function openProseModal() {
  currentPage = 1;
  showPage(currentPage);
  openModal("proseModal");
}
function openFictionModal() {
  fictionCurrentPage = 1;
  showFictionPage(fictionCurrentPage);
  openModal("fictionModal");
}

// ========== PAGINATION FOR PROSE ==========
let currentPage = 1;
const totalPages = 10;

function showPage(pageNum) {
  for (let i = 1; i <= totalPages; i++) {
    const page = document.getElementById(`bookPage${i}`);
    if (page) {
      page.style.display = (i === pageNum) ? 'block' : 'none';
    }
  }

  const indicator = document.getElementById("pageIndicator");
  if (indicator) {
    indicator.textContent = `${pageNum} / ${totalPages}`;
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

// ========== PAGINATION FOR FICTION ==========
let fictionCurrentPage = 1;
const fictionTotalPages = 13;

function showFictionPage(pageNum) {
  for (let i = 1; i <= fictionTotalPages; i++) {
    const page = document.getElementById(`fictionPage${i}`);
    if (page) {
      page.style.display = (i === pageNum) ? 'block' : 'none';
    }
  }

  const indicator = document.getElementById("fictionPageIndicator");
  if (indicator) {
    indicator.textContent = `${pageNum} / ${fictionTotalPages}`;
  }
}

function nextFictionPage() {
  if (fictionCurrentPage < fictionTotalPages) {
    fictionCurrentPage++;
    showFictionPage(fictionCurrentPage);
  }
}

function prevFictionPage() {
  if (fictionCurrentPage > 1) {
    fictionCurrentPage--;
    showFictionPage(fictionCurrentPage);
  }
}

function openSoloModal() {
    document.getElementById("soloModal").style.display = "block";
  }

  function closeSoloModal() {
    document.getElementById("soloModal").style.display = "none";
  }

  // Optional: Close modal when clicking outside the content
  window.onclick = function (event) {
    const modal = document.getElementById("soloModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  function openConcertModal() {
  document.getElementById("concertModal").style.display = "block";
}

function closeConcertModal() {
  document.getElementById("concertModal").style.display = "none";
}

function openUpdatesModal() {
  document.getElementById("updatesModal").style.display = "block";
}

function closeUpdatesModal() {
  document.getElementById("updatesModal").style.display = "none";
}
