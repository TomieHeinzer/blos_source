import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = posts.find((item) => item.slug === slug);
    return { title: post?.title ?? "Journal" };
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Link href="/blog" className="text-sm font-medium text-purple-700 hover:underline">
        ← Blog
      </Link>
      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-purple-700">{post.category}</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight">{post.title}</h1>
      <p className="mt-3 text-sm text-slate-500">{post.date}</p>
      <Image
        src={post.image}
        alt=""
        width={1200}
        height={680}
        className="mt-8 h-72 w-full rounded-2xl object-cover"
      />
      <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
        {post.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
