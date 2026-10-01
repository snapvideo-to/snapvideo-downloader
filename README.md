# Instagram Downloader Web UI (Next.js & React)

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Production Service](https://img.shields.io/badge/Production-snapvideo.to-purple.svg)](https://snapvideo.to/)

An open-source, responsive web interface built with Next.js, React, TypeScript, and Tailwind CSS for downloading publicly available Instagram media, including Videos, Reels, Stories, and Photos.

> **Production Service:** For the fully hosted downloader service with global CDN media streaming, multi-language support, and high-speed processing, visit [SnapVideo](https://snapvideo.to/).

---

## Features

- Modern, mobile-responsive web UI built with Next.js App Router and Tailwind CSS.
- One-click clipboard paste and link validation.
- Dedicated modules for Instagram Videos, Reels, Stories, and Photos.
- Modular React component architecture (Header, DownloadForm, FeatureCards, Footer).
- Integrated API route template for media resolution.
- Fast page loads with zero unnecessary runtime overhead.

---

## Online Downloader Reference

The underlying functionality is deployed and accessible via the official tools:

- [Instagram Video Downloader](https://snapvideo.to/instagram-video-downloader) - Download standard Instagram feed videos.
- [Instagram Reels Downloader](https://snapvideo.to/instagram-reels-downloader) - Download Reels in Full HD 1080p MP4.
- [Instagram Story Downloader](https://snapvideo.to/instagram-story-downloader) - Save 24-hour Stories and Highlights.
- [Instagram Photo Downloader](https://snapvideo.to/instagram-photo-downloader) - Download high-resolution photos and carousels.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Icons:** Lucide React

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/snapvideo-to/instagram-downloader-web.git
cd instagram-downloader-web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Project Structure

```text
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── resolve/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── DownloadForm.tsx
│       ├── Footer.tsx
│       └── Header.tsx
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Disclaimer

This repository is an open-source educational template and is not affiliated with, sponsored by, or endorsed by Instagram or Meta. Use only for media you own or have permission to download.

## License

Distributed under the [MIT License](https://opensource.org/licenses/MIT).
