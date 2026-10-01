import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-20 py-12 text-slate-600">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="font-bold text-lg text-slate-900">SnapVideo UI</div>
          <p className="text-sm text-slate-500">
            Open-source frontend template for Instagram public media downloading.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-3">Download Tools</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://snapvideo.to/instagram-video-downloader"
                className="hover:text-blue-600 transition"
              >
                Instagram Video Downloader
              </a>
            </li>
            <li>
              <a
                href="https://snapvideo.to/instagram-reels-downloader"
                className="hover:text-blue-600 transition"
              >
                Instagram Reels Downloader
              </a>
            </li>
            <li>
              <a
                href="https://snapvideo.to/instagram-story-downloader"
                className="hover:text-blue-600 transition"
              >
                Instagram Story Downloader
              </a>
            </li>
            <li>
              <a
                href="https://snapvideo.to/instagram-photo-downloader"
                className="hover:text-blue-600 transition"
              >
                Instagram Photo Downloader
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-3">Official Service</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://snapvideo.to/" className="hover:text-blue-600 transition">
                SnapVideo Production App
              </a>
            </li>
            <li>
              <a href="https://snapvideo.to/about" className="hover:text-blue-600 transition">
                About SnapVideo
              </a>
            </li>
            <li>
              <a href="https://snapvideo.to/privacy" className="hover:text-blue-600 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-3">Disclaimer</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            SnapVideo is an independent service and is not affiliated with, sponsored by, or endorsed by Instagram or Meta.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-slate-200 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} SnapVideo Team. Open Source Release.
      </div>
    </footer>
  );
};
