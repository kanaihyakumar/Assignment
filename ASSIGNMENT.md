# Assignment 1 - HTML, CSS & JavaScript Fundamentals (Beginner)

Welcome! This assignment is built so that by the end of it, you've actually
*used* the concepts that come up most in beginner front-end interviews -
not just read about them.

**First, read `HOW-TO-GIT.md`** - it walks you through cloning this repo,
creating your own branch, and submitting your work as a Pull Request. Do
that before you start writing any code.

Then add the below extensions, this help on improving the productivity:
-Click on the extension in your vscode from the activity bar then search for the below extensions and install all of those:
[A11yScope](https://marketplace.visualstudio.com/items?itemName=KanaihyaKumar.a11y-scope)
[Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
[CallWeb](https://marketplace.visualstudio.com/items?itemName=KanaihyaKumar.call-web)
[CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)
[DriftGuard](https://marketplace.visualstudio.com/items?itemName=KanaihyaKumar.drift-guard)
[EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Now the real work starts from here:

There are 6 parts. Work through them in order - each one builds on the last.

| Part | Folder | What you'll practice |
|---|---|---|
| A | `part-a-non-semantic/` | HTML document structure, text/lists/tables/images/links, the box model |
| B | `part-b-semantic/` | Semantic HTML5, HTML5 history, SEO & accessibility |
| C | `part-c-layout-css3/` | Flexbox/Grid layout, CSS3 (transitions, shadows) |
| D | `part-d-forms/` | Forms, input types, validation, GET vs POST |
| E | `part-e-media-embeds/` | Audio, video, iframe, canvas vs SVG |
| F | `part-f-js-fundamentals/` | Core JavaScript concepts |

**How to work:** open each part's `index.html` file in your browser (double
-click it, or use VS Code's "Live Server" extension) to see your progress
live as you edit.

---

## Part A - Foundations: build it with `<div>` and `<span>` only

📁 `part-a-non-semantic/`
🖼️ Target design: `assets/images/target-part-a-b.png`

Open the target image first - that's the page you're building. Using
**only `<div>` / `<span>`** for structure (no header/main/aside/footer yet),
build a content-rich profile page. Full step-by-step instructions are
inside `part-a-non-semantic/index.html` as comments. In short, you'll use:

- [ ] Proper `<!DOCTYPE html>` + document structure (`html` -> `head` -> `body`)
- [ ] Meta tags: charset, viewport, description, keywords
- [ ] Headings, paragraphs, text formatting (`<strong>`, `<em>`)
- [ ] `<span>` used correctly inside a block of text (vs `<div>` for whole sections)
- [ ] An unordered list, an ordered list, **and** a definition list (`<dl>`)
- [ ] A link that opens in a new tab (`target="_blank"`)
- [ ] An image with a meaningful `alt`, using `srcset` for two sizes
- [ ] A `<table>` with `<thead>`, `<tbody>`, `<tfoot>`, and one `colspan`
- [ ] At least one custom `data-*` attribute, and both `id` and `class` used correctly

**Resources:**
- [MDN – HTML basics](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN – The Doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)
- [MDN – Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes)
- [MDN – data-* attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/data-*)
- [MDN – Lists (ul/ol/dl)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl)
- [MDN – `<a>` and the target attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a)
- [MDN – `<img>`, alt & srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img)
- [MDN – Tables in depth](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [MDN – `<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta)

---

## Part B - Rebuild it with semantic HTML5

📁 `part-b-semantic/`
🖼️ Target design: same image as Part A (it should look *identical* in the
browser - only the tags underneath change)

Rebuild the exact same page, swapping your divs for `<header>`, `<nav>`,
`<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`. Full mapping is
in the file's comments. This part also has 4 short **written** tasks
(answer as comments in the file): what HTML is, HTML5's new elements, a
new HTML5 input type, and why semantic HTML matters for SEO & accessibility.

**Resources:**
- [MDN – HTML5 element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [MDN – Semantics (why it matters)](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [MDN – Structuring content overview](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [web.dev – Accessibility basics](https://web.dev/learn/accessibility)

---

## Part C - Real layout with Flexbox & CSS3 polish

📁 `part-c-layout-css3/`
🖼️ Target design: `assets/images/target-part-c.png`

The HTML is already written for you - your job is entirely in `style.css`.
Follow the numbered TODO comments in order:

- [ ] `<main>` and `<aside>` sit side by side (Flexbox)
- [ ] 3 project cards sit in a row (Flexbox or Grid)
- [ ] Cards have `border-radius` and `box-shadow`
- [ ] Cards lift up on hover using `transition`

**Resources:**
- [MDN – Flexbox guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [MDN – Grid guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [MDN – transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- [MDN – box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

---

## Part D - Forms deep dive

📁 `part-d-forms/`
🖼️ Target design: `assets/images/target-part-d-forms.png`

Build a full contact form with 3 fieldsets, covering nearly every common
form concept in one exercise. Full field-by-field spec is in the file's
comments. Covers:

- [ ] `<form>` with `action` and `method="POST"`
- [ ] Input types: text, email, password, tel, date, radio, checkbox, color, range, file
- [ ] Validation attributes: `required`, `minlength`, `pattern`
- [ ] `<label for="">` correctly associated with every input (both the
      `for`/`id` style and the wrapping style)
- [ ] `<fieldset>` + `<legend>` grouping
- [ ] `placeholder` vs `value` (demonstrated separately)
- [ ] `disabled` vs `readonly` (demonstrated separately)
- [ ] 4 written tasks: GET vs POST, `enctype`, placeholder vs value, disabled vs readonly

**Resources:**
- [MDN – Your first form](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [MDN – The `<input>` element & all its types](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input)
- [MDN – Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [MDN – `<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label)
- [MDN – `<fieldset>` & `<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset)
- [MDN – Sending form data (GET vs POST)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

---

## Part E - Media & Embeds

📁 `part-e-media-embeds/`

No target image for this one - it's about getting each element working
correctly. 4 short tasks, instructions inside `index.html`:

- [ ] `<audio>` with controls (use any short mp3 of your own)
- [ ] `<video>` with controls (use any short mp4 of your own)
- [ ] An embedded `<iframe>` (grab any YouTube video's embed code)
- [ ] The same circle-with-"S" shape drawn twice: once with `<canvas>` +
      JavaScript, once with inline `<svg>` - then a one-line comment on
      the difference between the two approaches

**Resources:**
- [MDN – `<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio)
- [MDN – `<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video)
- [MDN – `<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
- [MDN – Canvas API tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [MDN – SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)

---

## Part F - JavaScript Fundamentals

📁 `part-f-js-fundamentals/`

Open `index.html` in your browser, open DevTools console (F12), and work
through the 10 tasks inside `script.js`. Each links to where you can read
about the concept first.

- [ ] Task 1 - Data types
- [ ] Task 2 - Primitive vs non-primitive
- [ ] Task 3 - Mutable vs immutable
- [ ] Task 4 - Hoisting
- [ ] Task 5 - `==` vs `===`
- [ ] Task 6 - `var` vs `let` vs `const`
- [ ] Task 7 - Type coercion
- [ ] Task 8 - Statically vs dynamically typed
- [ ] Task 9 - `NaN`
- [ ] Task 10 - Passed by value vs passed by reference

---

## Interview Prep Checklist

Once you've finished all 6 parts, you should be able to confidently answer
every question below **out loud, in your own words**, without looking
anything up. That's the real test.

**HTML**
- What is HTML? What does `<!DOCTYPE html>` do?
- Name 3 features/elements introduced in HTML5 that didn't exist before.
- What's the difference between a semantic and non-semantic element? Give 3 examples of each.
- What's the difference between a block, inline, and inline-block element?
- What's the difference between `<div>` and `<span>`?
- What are global attributes? What's special about `data-*` attributes?
- What's the difference between `id` and `class`?
- What does `colspan`/`rowspan` do on a table cell?
- What's the `alt` attribute for, and why does it matter?
- What's `srcset` used for?
- What's the difference between an `<iframe>` and embedding content directly?
- When would you use `<canvas>` vs `<svg>`?
- Why does semantic HTML matter for SEO and accessibility?

**Forms**
- What's the difference between GET and POST? When would you use each?
- What does the `enctype` attribute do, and when do you need `multipart/form-data`?
- How do you correctly associate a `<label>` with an `<input>`?
- What do `<fieldset>` and `<legend>` do?
- What's the difference between `placeholder` and `value`?
- What's the difference between `disabled` and `readonly`?
- Name 5 different `<input>` types and what they're for.
- How does the `required` attribute work? What about `pattern`?

**CSS**
- Explain the CSS box model. What order do content/padding/border/margin go in?
- What does `box-sizing: border-box` change?
- What's the difference between `margin` and `padding`?
- Explain `position: static`, `relative`, `absolute`, `fixed`, and `sticky`.
- When would you reach for Flexbox vs CSS Grid?
- What does the `gap` property do?

**JavaScript**
- What are the 7 primitive types in JavaScript?
- What's the difference between a primitive and a reference (object) type?
- What does "immutable" mean? Which JS types are immutable?
- What is hoisting? How does it differ between `var`, `let`, and `const`?
- What's the difference between `==` and `===`?
- Why would you choose `const` over `let`? Why not use `var` anymore?
- What is type coercion? Give an example.
- Is JavaScript statically or dynamically typed? What does that mean?
- Why is `NaN === NaN` false?
- Are JavaScript function arguments passed by value or by reference?

---

## A note on the target images

The three target images were designed specifically for this assignment (a
small fictional profile page for "Speedy"). You don't need to match the
exact shade of every color - the goal is to get the **structure, spacing,
and general styling approach** right. Getting close counts as done.
