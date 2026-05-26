"use client";

import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { worshipPlaylist } from "@/lib/site-data";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [hasUnlockedSound, setHasUnlockedSound] = useState(false);

  const track = useMemo(() => worshipPlaylist[trackIndex], [trackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryAutoplay = async () => {
      audio.muted = true;
      try {
        await audio.play();
        setIsPlaying(true);
        setBlocked(false);
      } catch {
        setBlocked(true);
      }
    };

    void tryAutoplay();
  }, []);

  useEffect(() => {
    const unlockPlayback = async () => {
      const audio = audioRef.current;
      if (!audio || hasUnlockedSound) return;
      audio.muted = false;

      try {
        await audio.play();
        setIsPlaying(true);
        setBlocked(false);
        setHasUnlockedSound(true);
      } catch {
        setBlocked(true);
      }
    };

    window.addEventListener("pointerdown", unlockPlayback, { once: true });
    return () => window.removeEventListener("pointerdown", unlockPlayback);
  }, [hasUnlockedSound]);

  const playTrack = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    try {
      await audio.play();
      setIsPlaying(true);
      setBlocked(false);
      setHasUnlockedSound(true);
    } catch {
      setBlocked(true);
    }
  };

  const pauseTrack = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const changeTrack = (direction: "next" | "prev") => {
    setTrackIndex((current) => {
      const delta = direction === "next" ? 1 : -1;
      return (current + delta + worshipPlaylist.length) % worshipPlaylist.length;
    });
    setTimeout(() => {
      void playTrack();
    }, 0);
  };

  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 rounded-[1.75rem] border border-white/12 bg-[rgba(10,7,16,0.88)] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.48)] backdrop-blur-2xl">
      <audio
        ref={audioRef}
        src={track.src}
        onEnded={() => changeTrack("next")}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        preload="metadata"
      />
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#d4af37]">Worship Music</p>
          <p className="mt-1 text-lg font-semibold text-white">{track.title}</p>
          <p className="text-sm text-white/58">Playlist starts automatically when the browser allows it.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => changeTrack("prev")}
            className="rounded-full border border-white/10 bg-white/6 p-3 text-white hover:border-[#d4af37]/30"
            aria-label="Previous track"
          >
            <SkipBack className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => {
              const audio = audioRef.current;
              if (audio && isPlaying && audio.muted) {
                void playTrack();
                return;
              }

              if (isPlaying) {
                pauseTrack();
                return;
              }

              void playTrack();
            }}
            className="gold-button rounded-full px-5 py-3 text-sm font-extrabold uppercase tracking-[0.2em]"
          >
            <span className="flex items-center gap-2">
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isPlaying && audioRef.current?.muted ? "Unmute" : isPlaying ? "Pause" : "Play"}
            </span>
          </button>
          <button
            type="button"
            onClick={() => changeTrack("next")}
            className="rounded-full border border-white/10 bg-white/6 p-3 text-white hover:border-[#d4af37]/30"
            aria-label="Next track"
          >
            <SkipForward className="h-4 w-4" />
          </button>
          {blocked ? (
            <button
              type="button"
              onClick={() => void playTrack()}
              className="rounded-full border border-[#d4af37]/28 bg-[#d4af37]/12 px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#f6dc88]"
            >
              <span className="flex items-center gap-2">
                <Volume2 className="h-4 w-4" />
                Play Worship Music
              </span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
