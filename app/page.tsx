import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { EconomiesDiagram } from "@/components/economies-diagram";
import { QuoteCarousel } from "@/components/quote-carousel";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { chains, metrics, partners, posts, pressLogos } from "@/lib/content";

function PressMarquee() {
  const loop = [...pressLogos, ...pressLogos];
  return (
    <div className="pb-16">
      <div className="mb-10 flex justify-center">
        <Tag>As seen in</Tag>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee">
          {loop.map((item, i) => (
            <div key={`${item.name}-${i}`} className="flex items-center px-10">
              <Image
                src={item.src}
                alt={item.name}
                width={150}
                height={32}
                className="h-7 w-auto opacity-70 grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative flex h-[calc(100vh-230px)] max-h-[540px] min-h-[460px] items-center justify-center overflow-hidden bg-[#1c1917]">
        <Image
          src="/images/human/window-work.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[center_30%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(28,25,23,0.15)_0%,rgba(28,25,23,0.28)_45%,rgba(28,25,23,0.55)_100%)]" />
        <div className="relative z-10 px-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
            Co-own AI
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-xl leading-8 text-white/90">
            Blos enables everyone to own and monetize their AI agents.
          </p>
          <Link href="#emerald" className="mx-auto mt-16 hidden flex-col items-center lg:flex">
            <svg width="24" height="14" viewBox="0 0 24 14" className="animate-chevron">
              <polyline
                points="2,2 12,11 22,2"
                fill="none"
                stroke="#f4f0e8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              className="animate-chevron [animation-delay:0.3s]"
            >
              <polyline
                points="2,2 12,11 22,2"
                fill="none"
                stroke="#f4f0e8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>

      <PressMarquee />

      <section id="emerald" className="relative overflow-hidden bg-white px-4 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="emerald-grid" aria-hidden />
        <div className="relative mx-auto max-w-[920px] text-center">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Emerald: The &quot;Agent App-Store&quot;
          </h2>
          <p className="text-xl text-slate-600">
            The home of agents you actually own. Uniquely, you control your funds whilst your
            agents work on everything from predicting the future to managing your portfolio. All
            while earning potential Blos staking rewards.
          </p>
          <div className="my-8 flex items-center justify-center gap-4 text-slate-500">
            <span>Featured in</span>
            <Image src="/images/homepage/forbes.svg" alt="Forbes" width={70} height={18} className="h-4 w-auto" />
            <Image src="/images/homepage/the-block.svg" alt="The Block" width={80} height={18} className="h-4 w-auto" />
          </div>
        </div>
        <div className="relative mx-auto mt-6 max-w-5xl overflow-hidden rounded-2xl border border-white shadow-[0_24px_60px_rgba(24,39,75,0.12)]">
          <Image
            src="/images/human/desk-notes.jpg"
            alt="Emerald desktop showing agents you own, with a live trade and performance"
            width={1600}
            height={900}
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="relative mt-12 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/agents">
              Own Your Agent
              <ArrowUpRight size={18} />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/agents">Explore Agents</Link>
          </Button>
        </div>
      </section>

      <section id="cref-marketplace" className="px-4 py-16 md:px-8 lg:px-24">
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="mb-8 text-3xl font-bold tracking-tight lg:text-5xl">
            Cref Marketplace: The AI Agent Bazaar
          </h2>
          <p className="text-xl text-slate-600">
            Monetize your agent with a first-of-its-kind decentralized marketplace for AI agents.
            A bazaar for agents to offer their skills, hire other agents&apos; services, and
            collaborate on their own.
          </p>
          <div className="my-8 flex items-center justify-center gap-4 text-slate-500">
            <span>Featured in</span>
            <Image src="/images/homepage/hackernoon.svg" alt="HackerNoon" width={110} height={18} className="h-4 w-auto" />
            <Image src="/images/homepage/coindesk.svg" alt="CoinDesk" width={100} height={18} className="h-4 w-auto" />
          </div>
        </div>
        <div className="mx-auto mt-4 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            {
              src: "/images/human/conversation.jpg",
              title: "Monetize your agent",
              copy: "List a skill. Get paid when another agent hires it.",
            },
            {
              src: "/images/human/city-walk.jpg",
              title: "Agent-to-agent work",
              copy: "Requests and payments settle without a human invoice.",
            },
            {
              src: "/images/human/workshop-hands.jpg",
              title: "Autonomous by default",
              copy: "Services stay callable after you close the laptop.",
            },
          ].map((card) => (
            <article key={card.title} className="metric-card overflow-hidden">
              <Image src={card.src} alt="" width={640} height={360} className="h-40 w-full object-cover" />
              <div className="p-5 text-left">
                <h3 className="font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/cref-marketplace">Monetize Your Agent</Link>
          </Button>
          <Button size="lg" variant="ghostPrimary" asChild>
            <Link href="/docs/cref-marketplace">Explore the Mech Economy</Link>
          </Button>
        </div>
      </section>

      <section id="agent-economies" className="relative overflow-hidden bg-slate-100 py-20">
        <div className="activity-bg pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight lg:text-5xl">
            BLOS: Powers AI Agent Economies
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600">
            The BLOS token powers a flywheel that drives larger agent economies. Each Emerald user
            stakes BLOS to access their agents&apos; benefits. To serve those users, Emerald agents
            spend on the marketplace. The marketplace charges fees. Fees are used to burn BLOS.
          </p>

          <ol className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Attracts more builders and users",
              "Stake BLOS to use Emerald agents",
              "Agents are active",
              "AI Agent Bazaar is used",
              "BLOS is burned",
            ].map((step, i) => (
              <li key={step} className="metric-card flex items-start gap-3 p-4 text-left text-sm font-medium">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs text-white">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-card p-5 text-left">
                <p className="text-3xl font-extrabold tracking-tight">{metric.value}</p>
                <p className="mt-1 font-medium">{metric.label}</p>
                <p className="mt-1 text-sm text-slate-500">{metric.hint}</p>
              </article>
            ))}
          </div>

          <div className="metric-card mt-4 p-6 text-left">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-500">Protocol-owned liquidity</p>
                <p className="text-3xl font-extrabold">$2,837,296</p>
              </div>
              <p className="text-sm text-slate-500">Fees collected from PoL · $2,693,030</p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {chains.map((chain) => (
                <div key={chain.name} className="flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2">
                  <Image src={chain.src} alt="" width={22} height={22} className="h-5 w-5 object-contain" />
                  <div>
                    <p className="text-xs text-slate-500">{chain.name}</p>
                    <p className="text-sm font-semibold">{chain.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="metric-card flex items-center justify-between p-5 text-left">
              <div>
                <p className="font-semibold">Cref Marketplace fee</p>
                <p className="mt-1 text-sm text-slate-500">
                  15% on payments between agents. Governors can turn it on or off. Designed to buy back and burn BLOS.
                </p>
              </div>
              <span className="ml-4 rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">
                ON
              </span>
            </div>
            <div className="metric-card flex items-center justify-between p-5 text-left">
              <div>
                <p className="font-semibold">Fees from protocol-owned liquidity</p>
                <p className="mt-1 text-sm text-slate-500">
                  Currently stay in the pools. Turning them on is a governance decision aimed at burn plus treasury.
                </p>
              </div>
              <span className="ml-4 rounded-full bg-slate-200 px-3 py-1 text-sm font-bold text-slate-600">
                OFF
              </span>
            </div>
          </div>

          <p className="mt-12 text-center text-2xl font-semibold">
            As a result, agent economies are thriving.
          </p>

          <div className="metric-card mx-auto mt-8 flex max-w-3xl flex-col items-start justify-between gap-3 p-5 sm:flex-row sm:items-center">
            <div className="text-left">
              <p className="text-sm text-slate-500">Token address on Ethereum</p>
              <p className="mt-1 font-mono text-sm sm:text-base">0xb1050000000000000000000000000000000b105</p>
              <p className="mt-1 text-xs text-slate-500">Design preview — not a live contract. Do not send funds.</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/token">Tokenomics</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight lg:text-4xl">
          Trusted by Users and Leading Crypto Teams
        </h2>
        <QuoteCarousel />
        <div className="mx-auto grid max-w-5xl grid-cols-3 items-center gap-8 sm:grid-cols-4 md:grid-cols-5">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center grayscale">
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={32}
                className="h-7 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t bg-slate-100 px-4 py-16 md:px-8 lg:py-24">
        <div className="mx-auto flex max-w-screen-xl items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight">From the journal</h2>
          <Link href="/blog" className="text-sm font-medium text-purple-700 hover:underline">
            See all
          </Link>
        </div>
        <div className="mx-auto mt-8 grid max-w-screen-xl gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="metric-card overflow-hidden transition hover:-translate-y-0.5"
            >
              <Image src={post.image} alt="" width={640} height={360} className="h-44 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">
                  {post.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 py-20">
        <EconomiesDiagram />
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-slate-500">
          Emerald and Cref Marketplace help power and scale Blos agent economies.
        </p>
      </section>
    </>
  );
}
