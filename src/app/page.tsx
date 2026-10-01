import React from "react";
import { DownloadForm } from "@/components/DownloadForm";

export default function Home() {
  return (
    <div className="space-y-20 py-12 px-4 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
          Open-Source Next.js &amp; React Template
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
          Instagram Downloader
        </h1>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-600">
          Download Instagram Videos, Reels, Stories, and Photos in Full HD 1080p MP4 directly in your browser. Fast, secure, and no software installation required.
        </p>

        <DownloadForm />
      </section>

      {/* Feature Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
          href="https://snapvideo.to/instagram-video-downloader"
          className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition group"
        >
          <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition mb-2">
            Video Downloader
          </h3>
          <p className="text-sm text-slate-500">
            Download standard Instagram feed videos in MP4 format with original sound.
          </p>
        </a>

        <a
          href="https://snapvideo.to/instagram-reels-downloader"
          className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition group"
        >
          <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition mb-2">
            Reels Downloader
          </h3>
          <p className="text-sm text-slate-500">
            Save Instagram Reels in high definition directly to your phone or desktop.
          </p>
        </a>

        <a
          href="https://snapvideo.to/instagram-story-downloader"
          className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition group"
        >
          <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition mb-2">
            Story Downloader
          </h3>
          <p className="text-sm text-slate-500">
            Save public Stories and Highlights before they expire after 24 hours.
          </p>
        </a>

        <a
          href="https://snapvideo.to/instagram-photo-downloader"
          className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition group"
        >
          <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition mb-2">
            Photo Downloader
          </h3>
          <p className="text-sm text-slate-500">
            Download high-resolution Instagram photos and carousel albums without compression.
          </p>
        </a>
      </section>

      {/* Open Source & Live Service Note */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/10">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold">
            Looking for the production service?
          </h2>
          <p className="text-blue-100 text-sm md:text-base">
            SnapVideo provides the full hosted infrastructure for high-speed Instagram media downloads with global CDN delivery and support for multiple languages.
          </p>
        </div>

        <a
          href="https://snapvideo.to/"
          className="px-6 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition shadow-md whitespace-nowrap"
        >
          Visit SnapVideo.to
        </a>
      </section>
    </div>
  );
}
