"use client";

import React, { useState } from "react";

export const DownloadForm: React.FC = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!url.trim()) {
      setError("Please paste a valid Instagram URL.");
      return;
    }

    if (!url.includes("instagram.com")) {
      setError("Please enter a valid URL containing instagram.com.");
      return;
    }

    setLoading(true);

    // Simulated resolution; provides quick bridge to official web service
    setTimeout(() => {
      setLoading(false);
      window.location.href = `https://snapvideo.to/?url=${encodeURIComponent(url)}`;
    }, 800);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
      }
    } catch {
      // Clipboard access denied or unsupported
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-100 border border-slate-200/80 p-4 md:p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste Instagram link here (Video, Reel, Story, Photo)..."
              className="w-full h-14 pl-4 pr-20 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400 text-sm md:text-base"
              disabled={loading}
            />
            <button
              type="button"
              onClick={handlePaste}
              className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
            >
              Paste
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="h-14 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-500/20 transition flex items-center justify-center shrink-0 disabled:opacity-70"
          >
            {loading ? "Processing..." : "Download"}
          </button>
        </div>

        {error && (
          <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
            {error}
          </div>
        )}
      </form>

      <div className="mt-4 text-center">
        <p className="text-xs text-slate-400">
          Supports Reels, Videos, Photos, and Stories in 1080p MP4. Free &amp; Unlimited.
        </p>
      </div>
    </div>
  );
};
