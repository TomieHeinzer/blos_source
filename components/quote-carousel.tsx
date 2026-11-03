"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { quotes } from "@/lib/content";
import Link from "next/link";

export function QuoteCarousel() {
  const [index, setIndex] = useState(0);
  const quote = quotes[index];

  return (
    <div className="mx-auto mb-12 max-w-4xl text-left">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            className="rounded-lg border border-slate-200 p-1.5 hover:bg-slate-50"
            aria-label="Previous quote"
            onClick={() => setIndex((i) => (i === 0 ? quotes.length - 1 : i - 1))}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className="rounded-lg border border-slate-200 p-1.5 hover:bg-slate-50"
            aria-label="Next quote"
            onClick={() => setIndex((i) => (i === quotes.length - 1 ? 0 : i + 1))}
          >
            <ChevronRight size={18} />
          </button>
          <span className="ml-2 text-sm text-slate-500">
            {index + 1} / {quotes.length}
          </span>
        </div>
        <Button variant="outline" asChild>
          <Link href="/blog">Read the journal</Link>
        </Button>
      </div>
      <article className="flex flex-col gap-4 rounded-2xl border-2 border-white bg-slate-50 p-6 shadow-sm md:flex-row">
        <div className="flex min-w-[210px] items-start gap-3">
          <Image
            src={quote.icon}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-slate-900">{quote.name}</p>
            <p className="text-sm text-slate-500">{quote.title}</p>
          </div>
        </div>
        <p className="text-slate-800">{quote.quote}</p>
      </article>
    </div>
  );
}
