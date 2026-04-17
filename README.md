# Books to Read

A static book catalogue site built with plain HTML, CSS, and vanilla JavaScript. No build tools or server required — open `index.html` directly in a browser.

## Files

| File | Purpose |
|---|---|
| `index.html` | Catalogue page with genre filter, book grid, and pagination |
| `book.html` | Book detail page, driven by `?id=N` query param |
| `books-data.js` | All book data as a global `BOOKS` array |
| `script.js` | All catalogue page JavaScript |
| `style.css` | Custom styles (loaded on top of Bootstrap) |
| `bootstrap.css` | Bootstrap 5 base styles |
| `cover.jpg` | Shared cover image used by all books |

## How to run

Open `index.html` in any modern browser. No server or install needed.

## Debug mode — gold borders

A `DEBUG` flag adds a **gold border** to every major layout block on the page. This makes it easy to see how elements are sized and positioned.

**To enable on the catalogue page (`index.html`):**

1. Open `script.js`
2. Change the first line from:
   ```js
   const DEBUG = false;
   ```
   to:
   ```js
   const DEBUG = true;
   ```
3. Refresh the browser — all blocks (navbar, aside, cards, card bodies, images, pagination, etc.) will show a `2px solid gold` border.

**To enable on the detail page (`book.html`):**

The detail page has its own copy of the flag in an inline script. Open `book.html`, find the line near the bottom:
```js
const DEBUG = false;
```
and change it to `true`.

**To disable:** set `DEBUG` back to `false` in the relevant file and refresh.
