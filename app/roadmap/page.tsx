import type { Metadata } from "next";
import { CheckCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Tag } from "@/components/ui/tag";

export const metadata: Metadata = { title: "Roadmap" };

type RoadmapRow =
  | { kind: "section"; label: string }
  | { kind: "row"; emerald: string; market: string; done?: boolean };

const rows: RoadmapRow[] = [
    { kind: "section", label: "Now" },
    { kind: "row", emerald: "AI Agent Ownership", market: "A2A Collaboration", done: true },
    { kind: "row", emerald: "Simplified UX", market: "Monetize Your Agent", done: true },
    { kind: "row", emerald: "Human-like Utility", market: "x402", done: true },
    { kind: "row", emerald: "Web2 UX", market: "Simplified Onboarding", done: true },
    { kind: "row", emerald: "More Agents", market: "Seamless Data Storage", done: true },
    { kind: "row", emerald: "Multiple AI Agents", market: "ERC-8004", done: true },
    { kind: "row", emerald: "Open-source", market: "Hire Mech Agents", done: true },
    { kind: "row", emerald: "No-code Experience", market: "", done: true },
    { kind: "section", label: "Short-term" },
    { kind: "row", emerald: "Even More Agents", market: "Dynamic Fees" },
    { kind: "row", emerald: "State-of-the-art UX", market: "Native x402" },
    { kind: "section", label: "Mid-term" },
    { kind: "row", emerald: "Cutting-edge Utility", market: "Access any service with one signature" },
    { kind: "row", emerald: "", market: "MCP" },
  ];

function TokenCard() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image src="/images/roadmap-page/olas-token-logo.png" alt="" width={70} height={78} />
      <p className="text-xl font-semibold">BLOS Token</p>
      <div className="metric-card w-[300px] p-4 text-center text-sm">
        BLOS bootstraps the{" "}
        <Link href="/#agent-economies" className="text-purple-700 hover:text-purple-800">
          flywheel between Emerald and Cref Marketplace
        </Link>
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  return (
    <section className="overflow-hidden border-b px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-12 text-center text-3xl font-semibold text-gray-700 lg:text-[40px]">
          Blos Roadmap
        </h1>
        <div className="mb-12 flex flex-col items-center">
          <Tag>Co-owned AI</Tag>
          <span className="text-slate-400">=</span>
          <Tag variant="primary" className="bg-[#F4F7FB] text-black">
            <span className="text-purple-700">Crypto:</span> Own Your Keys, Own Your Coins
          </Tag>
          <span className="text-slate-400">+</span>
          <span className="rounded-md bg-[#F4F7FB] px-3 py-1 text-sm font-semibold">
            <span className="text-purple-700">AI:</span> Own Your Weights, Own Your Brain
          </span>
          <span className="text-slate-400">+</span>
          <span className="rounded-md bg-[#F4F7FB] px-3 py-1 text-sm font-semibold">
            <span className="text-purple-700">OSS:</span> Own Your Code, Own Your Destiny
          </span>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <article className="mx-auto max-w-xs text-center lg:text-left">
            <Image src="/images/roadmap-page/pearl.png" alt="" width={78} height={78} className="mx-auto mb-6 lg:mx-0" />
            <h2 className="mb-4 text-lg font-semibold">Emerald — The “AI Agent App Store”</h2>
            <p className="mb-3 text-sm text-slate-700">
              Emerald today is a world of AI agents owned by you — one app store, simplified UX, human-like utility, and a no-code, open-source experience.
            </p>
            <p className="mb-3 text-sm text-slate-700">
              Its non-custodial core and Web2-familiar onboarding keep the keys with you. From here it moves toward sharper UX and a wider shelf of specialized agents.
            </p>
            <p className="text-sm text-slate-700">
              Further out, Emerald deepens what those agents can do without making the app harder to open.
            </p>
          </article>
          <div className="mx-auto">
            <TokenCard />
          </div>
          <article className="mx-auto max-w-xs text-center lg:text-right">
            <Image
              src="/images/roadmap-page/mech-marketplace.png"
              alt=""
              width={78}
              height={78}
              className="mx-auto mb-6 lg:ml-auto lg:mr-0"
            />
            <h2 className="mb-4 text-lg font-semibold">Cref Marketplace — The “AI Agent Bazaar”</h2>
            <p className="mb-3 text-sm text-slate-700">
              A two-sided bazaar where a business can monetize an agent or hire another agent’s service.
            </p>
            <p className="mb-3 text-sm text-slate-700">
              ERC-8004 and x402 let agents reach low-latency services, including ones outside Blos. Next: native x402 and dynamic fees.
            </p>
            <p className="text-sm text-slate-700">
              Mid-term, any agent reaches an on-chain or off-chain capability with a single signature, including MCP.
            </p>
          </article>
        </div>

        <div className="mx-auto mt-16 hidden max-w-5xl lg:block">
          <Image
            src="/images/roadmap-page/roadmap.webp"
            alt="Emerald and Cref Marketplace items from now through mid-term"
            width={1400}
            height={980}
            className="h-auto w-full"
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-base">
              <tr>
                <th className="border border-slate-200 p-3 font-medium">Emerald</th>
                <th className="border border-slate-200 p-3 font-medium">Marketplace</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) =>
                row.kind === "section" ? (
                  <tr key={row.label}>
                    <td colSpan={2} className="border border-slate-200 p-3 text-center font-medium text-slate-500">
                      {row.label}
                    </td>
                  </tr>
                ) : (
                  <tr key={row.emerald + row.market}>
                    <td className="border border-slate-200 p-3 text-[#db2777]">
                      {row.done && row.emerald ? <CheckCheck className="mr-2 inline" size={16} /> : null}
                      {row.emerald}
                    </td>
                    <td className="border border-slate-200 p-3 text-[#9a3e1d]">
                      {row.done && row.market ? <CheckCheck className="mr-2 inline" size={16} /> : null}
                      {row.market}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
