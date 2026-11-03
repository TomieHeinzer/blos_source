import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { EconomiesDiagram } from "@/components/economies-diagram";
import { Tag } from "@/components/ui/tag";
import { Logo } from "@/components/logo";
import { founders } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

const bubbles = [
  { row: "justify-center", sizes: [36, 48, 36, 52, 40, 44] },
  { row: "justify-center", sizes: [44, 56, 40, 64, 48, 36, 52] },
  { row: "justify-between", sizes: [72, 0, 0, 0, 80] },
  { row: "justify-center", sizes: [40, 52, 36, 60, 44, 48, 36] },
  { row: "justify-center", sizes: [48, 36, 56, 40, 44] },
];

export default function AboutPage() {
  let cursor = 0;
  return (
    <>
      <section className="border-b bg-gradient-to-b from-purple-50/80 to-white px-4 py-16 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Logo className="mb-12 scale-125" />
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Blos: Co-own AI</h1>
          <p className="mt-4 text-lg text-slate-700">
            Blos enables everyone to own and monetize their AI agents.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="text-2xl font-semibold leading-snug">
          Blos is the platform that enables{" "}
          <span className="border-b-4 border-purple-300">true co-ownership of AI</span>
        </h2>
        <div className="mt-6 space-y-4 text-slate-700">
          <p>
            With Blos&apos;{" "}
            <Link href="/#emerald" className="text-purple-700 underline-offset-2 hover:underline">
              Emerald
            </Link>
            , the first “AI Agent App Store”, any person with a laptop can use AI agents they truly own.
          </p>
          <p>
            With Blos&apos;{" "}
            <Link href="/cref-marketplace" className="text-purple-700 underline-offset-2 hover:underline">
              Cref Marketplace
            </Link>
            , the “AI Agent Bazaar”, businesses can put their AI agents up for hire to earn crypto and tap into other agents&apos; services.
          </p>
          <p>
            Today, Blos agents cover prediction markets, asset management, and influencer agents — autonomously creating outcomes their owners can keep.
          </p>
          <p>
            The utility token{" "}
            <Link href="/token" className="text-purple-700 underline-offset-2 hover:underline">
              BLOS
            </Link>{" "}
            provides access to the platform’s benefits and coordinates agent interactions across entire economies.
          </p>
          <p>
            Launched in 2021 as one of the first crypto and AI projects, Blos now coordinates agent economies that settle millions of transactions.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16">
        <EconomiesDiagram />
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-slate-500">
          Emerald and Cref Marketplace help power and scale Blos agent economies.
        </p>
      </section>

      <section className="bg-slate-100 px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <Tag className="mb-6">The Blos story</Tag>
            <h2 className="text-2xl font-semibold">AI is changing the world at breakneck speed</h2>
            <div className="mt-5 space-y-4 text-slate-700">
              <p>
                AI is getting better each day, and with that comes the risk of its ownership getting more centralized. Labs like OpenAI, Anthropic, and DeepMind are building agents they hope will soon run everything. If unchecked, the{" "}
                <span className="font-semibold">best AI is owned by the few and rented by the many.</span>
              </p>
              <p>
                For everyone who wants agents that could change an industry,{" "}
                <span className="font-semibold">there will always be a price: pay the tax forever, or get left behind.</span>
              </p>
            </div>
          </div>
          <Image src="/images/human/workshop-hands.jpg" alt="People above a tray of rented agents from large labs" width={560} height={480} className="w-full" />
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <Tag className="mb-8">~50 founding members</Tag>
            <div className="space-y-3">
              {bubbles.map((row, rowIndex) => (
                <div key={rowIndex} className={`flex items-center gap-3 ${row.row}`}>
                  {row.sizes.map((size, i) => {
                    if (size === 0) return <span key={i} className="flex-1" />;
                    const icon = founders[cursor % founders.length];
                    cursor += 1;
                    return (
                      <Image
                        key={`${icon}-${rowIndex}-${i}`}
                        src={`/images/about/founders/${icon}`}
                        alt=""
                        width={size}
                        height={size}
                        className="rounded-full object-cover shadow-sm"
                        style={{ width: size, height: size }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold leading-snug">
              In 2021, a group of builders, innovators and dreamers realized the world doesn&apos;t just need powerful AI — it needs powerful AI that{" "}
              <span className="border-b-4 border-purple-300">belongs to everyone</span>
            </h2>
            <div className="mt-5 space-y-4 text-slate-700">
              <p>
                So they envisioned something radical: a truly open network where everyone could run, build, own, and participate in AI.{" "}
                <span className="font-semibold">Not just as users, but as owners of it.</span>
              </p>
              <p>
                They called it Blos — a bloom of agents. From a small DAO of about fifty, they created{" "}
                <span className="font-semibold">one of the very first projects at the intersection of crypto and AI.</span>
              </p>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-16 max-w-3xl text-center text-2xl font-semibold">
          Today, Blos coordinates autonomous agents that trade, influence, and predict on behalf of their owners. They are already creating value through millions of transactions each month.
        </p>
        <p className="mx-auto mt-6 w-max border-b-4 border-purple-300 text-center">And it&apos;s just getting started</p>
      </section>

      <section
        className="relative bg-cover bg-center px-6 py-20 text-white"
        style={{ backgroundImage: "url(/images/about/mission-background.svg)" }}
      >
        <div className="absolute inset-0 bg-[#1c1917]/72" />
        <div className="relative mx-auto max-w-4xl">
          <Tag variant="white" className="mb-6">
            Blos mission
          </Tag>
          <p className="text-3xl font-bold tracking-tight lg:text-4xl">
            To incentivize and coordinate different parties to launch autonomous agents that form entire AI economies serving all humans
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
        <div>
          <Tag className="mb-6">Unique edge</Tag>
          <h2 className="text-2xl font-semibold">
            Blos lets people own their AI agents rather than rent them — by aligning users and businesses through the token
          </h2>
          <div className="mt-5 space-y-4 text-slate-700">
            <p>Users run agents via Emerald, the agent app store, and benefit directly from their use.</p>
            <p>Businesses list agents on Cref Marketplace, earning when those agents help user-owned agents hit a goal.</p>
            <p>As more people adopt Emerald, demand on the marketplace grows — which pays builders to ship better agents.</p>
            <p>
              Both sides need BLOS to access the products and the flywheel. That is how Blos keeps user-owned AI funded at scale.
            </p>
          </div>
        </div>
        <Image src="/images/human/city-walk.jpg" alt="Jobs agents already cover, from prediction to yield" width={640} height={360} className="w-full" />
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex justify-center">
            <Tag>Get involved with Blos</Tag>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { href: "/#emerald", title: "Own your agent with Emerald", image: "/images/human/desk-notes.jpg" },
              { href: "/cref-marketplace", title: "Hire or monetize agents", image: "/images/human/conversation.jpg" },
              { href: "/docs", title: "Explore DAO roles", image: "/images/human/notebook.jpg" },
              { href: "/token", title: "Get the BLOS token", image: "/images/human/hands-pass.jpg" },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="metric-card relative flex h-36 items-center px-6 transition hover:bg-white"
              >
                <span className="max-w-[180px] text-lg font-medium">{card.title}</span>
                <Image src={card.image} alt="" width={120} height={120} className="absolute bottom-0 right-0 h-28 w-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
