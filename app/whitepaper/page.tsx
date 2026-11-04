import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Whitepaper" };

const documents = [
  {
    title: "Summary",
    href: "/docs/what-is-blos",
    image: "/images/human/notebook.jpg",
    blurb: "The short version: own the agent, don’t rent the lab.",
  },
  {
    title: "Whitepaper",
    href: "/documents/blos-whitepaper.pdf",
    image: "/images/human/desk-notes.jpg",
    blurb: "How registries, agents, and economies fit together.",
    file: true,
  },
  {
    title: "Tokenomics",
    href: "/token",
    image: "/images/human/hands-pass.jpg",
    blurb: "Supply, emissions, and who receives newly minted BLOS.",
  },
  {
    title: "Proof of Active Agent / Staking",
    href: "/staking",
    image: "/images/human/workshop-hands.jpg",
    blurb: "Rewards for agents that actually do the work.",
  },
];

export default function WhitepaperPage() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 md:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Whitepaper</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        The four documents that specify Blos: a summary, the protocol paper, tokenomics, and proof-of-active-agent staking.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
        {documents.map((doc) => (
          <Link
            key={doc.title}
            href={doc.href}
            {...("file" in doc ? { target: "_blank", rel: "noreferrer" } : {})}
            className="flex h-full flex-col items-center rounded-lg border border-gray-200 p-4 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <Image
              src={doc.image}
              alt=""
              width={120}
              height={120}
              className="h-28 w-28 rounded-lg object-cover"
            />
            <h2 className="mt-4 text-xl font-bold">{doc.title}</h2>
            <p className="mt-2 text-sm text-slate-500">{doc.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
