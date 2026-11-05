import type { Metadata } from "next";

import { faqs } from "@/lib/content";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight">FAQ</h1>
      <p className="mt-3 text-slate-600">Short answers about Emerald, the marketplace, and BLOS.</p>
      <div className="mt-8 divide-y rounded-2xl border">
        {faqs.map((item) => (
          <details key={item.q} className="px-5 py-4" open>
            <summary className="cursor-pointer font-medium">{item.q}</summary>
            <p className="mt-2 text-slate-600">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
