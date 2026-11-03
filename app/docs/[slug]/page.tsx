import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { docs } from "@/lib/content";

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const doc = docs.find((item) => item.slug === slug);
    return { title: doc ? `${doc.title} · Docs` : "Docs" };
  });
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = docs.find((item) => item.slug === slug);
  if (!doc) notFound();

  const related = docs.filter((item) => item.group === doc.group && item.slug !== doc.slug);

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[240px_1fr] md:px-8">
      <aside className="md:sticky md:top-24 md:self-start">
        <Link href="/docs" className="text-sm font-semibold text-purple-700">
          Blos Docs
        </Link>
        <ul className="mt-4 space-y-1 text-sm">
          {docs.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/docs/${item.slug}`}
                className={`block rounded-md px-2 py-1.5 ${
                  item.slug === doc.slug ? "bg-purple-50 font-medium text-purple-800" : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <article>
        <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">{doc.group}</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight">{doc.title}</h1>
        <p className="mt-3 text-lg text-slate-600">{doc.summary}</p>
        <div className="mt-8 space-y-4 text-slate-700 leading-7">
          {doc.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        {related.length > 0 && (
          <div className="mt-12 border-t pt-8">
            <p className="text-sm font-semibold text-slate-500">Continue in {doc.group}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/docs/${item.slug}`} className="rounded-full border px-3 py-1 text-sm hover:bg-slate-50">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
