import type { Metadata } from "next";
import Link from "next/link";

import { docGroups, docs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Docs",
  description: "Explore what Blos is, what you can build and use, and how to get involved.",
};

const groupCopy: Record<string, string> = {
  "Start here": "Blos is the platform that enables true co-ownership of AI.",
  "What you can use": "Something for everyone who wants to co-own AI.",
  "Get involved": "Pick a role and benefit from the protocol, whatever you bring.",
};

export default function DocsHome() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <p className="text-sm font-semibold text-purple-700">Docs</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight lg:text-5xl">Blos Docs</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Explore what Blos is, what you can build and use, and how to get involved.
      </p>

      <div className="mt-14 space-y-14">
        {docGroups.map((group) => (
          <div key={group}>
            <h2 className="text-2xl font-semibold">{group === "Start here" ? "What is Blos?" : group === "What you can use" ? "What can I use?" : "Get involved in growing Blos"}</h2>
            <p className="mt-2 text-slate-600">{groupCopy[group]}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {docs
                .filter((doc) => doc.group === group)
                .map((doc) => (
                  <Link key={doc.slug} href={`/docs/${doc.slug}`} className="metric-card p-5 transition hover:bg-white">
                    <h3 className="font-semibold">{doc.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{doc.summary}</p>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
