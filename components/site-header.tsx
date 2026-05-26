"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,4,12,0.82)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/mallard-creek-logo.png"
            alt="Mallard Creek Worship Center logo"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover shadow-[0_0_30px_rgba(212,175,55,0.35)]"
          />
          <div>
            <p className="font-display text-xl text-white sm:text-2xl">Mallard Creek</p>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f6dc88]">
              Worship Center
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 xl:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] ${
                  active
                    ? "bg-[#d4af37]/16 text-[#f6dc88] shadow-[0_10px_30px_rgba(212,175,55,0.16)]"
                    : "text-white/74 hover:bg-white/6 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-white/12 bg-white/6 p-3 text-white xl:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[rgba(11,8,18,0.96)] px-4 py-4 xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                    active
                      ? "bg-[#d4af37]/14 text-[#f6dc88]"
                      : "border border-white/10 bg-white/5 text-white/78"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
