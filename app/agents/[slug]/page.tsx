import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { allAgents } from "@/lib/catalog";

export function generateStaticParams() {
  return allAgents.map((agent) => ({ slug: agent.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const agent = allAgents.find((item) => item.slug === slug);
    return { title: agent?.title ?? "Agent" };
  });
}

export default async function AgentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = allAgents.find((item) => item.slug === slug);
  if (!agent) notFound();

  return (
    <article className="mx-auto grid max-w-4xl items-center gap-10 px-4 py-16 md:grid-cols-[200px_1fr]">
      <Image src={agent.image} alt="" width={200} height={200} className="mx-auto h-40 w-40 rounded-2xl object-cover" />
      <div>
        <p className="text-sm font-semibold text-purple-700">{agent.kind} agent</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight">{agent.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{agent.description}</p>
        <p className="mt-4 text-slate-700">
          Run it from Emerald on a machine you control. Stake BLOS if you want the operator benefits tied to keeping it active. Pause it whenever the goal stops matching what you asked for.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/#emerald">Open in Emerald</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/agents">All agents</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
