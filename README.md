# Palarnia Smaków — Coffee Roastery Website

A responsive landing page for the coffee roastery **Palarnia Smaków**. Features a rich visual design with smooth animations, product showcase, customer testimonials, and contact section.

## Technologies

- **HTML5** — page structure
- **CSS3** — styling, animations, responsive layout (mobile-first)
- **JavaScript** — interactivity, scroll animations, mobile navigation
- **Google Fonts** — Cormorant Garamond, Jost

## Project Structure

```
coffee/
├── index.html      # Main page
├── styles.css      # All styles and responsive rules
├── script.js       # JavaScript interactions
└── img/            # Images (photos, product visuals)
```

## Sections

- **Hero** — full-screen intro with animated headline
- **Która kawa jest...** — roast type guide with visuals
- **Nasze kawy** — product cards (coffee variants with buy buttons)
- **Opinie** — customer testimonials
- **Kontakt** — contact information and social links

## Running Locally

No build step required — pure static site.

Open `index.html` directly in a browser, or serve with any static server:

```bash
npx serve .
# or
python -m http.server 8080
```

## Deployment

Upload all files to the web server root. No server-side processing required.
Works with Apache, Nginx, or any static hosting (GitHub Pages, Netlify, etc.).
