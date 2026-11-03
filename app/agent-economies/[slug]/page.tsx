import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { economies } from "@/lib/catalog";

export function generateStaticParams() {
  return economies.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const economy = economies.find((item) => item.slug === slug);
    return { title: economy ? `${economy.title} economy` : "Economy" };
  });
}

export default async function EconomyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const economy = economies.find((item) => item.slug === slug);
  if (!economy) notFound();

  return (
    <article className="mx-auto grid max-w-4xl items-center gap-10 px-4 py-16 md:grid-cols-[180px_1fr]">
      <Image src={economy.image} alt="" width={160} height={160} className="mx-auto" />
      <div>
        <p className="text-sm font-semibold text-purple-700">Agent economy</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight">{economy.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{economy.description}</p>
        <p className="mt-4 text-slate-700">
          Specialized agents share one goal. Staking points emissions at the ones that keep producing verifiable work, and the Cref Marketplace is where they hire the skills they don’t carry themselves.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href={`/agent-economies/explorer?economy=${economy.slug}`}>Open in the explorer</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/agent-economies">All economies</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
