# Book Store Site — LLM Agent Build Instructions

## Overview

Build a static book catalogue site visually similar to [books.toscrape.com](https://books.toscrape.com/index.html). The stack is plain HTML, CSS, and vanilla JavaScript — no React, no Vue, no framework, no bundler, no npm. Open the HTML files directly in a browser; everything must work from the file system without a server.

All book cover images must use the single file `cover.jpg` already present in the project root.

---

## Project Structure

```
books_site/
├── cover.jpg        ← already exists, do not create or replace
├── bootstrap.css    ← already exists, do not create or replace
├── style.css        ← custom styles, created by the agent
├── index.html       ← catalogue page
├── book.html        ← book detail page
└── books-data.js    ← shared book data, loaded via <script> tag
```

No build step, no `package.json`, no config files.

---

## Book Data (`books-data.js`)

This file must assign a global variable — **not** an ES module export — so it can be loaded with a plain `<script>` tag and shared between both HTML pages.

```js
const BOOKS = [ /* array of book objects */ ];
```

Include **10 book objects**. Each object must have:

| Field | Type | Notes |
|---|---|---|
| `id` | number | unique, sequential from 1 |
| `title` | string | realistic book title |
| `author` | string | realistic author name |
| `price` | number | GBP, two decimal places, e.g. `12.99` |
| `rating` | number | integer 1–5 |
| `genre` | string | `"Mystery"` or `"Humour"` |
| `inStock` | boolean | ~80 % true |
| `description` | string | 2–4 sentences of realistic copy |
| `cover` | string | always `"cover.jpg"` |

---

## Pages

### `index.html` — Catalogue Page

Load `bootstrap.css`, then `style.css`, then `books-data.js` in `<head>` / before the inline script:

```html
<link rel="stylesheet" href="bootstrap.css">
<link rel="stylesheet" href="style.css">
<script src="books-data.js"></script>
<script> /* page logic here */ </script>
```

Page structure:

```
<header>    site name left, basket icon + count badge right
<main>
  <aside>   genre filter links + star-rating filter
  <section> book grid + pagination controls
<footer>    copyright line
```

Use Bootstrap 5 utility classes and components directly on HTML elements. All JavaScript goes in a `<script>` block before `</body>`. No external files other than `bootstrap.css`, `style.css`, and `books-data.js`.

The grid, filters, and pagination are rendered by JavaScript into bare container elements (`<div id="grid"></div>`, etc.). The HTML only provides the skeleton.

### `book.html` — Book Detail Page

Same header and footer as `index.html`. Load `bootstrap.css`, `style.css`, and `books-data.js` the same way.

```
<header>    site name + basket icon
<main>
  <a href="index.html">← Back to catalogue</a>
  <div id="detail"></div>
<footer>
```

JavaScript reads `?id=N` from the URL and renders the matching book into `#detail`.

---

## JavaScript Logic

### Catalogue page (`index.html` inline script)

1. **State**: `currentPage = 1`, `activeGenre = 'All'`, `minRating = 0`.
2. **Filter**: derive `filtered = BOOKS.filter(...)` based on state.
3. **Render grid**: slice `filtered` to the current page (5 books per page), build card HTML, inject into `#grid`. Each card contains:
   - `<img src="cover.jpg" alt="{title}">`
   - Star display using ★ / ☆ characters
   - Title (one line, ellipsis)
   - Price as `£X.XX`
   - "In Stock" or "Out of Stock" badge
   - "Add to Basket" button
   - Clicking the title or cover image goes to `book.html?id={id}`
4. **Pagination**: render Previous / page numbers / Next buttons below the grid. Clicking updates `currentPage` and re-renders.
5. **Filters**: render genre links ("All", "Mystery", "Humour") and star buttons (1★–5★) into `<aside>`. Clicking resets `currentPage` to 1 and re-renders.
6. **Basket**: stored in `localStorage` as a JSON array of book ids. `addToBasket(id)` pushes the id and saves. Header badge shows total count. Clicking "Add to Basket" calls this and shows a toast.
7. **Toast**: a `<div>` fixed to bottom-right, shown for 2.5 s then removed. Append each toast so multiple can stack.
8. On `DOMContentLoaded`, render everything.

### Book detail page (`book.html` inline script)

1. Read `new URLSearchParams(location.search).get('id')`.
2. Find `BOOKS.find(b => b.id === Number(id))`.
3. If not found: show "Book not found" and a link back.
4. Otherwise render into `#detail`:
   - Large `<img src="cover.jpg">`
   - Full title and author
   - Stars, price, genre badge, stock status
   - Full description
   - "Add to Basket" button (same basket logic)
5. Set `document.title` to the book title.
6. Basket badge in header uses the same `localStorage` key.

---

## Styling

Styling uses two layers:

1. **Bootstrap 5** (`bootstrap.css`) — use its utility classes and components on HTML elements wherever possible (grid, flex, buttons, badges, cards, spacing, text helpers).
2. **`style.css`** — a single custom stylesheet for everything Bootstrap cannot cover. Write all custom rules here; no `<style>` blocks inside the HTML files.

### Bootstrap usage guidance

Use these Bootstrap patterns:

| UI element | Bootstrap approach |
|---|---|
| Page layout | `container-fluid`, `row`, `col` |
| Aside + section | `d-flex`, `gap-3` on `<main>`; aside as a fixed-width `col-auto` |
| Book grid | `row row-cols-2 row-cols-md-4 g-3` |
| Cards | `card h-100` with `card-img-top`, `card-body`, `card-title`, `card-text` |
| Buttons | `btn btn-success btn-sm w-100` |
| Stock badge | `badge bg-success` / `badge bg-secondary` |
| Header | `navbar navbar-dark bg-dark px-4` |
| Footer | `text-center text-muted py-3` |
| Toast wrapper | `position-fixed bottom-0 end-0 p-3` |
| Toast element | `toast show` (manually managed, not Bootstrap JS) |

### `style.css` — custom rules

Define CSS custom properties at the top:

```css
:root {
  --accent: #2a9d4e;
  --accent-dark: #228a40;
  --star-color: #f4a800;
  --card-img-ratio: 2/3;
}
```

Write custom rules only for things Bootstrap utilities cannot handle:

- **Card image:** `aspect-ratio: var(--card-img-ratio)`, `object-fit: cover`, `width: 100%`.
- **Card title:** `white-space: nowrap`, `overflow: hidden`, `text-overflow: ellipsis`.
- **Card hover:** `transform: scale(1.02)`, `transition: transform .2s`, slightly elevated shadow.
- **Price text:** `color: var(--accent)`, `font-weight: 700`.
- **Stars:** colour `var(--star-color)`, `font-size: 0.9rem`, `letter-spacing: 2px`.
- **Active genre link:** `border-left: 3px solid var(--accent)`, `font-weight: 600`, `padding-left: 0.5rem`.
- **Star filter buttons:** no border, no background, `color: var(--star-color)`, cursor pointer.
- **Toast fade-out:** `opacity` transition over `0.4s`.
- **Book detail cover:** `max-width: 220px`, `width: 100%`, `border-radius: 4px`, subtle shadow.
- **Responsive book detail:** at `max-width: 576px`, flex-direction switches to column.

---

## Behaviour Requirements

1. Filtering and pagination are purely client-side — filter `BOOKS` in memory, re-render.
2. Pagination resets to page 1 on any filter change.
3. The URL does not change when filters or pages change.
4. Basket persists across page loads via `localStorage` key `"basket"`.
5. Back link on `book.html` is always `href="index.html"`, never `history.back()`.
6. `cover.jpg` is always referenced as `"cover.jpg"` (same directory as the HTML files).
7. No external dependencies beyond `bootstrap.css` — no CDN links, no other libraries.
8. No `<style>` blocks inside HTML files — all custom CSS lives in `style.css` only.

---

## Implementation Order

1. Write `books-data.js` with the 10 book objects.
2. Write `style.css` with all custom rules.
3. Write `index.html`: HTML skeleton with Bootstrap classes → inline `<script>` logic.
4. Write `book.html`: HTML skeleton with Bootstrap classes → inline `<script>` logic.
5. Open `index.html` in a browser and verify all features work.

---

## Acceptance Criteria

- Open `index.html` directly in a browser (no server needed) — page loads without errors.
- Book grid shows cards with cover image, stars, price, and stock badge.
- Genre filter and star filter work correctly.
- Pagination shows 5 books per page with working controls.
- Clicking a book opens `book.html?id={id}` with full book details.
- "Add to Basket" updates the header badge and shows a toast.
- Basket count persists on page reload.
- No console errors on either page.
