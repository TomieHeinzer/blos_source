"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { resources } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ead9c2] bg-[#f8f1e4]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-screen-xl items-center gap-6 px-4 py-3 md:px-6">
        <Link href="/" className="shrink-0" aria-label="Blos home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/about"
            className="rounded-md px-3 py-2 text-sm font-medium text-[#2a221c] hover:bg-[#f3e6d2]"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="rounded-md px-3 py-2 text-sm font-medium text-[#2a221c] hover:bg-[#f3e6d2]"
          >
            Blog
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setMore(true)}
            onMouseLeave={() => setMore(false)}
          >
            <button
              className="rounded-md px-3 py-2 text-sm font-medium text-[#2a221c] hover:bg-[#f3e6d2]"
              aria-expanded={more}
            >
              More resources
            </button>
            {more && (
              <div className="absolute left-0 top-full z-20 w-[560px] pt-2">
                <ul className="grid grid-cols-2 gap-1 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
                  {resources.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-lg p-3 hover:bg-slate-50"
                      >
                        <span className="block text-sm font-medium">{item.title}</span>
                        <span className="mt-1 block text-sm text-slate-500">
                          {item.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <Button asChild size="lg" className="ml-auto hidden md:inline-flex">
          <Link href="/#emerald">Own Your Agent</Link>
        </Button>

        <button
          className="ml-auto rounded-md p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            <Link href="/about" className="rounded-md px-2 py-2" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/blog" className="rounded-md px-2 py-2" onClick={() => setOpen(false)}>
              Blog
            </Link>
            {resources.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Button asChild className="mt-3">
              <Link href="/#emerald" onClick={() => setOpen(false)}>
                Own Your Agent
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
