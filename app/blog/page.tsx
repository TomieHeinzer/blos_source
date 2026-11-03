import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays and product notes from Blos — agents, the bazaar, and the BLOS flywheel.",
};

export default function BlogPage() {
  const [lead, ...rest] = posts;
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 md:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Blog</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Product notes, token mechanics, and the field reports from people running agents they own.
      </p>

      <Link href={`/blog/${lead.slug}`} className="metric-card mt-10 grid overflow-hidden md:grid-cols-2">
        <Image src={lead.image} alt="" width={900} height={560} className="h-full max-h-[360px] w-full object-cover" />
        <div className="flex flex-col justify-center p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">{lead.category}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">{lead.title}</h2>
          <p className="mt-3 text-slate-600">{lead.excerpt}</p>
          <p className="mt-6 text-sm text-slate-500">{lead.date}</p>
        </div>
      </Link>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="metric-card overflow-hidden">
            <Image src={post.image} alt="" width={640} height={360} className="h-44 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">{post.category}</p>
              <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <p className="mt-4 text-xs text-slate-500">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
