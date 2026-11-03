import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { faqs } from "@/lib/content";

export const metadata: Metadata = { title: "Stack" };

const parts = [
  {
    title: "Emerald",
    href: "/docs/emerald",
    description: "AI agent app store for people who want to own their agents.",
    img: "/images/stack-page/pearl-icon.png",
  },
  {
    title: "Cref Marketplace",
    href: "/cref-marketplace",
    description: "AI agent bazaar where businesses monetize or hire agents on Blos.",
    img: "/images/stack-page/mm-icon.png",
  },
  {
    title: "Agent frameworks",
    href: "/docs/build",
    description: "Open-source tools for developers to build and deploy agents on Blos.",
    img: "/images/stack-page/agent-icon.png",
  },
  {
    title: "Blos Protocol",
    href: "/docs/stack",
    description: "On-chain protocol that defines the core features and coordinates agent economies.",
    img: "/images/stack-page/protocol-icon.png",
  },
];

export default function StackPage() {
  return (
    <>
      <section className="border-b border-[#e4ddd2] bg-[#f8efe8] px-4 py-20 lg:py-28">
        <h1 className="text-center text-4xl font-extrabold tracking-tight md:text-6xl">Blos Stack</h1>
      </section>
      <section className="border-y px-4 py-16">
        <div className="mx-auto flex max-w-[872px] flex-col gap-5">
          <p className="text-slate-700">
            The Blos Stack is the technical foundation of Blos. It consists of four core innovations:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {parts.map((part) => (
              <Link
                key={part.title}
                href={part.href}
                className="flex h-full gap-4 rounded-xl border bg-white p-4 shadow-sm transition hover:bg-slate-50"
              >
                <Image src={part.img} alt="" width={48} height={48} className="h-12 w-12" />
                <div>
                  <p className="font-medium">{part.title}</p>
                  <p className="text-sm text-[#4D596A]">{part.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <p>
            To go further on each part, open the{" "}
            <Link href="/docs" className="text-purple-700 hover:underline">
              technical documentation
            </Link>
            .
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-3xl font-bold">Frequently asked questions</h2>
        <div className="mt-6 divide-y rounded-2xl border bg-white">
          {faqs.map((item) => (
            <details key={item.q} className="group px-5 py-4">
              <summary className="cursor-pointer list-none font-medium">{item.q}</summary>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
