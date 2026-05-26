"use client";

import { useState } from "react";

import { siteConfig } from "@/lib/site-data";

const youtubeLiveEmbed =
  "https://www.youtube.com/embed/live_stream?channel=UCHpMkz2j9Ri2buhH61UdxfQ&autoplay=0&modestbranding=1&rel=0";
// Placeholder note: replace the Facebook plugin or YouTube channel ID here if the ministry updates platforms later.
const facebookEmbed =
  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMallardCreekWorshipCenter&tabs=timeline&width=1000&height=780&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true";

export function WatchTabs() {
  const [active, setActive] = useState<"facebook" | "youtube">("facebook");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActive("facebook")}
          className={`rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] ${
            active === "facebook"
              ? "bg-[#d4af37]/16 text-[#f6dc88]"
              : "border border-white/10 bg-white/5 text-white/72"
          }`}
        >
          Facebook Live
        </button>
        <button
          type="button"
          onClick={() => setActive("youtube")}
          className={`rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] ${
            active === "youtube"
              ? "bg-[#d4af37]/16 text-[#f6dc88]"
              : "border border-white/10 bg-white/5 text-white/72"
          }`}
        >
          YouTube Live
        </button>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        {active === "facebook" ? (
          <iframe
            title="Mallard Creek Worship Center Facebook Live"
            src={facebookEmbed}
            className="h-[780px] w-full"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        ) : (
          <iframe
            title="Mallard Creek Worship Center YouTube Live"
            src={youtubeLiveEmbed}
            className="aspect-video w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={siteConfig.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-button rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-[0.22em]"
        >
          Open on Facebook
        </a>
        <a
          href={siteConfig.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="secondary-button rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.22em] text-white"
        >
          Open on YouTube
        </a>
      </div>
    </div>
  );
}
