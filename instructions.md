# Book Catalogue Site — Complete One-Shot Build Prompt

You are building a static book catalogue site from scratch. Read every section before writing a single file. Build all files in the order specified at the end.

---

## Stack & Constraints

- Plain HTML, CSS, vanilla JavaScript — **no framework, no bundler, no npm, no CDN links**
- Must open directly in a browser from the file system (`file://`) — no server required
- `cover.jpg` and `bootstrap.css` already exist in the project root — **do not create or replace them**
- No `<style>` blocks inside HTML files — all custom CSS goes in `style.css` only
- No ES module exports — use plain `<script src="...">` tags and global variables

---

## File Structure

```
books_site/
├── cover.jpg          ← already exists
├── bootstrap.css      ← already exists
├── books-data.js      ← you create this
├── style.css          ← you create this
├── script.js          ← you create this
├── index.html         ← you create this
└── book.html          ← you create this
```

---

## 1. `books-data.js`

Assign a global array (not an ES module export). Must be exactly this data:

```js
const BOOKS = [
  {
    id: 1, title: "The Silent Patient", author: "Alex Michaelides",
    price: 8.99, genre: "Mystery", inStock: true,
    description: "Alicia Berenson's life is seemingly perfect — until she shoots her husband five times and never speaks another word. Her refusal to talk makes the case all the more mysterious, and detective Theo Faber becomes obsessed with uncovering the truth. A gripping psychological thriller that will leave you breathless.",
    cover: "cover.jpg"
  },
  {
    id: 2, title: "The Thursday Murder Club", author: "Richard Osman",
    price: 7.49, genre: "Mystery", inStock: true,
    description: "In a peaceful retirement village, four unlikely friends meet weekly to investigate unsolved crimes. When a real murder lands on their doorstep, they find themselves in the middle of their first live case. Sharp, funny, and utterly compelling.",
    cover: "cover.jpg"
  },
  {
    id: 3, title: "Magpie Murders", author: "Anthony Horowitz",
    price: 9.99, genre: "Mystery", inStock: true,
    description: "Editor Susan Ryeland is given a manuscript for the latest Atticus Pünd mystery — but the last chapter is missing, and the author is found dead. A brilliant novel-within-a-novel that celebrates and subverts the golden age of detective fiction.",
    cover: "cover.jpg"
  },
  {
    id: 4, title: "The No. 1 Ladies' Detective Agency", author: "Alexander McCall Smith",
    price: 6.99, genre: "Mystery", inStock: true,
    description: "Precious Ramotswe sets up Botswana's only female-run detective agency armed with little more than a kettle and her sharp intuition. Her cases range from the petty to the profound, all told with warmth and wisdom. A gentle, deeply human mystery series.",
    cover: "cover.jpg"
  },
  {
    id: 5, title: "In the Woods", author: "Tana French",
    price: 8.49, genre: "Mystery", inStock: false,
    description: "Detective Rob Ryan returns to the Dublin suburb where, as a child, two of his friends vanished without a trace. When a girl is murdered in the same woods, Ryan finds his past and present colliding in dangerous ways. Dark, atmospheric, and utterly absorbing.",
    cover: "cover.jpg"
  },
  {
    id: 6, title: "Gone Girl", author: "Gillian Flynn",
    price: 7.99, genre: "Mystery", inStock: true,
    description: "On their fifth wedding anniversary, Nick Dunne's wife Amy disappears. As the police investigation unfolds, the media descends and secrets emerge on both sides of the marriage. A razor-sharp dissection of modern relationships and the stories we tell ourselves.",
    cover: "cover.jpg"
  },
  {
    id: 7, title: "Big Little Lies", author: "Liane Moriarty",
    price: 8.49, genre: "Mystery", inStock: true,
    description: "Three women, three marriages, and one fatal night at a school trivia night. Moriarty weaves together dark secrets and sharp comedy to expose the hidden lives of suburban mothers. Impossible to put down.",
    cover: "cover.jpg"
  },
  {
    id: 8, title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson",
    price: 9.49, genre: "Mystery", inStock: true,
    description: "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate a forty-year-old disappearance within a powerful Swedish family. A labyrinthine thriller packed with corporate corruption and deeply compelling characters. The trilogy that changed crime fiction forever.",
    cover: "cover.jpg"
  },
  {
    id: 9, title: "And Then There Were None", author: "Agatha Christie",
    price: 6.49, genre: "Mystery", inStock: true,
    description: "Ten strangers are lured to a remote island and begin to die one by one in accordance with a nursery rhyme. Christie's most famous standalone novel remains the best-selling mystery of all time. A masterpiece of misdirection.",
    cover: "cover.jpg"
  },
  {
    id: 10, title: "The Name of the Rose", author: "Umberto Eco",
    price: 10.99, genre: "Mystery", inStock: false,
    description: "A Franciscan friar and his novice investigate a series of mysterious deaths at a medieval Italian abbey. Eco fuses detective fiction with semiotics, theology, and medieval history to dazzling effect. Dense, brilliant, and completely unlike anything else.",
    cover: "cover.jpg"
  },
  {
    id: 11, title: "The Devotion of Suspect X", author: "Keigo Higashino",
    price: 8.99, genre: "Mystery", inStock: true,
    description: "A brilliant mathematician helps his neighbour conceal a murder, then watches as a detective closes in. This inverted mystery asks not whodunit but how the detective will unravel an airtight alibi. A masterwork of Japanese crime fiction.",
    cover: "cover.jpg"
  },
  {
    id: 12, title: "Rebecca", author: "Daphne du Maurier",
    price: 7.99, genre: "Mystery", inStock: true,
    description: "A young woman marries a brooding widower and moves into his imposing Cornish estate, only to be haunted by the memory of his first wife. Du Maurier's gothic classic is as atmospheric and unsettling as ever. Last night I dreamt I went to Manderley again.",
    cover: "cover.jpg"
  },
  {
    id: 13, title: "The Woman in the Window", author: "A.J. Finn",
    price: 8.49, genre: "Mystery", inStock: true,
    description: "An agoraphobic woman watches her neighbours from her New York brownstone and believes she witnesses a crime. But can she trust what she saw — or herself? A claustrophobic, Hitchcock-inspired thriller.",
    cover: "cover.jpg"
  },
  {
    id: 14, title: "Crooked House", author: "Agatha Christie",
    price: 6.99, genre: "Mystery", inStock: false,
    description: "When the patriarch of the wealthy Leonides family is poisoned, the entire household becomes suspect. Christie considered this her personal favourite among all her novels. A gleefully dark twist ending that will shock even seasoned mystery readers.",
    cover: "cover.jpg"
  },
  {
    id: 15, title: "The Maid", author: "Nita Prose",
    price: 7.49, genre: "Mystery", inStock: true,
    description: "Hotel maid Molly Gray discovers a dead body in a suite and becomes the prime suspect. Endearingly literal-minded and socially oblivious, Molly is one of crime fiction's most original heroines. Warm, clever, and surprisingly moving.",
    cover: "cover.jpg"
  },
  {
    id: 16, title: "The Dry", author: "Jane Harper",
    price: 8.99, genre: "Mystery", inStock: true,
    description: "Federal agent Aaron Falk returns to his drought-stricken hometown for a friend's funeral and gets drawn into an investigation spanning two decades. Harper's debut is atmospheric, tightly plotted, and deeply felt. The Australian outback has never felt so menacing.",
    cover: "cover.jpg"
  },
  {
    id: 17, title: "The Hunting Party", author: "Lucy Foley",
    price: 7.99, genre: "Mystery", inStock: true,
    description: "A group of Oxford friends reunite at a remote Scottish lodge for New Year and by morning one of them is dead. Foley peels back years of resentment and secrets with surgical precision. A classic closed-circle mystery for the modern era.",
    cover: "cover.jpg"
  },
  {
    id: 18, title: "Behind Closed Doors", author: "B.A. Paris",
    price: 7.49, genre: "Mystery", inStock: false,
    description: "Jack and Grace Angel appear to have the perfect marriage — but no one is ever allowed inside their house. Told through alternating timelines, this domestic thriller reveals its horrors gradually and relentlessly. You will never look at a perfect couple the same way again.",
    cover: "cover.jpg"
  },
  {
    id: 19, title: "The Secret History", author: "Donna Tartt",
    price: 9.99, genre: "Mystery", inStock: true,
    description: "A small group of classics students at a Vermont college reconstruct how they came to commit a murder. Tartt's debut is a dark, intoxicating study of beauty, privilege, and moral collapse. A modern classic told in reverse.",
    cover: "cover.jpg"
  },
  {
    id: 20, title: "One by One", author: "Ruth Ware",
    price: 8.49, genre: "Mystery", inStock: true,
    description: "A tech company retreats to a luxury chalet in the French Alps for a team-building ski trip — then an avalanche cuts them off and people start dying. Ware's icy locked-room mystery is tense, claustrophobic, and impossible to second-guess.",
    cover: "cover.jpg"
  },
  {
    id: 21, title: "The Paris Apartment", author: "Lucy Foley",
    price: 8.99, genre: "Mystery", inStock: true,
    description: "Jess arrives in Paris to visit her brother Ben, only to find his apartment empty and his neighbours evasive. As she digs deeper into the building's secrets, the danger grows. A gloriously twisty thriller set in a Haussmann apartment block.",
    cover: "cover.jpg"
  },
  {
    id: 22, title: "Jar of Hearts", author: "Jennifer Hillier",
    price: 8.49, genre: "Mystery", inStock: false,
    description: "When her high-school boyfriend is arrested for a string of murders, Georgina realises she helped him cover up his first killing sixteen years ago. A propulsive, unflinching thriller about guilt, love, and the price of silence.",
    cover: "cover.jpg"
  },
  {
    id: 23, title: "The Appeal", author: "Janice Hallett",
    price: 9.49, genre: "Mystery", inStock: true,
    description: "Two trainee lawyers must sift through the emails of an amateur dramatics society to find a murderer. Wickedly funny and structurally ingenious, this novel is told entirely through correspondence. A love letter to Christie that becomes something entirely its own.",
    cover: "cover.jpg"
  },
  {
    id: 24, title: "The Sanatorium", author: "Sarah Pearse",
    price: 8.99, genre: "Mystery", inStock: true,
    description: "Detective Elin Warner joins her brother at a converted sanatorium hotel in the Swiss Alps — and soon guests begin to disappear in a blizzard. Pearse's debut combines stunning alpine setting with tight procedural plotting. Perfect for fans of gothic atmosphere.",
    cover: "cover.jpg"
  },
  {
    id: 25, title: "Calling Mr King", author: "Ronald De Feo",
    price: 7.99, genre: "Mystery", inStock: false,
    description: "A hitman on an assignment in London becomes obsessed with the city's bookshops and wonders if there might be another life waiting for him. Deadpan, literary, and darkly funny, this slim novel defies easy categorisation. A hidden gem of crime fiction.",
    cover: "cover.jpg"
  },
  {
    id: 26, title: "Bossypants", author: "Tina Fey",
    price: 7.99, genre: "Humour", inStock: true,
    description: "Tina Fey takes us from her awkward childhood in Pennsylvania to her rise as head writer at Saturday Night Live and creator of 30 Rock. Written with razor-sharp wit and surprising candour, this memoir is as funny as it is inspiring. Required reading for anyone who has ever been called bossy.",
    cover: "cover.jpg"
  },
  {
    id: 27, title: "Is Everyone Hanging Out Without Me?", author: "Mindy Kaling",
    price: 6.49, genre: "Humour", inStock: true,
    description: "Mindy Kaling chronicles her journey from chubby kid in Cambridge to Hollywood writer and actress. Packed with hilarious observations about friendship, romance, and the entertainment industry. Impossible to read without laughing out loud on public transport.",
    cover: "cover.jpg"
  },
  {
    id: 28, title: "Let's Pretend This Never Happened", author: "Jenny Lawson",
    price: 8.99, genre: "Humour", inStock: false,
    description: "Jenny Lawson grew up in rural Texas where her father routinely surprised dinner guests with taxidermied squirrels. This wildly funny memoir charts her bizarre upbringing, her anxiety, and her accidental career as a blogger. Proof that dysfunction and laughter make excellent bedfellows.",
    cover: "cover.jpg"
  },
  {
    id: 29, title: "Yes Please", author: "Amy Poehler",
    price: 7.49, genre: "Humour", inStock: true,
    description: "Amy Poehler reflects on improvisation, ambition, sleep deprivation, and the art of saying yes. Part memoir, part advice column, and entirely delightful. A book that feels like getting life advice from your funniest, wisest friend.",
    cover: "cover.jpg"
  },
  {
    id: 30, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams",
    price: 9.49, genre: "Humour", inStock: true,
    description: "Seconds before Earth is demolished to make way for a hyperspace bypass, Arthur Dent is whisked into space by his friend Ford Prefect, a researcher for the eponymous guide. What follows is one of the funniest and most imaginative journeys in literary history. The answer is 42.",
    cover: "cover.jpg"
  },
  {
    id: 31, title: "Good Omens", author: "Terry Pratchett & Neil Gaiman",
    price: 9.99, genre: "Humour", inStock: true,
    description: "An angel and a demon who have grown rather fond of life on Earth team up to prevent the Apocalypse. Pratchett and Gaiman's collaboration is one of the funniest, most warm-hearted comedies ever written. Heaven and Hell have never been more ridiculous.",
    cover: "cover.jpg"
  },
  {
    id: 32, title: "Three Men in a Boat", author: "Jerome K. Jerome",
    price: 5.99, genre: "Humour", inStock: true,
    description: "Three men and a dog take a leisurely boating holiday along the Thames and encounter nothing but calamity. Jerome's 1889 comic masterpiece invented the holiday disaster genre and has never been out of print since. Still laugh-out-loud funny after more than a century.",
    cover: "cover.jpg"
  },
  {
    id: 33, title: "Catch-22", author: "Joseph Heller",
    price: 8.99, genre: "Humour", inStock: true,
    description: "Airman Yossarian is convinced that everyone is trying to get him killed, and in the absurd bureaucracy of wartime, he may be right. Heller's satirical masterpiece coined a phrase and redefined the war novel. Infuriating, hilarious, and deeply humane.",
    cover: "cover.jpg"
  },
  {
    id: 34, title: "A Walk in the Woods", author: "Bill Bryson",
    price: 7.99, genre: "Humour", inStock: true,
    description: "Bryson attempts to hike the Appalachian Trail with his woefully unprepared friend Katz and nearly kills them both several times. A love letter to America's wilderness disguised as a very funny comedy of errors. Essential Bryson.",
    cover: "cover.jpg"
  },
  {
    id: 35, title: "Notes from a Small Island", author: "Bill Bryson",
    price: 7.49, genre: "Humour", inStock: false,
    description: "Before returning to America after two decades in Britain, Bryson takes a farewell tour of the country he has come to love. His observations about British eccentricity are affectionate, precise, and consistently hilarious. A classic of travel comedy.",
    cover: "cover.jpg"
  },
  {
    id: 36, title: "The Rosie Project", author: "Graeme Simsion",
    price: 7.99, genre: "Humour", inStock: true,
    description: "Genetics professor Don Tillman designs a questionnaire to find the perfect wife — and immediately meets Rosie, who fails every criterion. A charming and funny novel about love, difference, and the limits of logic. Impossible not to smile.",
    cover: "cover.jpg"
  },
  {
    id: 37, title: "Confederacy of Dunces", author: "John Kennedy Toole",
    price: 8.49, genre: "Humour", inStock: true,
    description: "The magnificent and maddening Ignatius J. Reilly lumbers around New Orleans raging against the modern world and getting into catastrophic scrapes. Toole's posthumously published Pulitzer winner is one of American literature's great comic creations. Every page is a gift.",
    cover: "cover.jpg"
  },
  {
    id: 38, title: "My Man Jeeves", author: "P.G. Wodehouse",
    price: 5.49, genre: "Humour", inStock: true,
    description: "The first collection of stories featuring Bertie Wooster and his supernaturally competent valet Jeeves. Wodehouse's comic timing is without equal and his prose sparkles on every page. The gold standard of English comic writing.",
    cover: "cover.jpg"
  },
  {
    id: 39, title: "Bridget Jones's Diary", author: "Helen Fielding",
    price: 7.49, genre: "Humour", inStock: true,
    description: "Thirty-something singleton Bridget Jones navigates London singledom, her weight, her cigarette consumption, and the eternal question of Mr Right vs Mr Wrong. Wickedly funny and surprisingly poignant. The diary format is used to devastating comic effect.",
    cover: "cover.jpg"
  },
  {
    id: 40, title: "I'm a Joke and So Are You", author: "Robin Ince",
    price: 9.49, genre: "Humour", inStock: false,
    description: "Comedian Robin Ince investigates the science of what makes us human — and funny — by interviewing scientists, comedians, and philosophers. Part memoir, part pop science, and entirely entertaining. A surprisingly moving meditation on the human condition.",
    cover: "cover.jpg"
  },
  {
    id: 41, title: "The 100-Year-Old Man Who Climbed Out the Window and Disappeared", author: "Jonas Jonasson",
    price: 8.99, genre: "Humour", inStock: true,
    description: "On his hundredth birthday, Allan Karlsson climbs out of his nursing-home window rather than attend his own birthday party — accidentally triggering a crime caper that spans seven decades of improbable history. Deadpan and delightful.",
    cover: "cover.jpg"
  },
  {
    id: 42, title: "The Unexpected Joy of Being Sober", author: "Catherine Gray",
    price: 8.49, genre: "Humour", inStock: true,
    description: "Gray chronicles her decision to stop drinking and discovers that sober life is far more interesting than she expected. Honest, funny, and genuinely useful, this book manages to be both memoir and self-help without feeling like either. Compulsively readable.",
    cover: "cover.jpg"
  },
  {
    id: 43, title: "Furiously Happy", author: "Jenny Lawson",
    price: 8.99, genre: "Humour", inStock: true,
    description: "Jenny Lawson's follow-up to her debut is a frank, funny, and frequently bizarre account of living with serious mental illness. She argues that the best response to a broken world is to be furiously, defiantly happy. Taxidermied raccoons feature prominently.",
    cover: "cover.jpg"
  },
  {
    id: 44, title: "Born a Crime", author: "Trevor Noah",
    price: 9.49, genre: "Humour", inStock: true,
    description: "Trevor Noah grew up mixed-race in apartheid South Africa, where his very existence was illegal. His memoir is simultaneously a history lesson, a love story to his extraordinary mother, and one of the funniest books you will ever read. Extraordinary.",
    cover: "cover.jpg"
  },
  {
    id: 45, title: "Me Talk Pretty One Day", author: "David Sedaris",
    price: 7.99, genre: "Humour", inStock: false,
    description: "Sedaris chronicles his attempts to learn French in Paris, survive his family, and navigate American eccentricity. His essay collections set the template for personal humour writing and this remains the best entry point. Every piece lands perfectly.",
    cover: "cover.jpg"
  },
  {
    id: 46, title: "The Sellout", author: "Paul Beatty",
    price: 9.99, genre: "Humour", inStock: true,
    description: "A young Black man from a Los Angeles ghetto ends up before the Supreme Court after attempting to reinstate slavery and segregation in his hometown. Beatty's Booker Prize winner is the most savage satire of American race relations in decades. Bracingly funny.",
    cover: "cover.jpg"
  },
  {
    id: 47, title: "Small Island", author: "Andrea Levy",
    price: 8.49, genre: "Humour", inStock: true,
    description: "Four characters navigate the collision between Jamaican immigrants and post-war English society in 1948 London. Levy balances comedy and tragedy with remarkable grace. An Orange Prize winner that deserves its place among the great British novels.",
    cover: "cover.jpg"
  },
  {
    id: 48, title: "The Importance of Being Earnest", author: "Oscar Wilde",
    price: 4.99, genre: "Humour", inStock: true,
    description: "Two gentlemen maintain false identities in order to escape social obligations, leading to an avalanche of mistaken identity, absurd revelations, and the most famous handbag in literary history. Wilde's comic masterpiece is as sparkling as the day it was written.",
    cover: "cover.jpg"
  },
  {
    id: 49, title: "The Life and Opinions of Tristram Shandy", author: "Laurence Sterne",
    price: 7.49, genre: "Humour", inStock: false,
    description: "Tristram Shandy attempts to write his life story but cannot get past his own birth after several hundred pages. Sterne's eighteenth-century comic novel anticipates postmodernism, metafiction, and the entire tradition of the unreliable narrator. Wildly original.",
    cover: "cover.jpg"
  },
  {
    id: 50, title: "How to Be Both", author: "Ali Smith",
    price: 9.49, genre: "Humour", inStock: true,
    description: "A grieving teenager in contemporary Cambridge and a fifteenth-century Italian painter find their stories intertwined in this formally inventive novel. Smith's Booker-shortlisted book plays with time, identity, and the nature of art. Funny, moving, and endlessly clever.",
    cover: "cover.jpg"
  }
];
```

---

## 2. `style.css`

Write this file exactly:

```css
:root {
  --accent: #2a9d4e;
  --accent-dark: #228a40;
  --card-img-ratio: 2/3;
}

.card-img-top {
  aspect-ratio: var(--card-img-ratio);
  object-fit: cover;
  width: 100%;
}

.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  cursor: pointer;
}

.card-title:hover {
  color: var(--accent);
}

.card {
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: default;
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15) !important;
}

.book-price {
  color: var(--accent);
  font-weight: 700;
}

.genre-link {
  display: block;
  padding: 0.3rem 0.75rem;
  color: #333;
  text-decoration: none;
  border-left: 3px solid transparent;
  transition: border-color 0.15s, font-weight 0.15s;
}

.genre-link:hover {
  color: var(--accent);
  border-left-color: var(--accent);
}

.genre-link.active {
  border-left-color: var(--accent);
  font-weight: 600;
  color: var(--accent);
}

.filter-aside {
  min-width: 180px;
  max-width: 180px;
}

.detail-cover {
  max-width: 220px;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.detail-layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

@media (max-width: 576px) {
  .detail-layout {
    flex-direction: column;
  }

  .detail-cover {
    max-width: 100%;
  }

  .filter-aside {
    min-width: 100%;
    max-width: 100%;
  }
}

.page-item.active .page-link {
  background-color: var(--accent);
  border-color: var(--accent);
}

.page-link {
  color: var(--accent);
}

.page-link:hover {
  color: var(--accent-dark);
}

/* DEBUG: gold borders — toggled by adding class "debug" to <body> */
body.debug nav,
body.debug footer,
body.debug aside,
body.debug section,
body.debug .card,
body.debug .card-body,
body.debug .card-img-top,
body.debug .detail-layout,
body.debug .detail-cover,
body.debug #detail,
body.debug .pagination,
body.debug #genre-list,
body.debug .container,
body.debug .container-fluid {
  border: 2px solid gold !important;
  box-sizing: border-box;
}

body.debug [data-debug-label]::before {
  content: attr(data-debug-label);
  display: block;
  color: purple;
  font-family: monospace;
  font-size: 0.65rem;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.88);
  padding: 1px 5px;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  position: relative;
  z-index: 10;
}
```

---

## 3. `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Books to Read</title>
  <link rel="stylesheet" href="bootstrap.css">
  <link rel="stylesheet" href="style.css">
</head>
<body class="bg-light">

  <nav class="navbar navbar-dark bg-dark px-4">
    <a class="navbar-brand fw-bold fs-5 text-white text-decoration-none" href="index.html">Books to Read</a>
  </nav>

  <div class="container-fluid py-4">
    <div class="d-flex gap-4 align-items-start">

      <aside class="filter-aside">
        <div class="card shadow-sm">
          <div class="card-body p-2">
            <h6 class="fw-bold mb-2 px-2">Genre</h6>
            <ul class="list-unstyled mb-0" id="genre-list"></ul>
          </div>
        </div>
      </aside>

      <section class="flex-grow-1">
        <div class="row row-cols-2 row-cols-md-4 g-3" id="grid"></div>
        <nav class="mt-4">
          <ul class="pagination justify-content-center flex-wrap" id="pagination"></ul>
        </nav>
      </section>

    </div>
  </div>

  <footer class="text-center text-muted py-3 border-top mt-4">
    <small>&copy; 2026 Books to Read. All rights reserved.</small>
  </footer>

  <script src="books-data.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

---

## 4. `script.js`

Write this file exactly — it handles all catalogue page logic:

```js
const DEBUG = false;
if (DEBUG) document.body.classList.add('debug');

const BOOKS_PER_PAGE = 5;
let currentPage = 1;
let activeGenre = 'All';

function getFiltered() {
  return BOOKS.filter(b =>
    activeGenre === 'All' || b.genre === activeGenre
  );
}

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

function renderAll() {
  const filtered = getFiltered();
  renderGenreFilter();
  renderGrid(filtered);
  renderPagination(filtered);
  applyDebugLabels();
}

document.addEventListener('DOMContentLoaded', renderAll);
```

---

## 5. `book.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book Detail</title>
  <link rel="stylesheet" href="bootstrap.css">
  <link rel="stylesheet" href="style.css">
</head>
<body class="bg-light">

  <nav class="navbar navbar-dark bg-dark px-4">
    <a class="navbar-brand fw-bold fs-5 text-white text-decoration-none" href="index.html">Books to Read</a>
  </nav>

  <div class="container py-4">
    <a href="index.html" class="text-muted text-decoration-none mb-4 d-inline-block">
      &larr; Back to catalogue
    </a>
    <div id="detail"></div>
  </div>

  <footer class="text-center text-muted py-3 border-top mt-4">
    <small>&copy; 2026 Books to Read. All rights reserved.</small>
  </footer>

  <script src="books-data.js"></script>
  <script>
    const DEBUG = false;
    if (DEBUG) document.body.classList.add('debug');

    function renderDetail() {
      const params = new URLSearchParams(location.search);
      const id = Number(params.get('id'));
      const book = BOOKS.find(b => b.id === id);
      const container = document.getElementById('detail');

      if (!book) {
        container.innerHTML = `
          <div class="alert alert-warning">
            Book not found. <a href="index.html">Return to catalogue</a>.
          </div>
        `;
        return;
      }

      document.title = book.title;

      container.innerHTML = `
        <div class="detail-layout">
          <img src="${book.cover}" alt="${book.title}" class="detail-cover">
          <div class="flex-grow-1">
            <h2 class="fw-bold mb-1">${book.title}</h2>
            <p class="text-muted mb-3">by ${book.author}</p>
            <div class="mb-3">
              <span class="book-price fs-5">£${book.price.toFixed(2)}</span>
            </div>
            <div class="mb-3 d-flex gap-2 align-items-center flex-wrap">
              <span class="badge bg-primary">${book.genre}</span>
              ${book.inStock
                ? '<span class="badge bg-success">In Stock</span>'
                : '<span class="badge bg-secondary">Out of Stock</span>'}
            </div>
            <p class="text-secondary">${book.description}</p>
          </div>
        </div>
      `;
    }

    document.addEventListener('DOMContentLoaded', renderDetail);
  </script>
</body>
</html>
```

---

## Build Order

1. Write `books-data.js`
2. Write `style.css`
3. Write `index.html`
4. Write `script.js`
5. Write `book.html`
6. Open `index.html` in a browser — verify no console errors

## Acceptance Criteria

- `index.html` opens from `file://` with no server, no errors
- Book grid shows 5 cards per page: cover image, title, author, price, stock badge
- Genre filter sidebar works — clicking a genre filters the grid and resets to page 1
- Pagination shows correct page numbers; Previous/Next disable at boundaries
- Clicking any card navigates to `book.html?id={N}` showing that book's full details
- Back link on `book.html` always goes to `index.html` (never `history.back()`)
- `cover.jpg` is always referenced as `"cover.jpg"` (no path prefix)
- No external CDN links — only `bootstrap.css`, `style.css`, `books-data.js`, `script.js`
- No `<style>` blocks inside any HTML file
