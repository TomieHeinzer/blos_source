import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { decentralizedAgents, sovereignAgents } from "@/lib/catalog";

export const metadata: Metadata = { title: "Agents" };

function AgentCard({
  title,
  description,
  image,
  href,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <Link href={href} className="metric-card flex gap-4 p-4 transition hover:bg-white">
      <Image src={image} alt="" width={80} height={80} className="h-20 w-20 shrink-0 rounded-lg object-cover" />
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-slate-600">{description}</p>
      </div>
    </Link>
  );
}

export default function AgentsPage() {
  return (
    <>
      <section className="border-b bg-slate-100 px-4 py-14 lg:px-12">
        <div className="mx-auto grid max-w-screen-xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-500">AI AGENTS</p>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Blos is the home of AI agents</h1>
            <p className="mt-4 text-lg text-slate-600">Learn about AI agents on Blos.</p>
            <Button asChild size="xl" className="mt-8">
              <a href="#agents">Browse AI agents</a>
            </Button>
          </div>
          <Image src="/images/human/team-table.jpg" alt="" width={504} height={454} className="mx-auto w-full max-w-md" priority />
        </div>
      </section>

      <section className="mx-auto max-w-[680px] px-4 py-16 text-center">
        <h2 className="text-3xl font-bold">What is an AI agent?</h2>
        <Image src="/images/human/desk-notes.jpg" alt="" width={648} height={228} className="my-8 w-full" />
        <p className="text-left text-slate-700">
          An AI agent is software that perceives its environment, decides, and acts on its own — without someone clicking through every step — to reach a specific goal.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-8">
        <h2 className="mb-10 text-center text-3xl font-bold">Two types of Blos agents</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <article>
            <h3 className="text-center text-2xl font-semibold">Sovereign agents</h3>
            <Image src="/images/human/desk-notes.jpg" alt="" width={396} height={200} className="my-6 w-full" />
            <p className="text-slate-700">
              Run by one operator on a machine they control. Simple to deploy, and the user keeps custody.
            </p>
          </article>
          <article>
            <h3 className="text-center text-2xl font-semibold">Decentralized agents</h3>
            <Image src="/images/human/conversation.jpg" alt="" width={396} height={200} className="my-6 w-full" />
            <p className="text-slate-700">
              Run by several operators and kept in sync through shared state. Used when no single party should be able to steer the agent.
            </p>
          </article>
        </div>
      </section>

      <section id="agents" className="bg-slate-100 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Sovereign AI agents</h2>
            <p className="mt-3 text-lg text-slate-600">Lightweight agents anybody can run locally or in the cloud.</p>
          </div>
          <div className="mb-20 grid gap-4 md:grid-cols-2">
            {sovereignAgents.map((agent) => (
              <AgentCard key={agent.slug} {...agent} href={`/agents/${agent.slug}`} />
            ))}
          </div>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Decentralized AI agents</h2>
            <p className="mt-3 text-lg text-slate-600">Transparent and robust through consensus, run by separate operators.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {decentralizedAgents.map((agent) => (
              <AgentCard key={agent.slug} {...agent} href={`/agents/${agent.slug}`} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg">
              <Link href="/agent-economies">Learn about agent economies</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
