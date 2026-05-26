import Link from "next/link";

import { navigation, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d4af37]">
              Mallard Creek Worship Center
            </p>
            <h2 className="font-display text-3xl text-white">Built for worship, community, and legacy.</h2>
            <p className="max-w-2xl text-sm leading-7 text-white/68">
              Love God passionately. Love people authentically. Make disciples boldly.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/68 hover:text-[#f6dc88]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            {siteConfig.addressLines[0]}, {siteConfig.addressLines[1]}
          </p>
          <p>{siteConfig.email}</p>
        </div>
      </div>
    </footer>
  );
}
