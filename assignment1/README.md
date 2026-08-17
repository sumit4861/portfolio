# Portfolio

A modern, responsive personal portfolio website built using standard HTML5 and CSS3. Designed with a black and gold dark theme to showcase academic qualifications, projects, technical skills, and contact details.

---

## Design Rationale
This portfolio project is designed to present technical skills, academic projects, and relevant experience in a clear, structured format. A minimalist visual approach was prioritized to maintain low cognitive load and focus attention directly on project artifacts. High-contrast colors and a structured typographic hierarchy are used throughout to satisfy core usability and readability standards.

---

## Layout Technique Justification
Native CSS layout techniques were selected to achieve full responsiveness without introducing heavy third-party framework dependencies:

* **CSS Grid**: Applied to two-dimensional sections like the project and skills galleries. Using dynamic functions paired with grid layout enables fluid multi-column wrapping across varying screen widths.
* **CSS Flexbox**: Used for one-dimensional UI elements including navigation bars, hero header alignments, and action buttons to enforce precise alignment and flexible space distribution.
* **Responsive Units & Media Queries**: Dynamic units (`rem`, `%`, `px`) alongside media queries ensure seamless scaling from small mobile viewports up to desktop displays.

---

## Features

- **Split Hero Header**: Features an introduction section alongside a profile avatar.
- **Sticky Navigation**: Smooth-scrolling top navbar that sticks to the viewport during scrolling.
- **Card-Based Grid System**: Organizes Education, Projects, and Technical Skills using CSS Grid for clear visual separation.
- **Custom Tech Badges**: Styled pills/tags highlighting technologies used in each project.
- **Accessible Contact Form**: Includes fully accessible form controls with explicit label-input bindings.
- **Responsive Layout**: Designed using CSS Media Queries to reflow cleanly across desktop, tablet (<=768px), and mobile (<=480px) screens.

---

## Known Limitations
* **Static Content**: All content and project entries are statically coded in `index.html`, requiring direct source edits for any data updates.
* **Unintegrated Contact Form**: The form interface lacks backend script handling or API routing, so form submissions are currently not processed or delivered.
* **No Dynamic Theme Switch**: Dark/light visual mode switching is currently omitted and targeted for future iterations using CSS variables and JavaScript.

---

## Directory Structure

```text
portfolio/
├── index.html
├── style.css
└── my.jpg
