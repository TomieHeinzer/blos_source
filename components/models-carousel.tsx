"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    key: "predict",
    title: "Blos-Predict-R1-14B",
    description: "A model fine-tuned for forecasting.",
    image: "/images/agents/predict.png",
    href: "/models/blos-predict-r1-14b",
    color: "rgba(212, 132, 58, 0.15)",
  },
  { key: "soon-1", soon: true, color: "rgba(148, 163, 184, 0.25)" },
  { key: "soon-2", soon: true, color: "rgba(148, 163, 184, 0.25)" },
  { key: "soon-3", soon: true, color: "rgba(148, 163, 184, 0.25)" },
];

export function ModelsCarousel() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <div className="relative mx-auto max-w-xl">
      <button
        aria-label="Previous model"
        className="absolute left-0 top-1/2 z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white shadow-md"
        onClick={() => setIndex((current) => (current - 1 + slides.length) % slides.length)}
      >
        <ChevronLeft size={18} />
      </button>
      <div
        className="agent-economy-card flex min-h-[320px] flex-col items-center justify-center gap-6 p-10 text-center"
        style={{ ["--gradient-color" as string]: slide.color }}
      >
        {slide.soon ? (
          <>
            <div className="size-16 rounded-full bg-slate-300/60" />
            <p className="text-xl font-semibold text-slate-500">Coming soon</p>
          </>
        ) : (
          <Link href={slide.href!} className="flex flex-col items-center gap-4">
            <Image src={slide.image!} alt="" width={64} height={64} />
            <div>
              <h3 className="text-xl font-semibold">{slide.title}</h3>
              <p className="mt-2 text-slate-600">{slide.description}</p>
            </div>
          </Link>
        )}
      </div>
      <button
        aria-label="Next model"
        className="absolute right-0 top-1/2 z-10 flex size-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white shadow-md"
        onClick={() => setIndex((current) => (current + 1) % slides.length)}
      >
        <ChevronRight size={18} />
      </button>
      <p className="mt-4 text-center text-sm text-slate-500">
        {index + 1} / {slides.length}
      </p>
    </div>
  );
}
