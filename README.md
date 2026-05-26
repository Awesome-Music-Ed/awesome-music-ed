# 🌌 Awesome Music Ed

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Deploy to GitHub Pages](https://github.com/Awesome-Music-Ed/awesome-music-ed/actions/workflows/deploy.yml/badge.svg)](https://github.com/Awesome-Music-Ed/awesome-music-ed/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.60a5fa.net/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to **Awesome Music Ed**! A community-driven, open-source, and curated repository dedicated to gathering, organizing, and showcasing the very best tools, pedagogical resources, and organizations in the music education profession.

Designed using the striking, immersive `starlight-theme-galaxy` and built on top of [Astro + Starlight](https://starlight.astro.build), this platform provides veteran educators, student teachers, and private instructors with an offline-first, lightning-fast searchable library of resources.

---

## 🎨 Project Features

- **Galaxy Aesthetics**: Built with `starlight-theme-galaxy` for a premium, futuristic dark-mode documentation interface.
- **Offline-First Search**: Uses **Pagefind** to index pages statically during compile time, giving users instantaneous client-side search without external server requirements.
- **Dynamic Weekly Feature**: An embedded `<FeaturedResource />` component on the homepage that rotates automatically each week to highlight a specific resource.
- **Community Metadata**: Tracks creator and submitter details via an extended Starlight schema (`createdBy`, `submittedBy`, `url`) rendered directly in the custom page footer.
- **Fully Automated CD**: Continuous deployment pipeline powered by GitHub Actions that compiles, indexes, and deploys changes to GitHub Pages on every push.

---

## 📂 Resource Directory

Our curated index is carefully categorized into standard subdirectories within `src/content/docs/`:

*   **🛠️ Tools**: Apps and software for classroom operations, rehearsal, notation, ensemble management, marching band, design, recruitment, and scores.
*   **🎓 Pedagogy**: Curriculum guides, lesson plan ideas, vocal/instrumental instructional materials, and applied pedagogical research.
*   **📚 Books**: Essential literature, method books, conducting guides, historical contexts, and career development texts.
*   **🎙️ Podcasts**: Hand-picked professional development and educational podcasts to listen to on the go.
*   **📢 Advocacy**: Materials, research, and tools to help defend and champion music education in schools.
*   **🏛️ Organizations**: A comprehensive directory of state and national professional associations (MEAs) for band, orchestra, choir, and piano instructors.

---

## 🔍 Offline Search with Pagefind

Starlight features a built-in search experience powered by **[Pagefind](https://pagefind.app/)**. 

### How it works:
1. When you run `npm run build`, Astro generates the static pages under `./dist/`.
2. Astro compiles the search indexes and generates the index metadata in `./dist/pagefind/`.
3. In production, the browser downloads small index chunks on demand, enabling full-text search across all categories instantly with minimal bandwidth usage.

---

## 🚀 Getting Started (Local Development)

To run the site locally, inspect page changes, or test additions:

### Prerequisites
Make sure you have **Node.js** (v18+) installed.

### Setup Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Awesome-Music-Ed/awesome-music-ed.git
   cd awesome-music-ed
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:4321/` to see your changes live.

4. **Perform a production build and index**:
   ```bash
   npm run build
   ```
   This generates the production output in `./dist/` and runs **Pagefind** to build the search indexes.

5. **Preview the production build**:
   ```bash
   npm run preview
   ```
   Tests the production-built site on a local server.

---

## 🤝 Contribution Guidelines

This index is only as robust as the community that builds it! We welcome additions, link corrections, and updates from music educators and enthusiasts.

For full guidelines, read our [Contribution Guidelines](src/content/docs/contributions.md).

### Standard Contribution Workflows:
*   **Option A: Suggest via a GitHub Issue (No code required)**
    *   Navigate to the [GitHub Issues](https://github.com/Awesome-Music-Ed/awesome-music-ed/issues) page.
    *   Submit a new issue containing the resource name, link, and a brief description (1-2 sentences) of why it's valuable.
*   **Option B: Submit a Pull Request**
    *   Fork the repository and branch off `main` (e.g., `add-resource-musescore`).
    *   Create a new `.md` or `.mdx` file under the appropriate `src/content/docs/<category>/` directory.
    *   Format your file according to our submission standards below.
    *   Commit your changes and submit a PR!

---

## 📝 Document Formatting Template

To keep our database uniform and clean, all new resource additions should use the following **Starlight MDX** layout. You can copy and customize this template:

```mdx
---
title: "Resource Name"
description: "A single concise, high-impact sentence describing what this resource does."
createdBy: "Company/Author Name"
submittedBy: "Your Name or GitHub Username"
url: "https://example.com"
lastUpdated: 2026-05-26
---
import { Card, CardGrid } from '@astrojs/starlight/components';

*From the official website:*

## A Short Catchy Tagline or Sub-header

A clean 1-2 sentence paragraph providing background and explaining exactly why this resource is awesome for music teachers or students.

### Key Features

<CardGrid>
  <Card title="Feature Title 1">
    Explain this capability in a single sentence. Focus on utility and classrooms.
  </Card>
  <Card title="Feature Title 2">
    Explain another key feature or pricing status (e.g., Free, Open Source).
  </Card>
  <Card title="Feature Title 3">
    Explain how this integrates with ensemble rehearsals or grading.
  </Card>
</CardGrid>
```

### Pre-Submission Checklist:
- [ ] **No Duplicates**: Use the search bar on the website to ensure the resource isn't already added.
- [ ] **Objective Tone**: Descriptions must be educational, professional, and clear of hype or marketing fluff.
- [ ] **Clean Links**: Verify the URL is correct, active, and runs over HTTPS.
- [ ] **Appropriately Placed**: Place the file under the correct folder hierarchy inside `src/content/docs/`.

---

## ☕ Support the Project

Awesome Music Ed is entirely free and open-source. If you find these resources helpful in your teaching, consider supporting the continued hosting, domain, and curation of this list.

[!["Buy Me A Coffee"](https://img.shields.io/badge/Buy_Me_A_Coffee-Support_us-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/awesomemusiced)

---

*Awesome Music Ed reserves the right to edit or reject any submission if it doesn't align with our curation standards.*
