"use client";

import { useState } from "react";

export default function ImageLightbox({ src, alt, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!src) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group block w-full text-left"
        aria-label={`Open enlarged image: ${alt}`}
      >
        <div className="relative">
          <img
            src={src}
            alt={alt}
            className={className}
          />

          <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/10 transition flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition bg-white/95 text-[#061A40] text-sm font-medium px-4 py-2 rounded-full shadow">
              Click to enlarge
            </span>
          </div>
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 px-4 py-6 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 bg-white text-[#061A40] rounded-full px-4 py-2 text-sm font-semibold shadow hover:bg-[#EAF4FF] transition"
            aria-label="Close enlarged image"
          >
            Close
          </button>

          <img
            src={src}
            alt={alt}
            className="max-w-[95vw] max-h-[90vh] rounded-2xl border border-white/30 shadow-2xl object-contain bg-white"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}