// ── Set to true to show gold debug borders on all blocks ──
const DEBUG = true;
if (DEBUG) document.body.classList.add('debug');

const BOOKS_PER_PAGE = 5;
let currentPage = 1;
let activeGenre = 'All';

// ── Filter logic ────────────────────────────────────────
function getFiltered() {
  return BOOKS.filter(b =>
    activeGenre === 'All' || b.genre === activeGenre
  );
}

// ── Render genre filter ──────────────────────────────────
function renderGenreFilter() {
  const genres = ['All', ...new Set(BOOKS.map(b => b.genre))];
  const list = document.getElementById('genre-list');
  list.innerHTML = genres.map(g => `
    <li>
      <a href="#" class="genre-link ${g === activeGenre ? 'active' : ''}" data-genre="${g}">
        ${g}
      </a>
    </li>
  `).join('');
  list.querySelectorAll('.genre-link').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      activeGenre = a.dataset.genre;
      currentPage = 1;
      renderAll();
    });
  });
}

// ── Render grid ──────────────────────────────────────────
function renderGrid(filtered) {
  const start = (currentPage - 1) * BOOKS_PER_PAGE;
  const page = filtered.slice(start, start + BOOKS_PER_PAGE);
  const grid = document.getElementById('grid');

  if (page.length === 0) {
    grid.innerHTML = '<p class="text-muted p-3">No books match your filters.</p>';
    return;
  }

  grid.innerHTML = page.map(b => `
    <div class="col">
      <div class="card h-100 shadow-sm" onclick="location.href='book.html?id=${b.id}'" style="cursor:pointer;">
        <img src="${b.cover}" alt="${b.title}" class="card-img-top">
        <div class="card-body d-flex flex-column p-2">
          <h6 class="card-title mb-1">${b.title}</h6>
          <p class="text-muted mb-1" style="font-size:0.8rem;">${b.author}</p>
          <div class="mb-1">
            <span class="book-price">£${b.price.toFixed(2)}</span>
          </div>
          <div class="mt-auto">
            ${b.inStock
              ? '<span class="badge bg-success">In Stock</span>'
              : '<span class="badge bg-secondary">Out of Stock</span>'}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Render pagination ────────────────────────────────────
function renderPagination(filtered) {
  const totalPages = Math.ceil(filtered.length / BOOKS_PER_PAGE);
  const ul = document.getElementById('pagination');

  if (totalPages <= 1) { ul.innerHTML = ''; return; }

  let html = `
    <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
      <a class="page-link" href="#" data-page="${currentPage - 1}">&laquo; Prev</a>
    </li>
  `;
  for (let i = 1; i <= totalPages; i++) {
    html += `
      <li class="page-item ${i === currentPage ? 'active' : ''}">
        <a class="page-link" href="#" data-page="${i}">${i}</a>
      </li>
    `;
  }
  html += `
    <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
      <a class="page-link" href="#" data-page="${currentPage + 1}">Next &raquo;</a>
    </li>
  `;
  ul.innerHTML = html;

  ul.querySelectorAll('.page-link').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const p = Number(a.dataset.page);
      if (p >= 1 && p <= totalPages) {
        currentPage = p;
        renderAll();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

// ── Debug labels: stamp each bordered block with its class name ──
function applyDebugLabels() {
  if (!DEBUG) return;
  const selectors = [
    'nav', 'footer', 'aside', 'section',
    '.card', '.card-body',
    '.pagination', '#genre-list',
    '.container', '.container-fluid'
  ];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      const tag = el.tagName.toLowerCase();
      const classes = el.className
        ? '.' + el.className.trim().split(/\s+/).join('.')
        : '';
      el.setAttribute('data-debug-label', tag + classes);
    });
  });
}

// ── Render all ───────────────────────────────────────────
function renderAll() {
  const filtered = getFiltered();
  renderGenreFilter();
  renderGrid(filtered);
  renderPagination(filtered);
  applyDebugLabels();
}

document.addEventListener('DOMContentLoaded', renderAll);
