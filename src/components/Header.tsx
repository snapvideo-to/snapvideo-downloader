import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="https://snapvideo.to/" className="flex items-center space-x-2">
          <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            SnapVideo
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">
            Open UI
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
          <a
            href="https://snapvideo.to/instagram-video-downloader"
            className="hover:text-blue-600 transition"
          >
            Video
          </a>
          <a
            href="https://snapvideo.to/instagram-reels-downloader"
            className="hover:text-blue-600 transition"
          >
            Reels
          </a>
          <a
            href="https://snapvideo.to/instagram-story-downloader"
            className="hover:text-blue-600 transition"
          >
            Story
          </a>
          <a
            href="https://snapvideo.to/instagram-photo-downloader"
            className="hover:text-blue-600 transition"
          >
            Photo
          </a>
          <a
            href="https://snapvideo.to/"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Web App
          </a>
        </nav>
      </div>
    </header>
  );
};
