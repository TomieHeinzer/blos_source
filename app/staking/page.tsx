import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { StakingHow } from "@/components/staking-how";
import { Tag } from "@/components/ui/tag";

export const metadata: Metadata = { title: "Staking" };

export default function StakingPage() {
  return (
    <>
      <section className="border-b bg-gradient-to-b from-slate-100 to-white px-4 py-16 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Image src="/images/human/workshop-hands.jpg" alt="" width={286} height={99} className="mb-16" />
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Blos Staking</h1>
          <p className="mt-3 text-lg">The engine of the agentic economy.</p>
          <p className="mt-2 max-w-xl text-sm text-slate-500">
            Staking rewards depend on agent activity and are not guaranteed. BLOS is a crypto asset — its value can go down as well as up.
          </p>
        </div>
      </section>

      <section className="mx-auto flex max-w-2xl flex-col gap-12 px-4 py-16">
        <h2 className="text-center text-3xl font-bold lg:text-4xl">Why launch a staking program?</h2>
        {[
          ["Ignite agent economies", "Use proof-of-active-agent to kickstart ecosystems where rewards follow real on-chain performance — DeFi, prediction, governance — not passive holding."],
          ["Tailor incentives to your goals", "Define the KPIs. Deploy staking contracts that pay only when those outcomes land."],
          ["Drive impact beyond TVL", "PoAA grows a network through agent work, not just locked capital."],
        ].map(([title, copy]) => (
          <div key={title}>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 text-slate-700">{copy}</p>
          </div>
        ))}
      </section>

      <section className="bg-slate-100 px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-bold">Powered by Proof-of-Active-Agent</h2>
          <Image src="/images/human/team-table.jpg" alt="" width={560} height={280} className="mx-auto mt-8 w-full max-w-md" />
          <div className="mt-6 space-y-4 text-slate-700">
            <p>
              Blos staking is based on{" "}
              <Link href="/whitepaper" className="text-purple-700 hover:underline">
                Proof-of-Active-Agent (PoAA)
              </Link>{" "}
              — a mechanism that rewards real agent activity, not a passive lockup.
            </p>
            <p>
              It borrows from proof-of-stake and proof-of-work, then pays agents that deliver verifiable outcomes: an on-chain action, a met KPI.
            </p>
            <p>Value is supposed to follow the contribution, not the size of a wallet that never moves.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16">
        <div className="mb-8 text-center">
          <Tag className="mb-4">What this means for BLOS holders</Tag>
          <h2 className="text-3xl font-bold">Unleashing potential</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="metric-card p-5 md:col-span-2">
            <h3 className="text-lg font-semibold">Stake your BLOS</h3>
            <p className="mt-2 text-slate-600">
              Put tokens to work by running an agent through Emerald. Rewards depend on activity and are not guaranteed.
            </p>
            <Link href="/#emerald" className="mt-3 inline-block text-sm text-purple-700">
              Own your agent via Emerald
            </Link>
          </article>
          <article className="metric-card p-5">
            <h3 className="font-semibold">Grow the ecosystem</h3>
            <p className="mt-2 text-sm text-slate-600">Back agents that power on-chain use, from prediction markets to portfolio management.</p>
          </article>
          <article className="metric-card p-5">
            <h3 className="font-semibold">Drive demand</h3>
            <p className="mt-2 text-sm text-slate-600">As more agents and use cases show up, demand for BLOS follows.</p>
            <Link href="/agent-economies" className="mt-3 inline-block text-sm text-purple-700">
              Explore use cases
            </Link>
          </article>
        </div>
      </section>

      <section className="border-t px-4 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <Tag className="mb-6">How it works</Tag>
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Not your ordinary staking mechanism</h2>
          <p className="mx-auto mb-10 max-w-2xl text-slate-600">
            Staking gives Blos a way to launch, sustain, and benefit from entire autonomous agent economies.
          </p>
          <StakingHow />
          <Image
            src="/images/human/studio-table.jpg"
            alt="How launchers, builders, and operators fit together"
            width={960}
            height={420}
            className="mx-auto mt-16 w-full max-w-4xl"
          />
        </div>
      </section>
    </>
  );
}
