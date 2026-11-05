import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { emissionYears, networks, supplySlices } from "@/lib/catalog";

export const metadata: Metadata = { title: "BLOS token" };

const totalSupply = supplySlices.reduce((sum, slice) => sum + slice.value, 0);
const maxEmission = Math.max(...emissionYears.map((year) => year.amount));

function Pie() {
  let cursor = 0;
  const stops = supplySlices
    .map((slice) => {
      const start = (cursor / totalSupply) * 100;
      cursor += slice.value;
      const end = (cursor / totalSupply) * 100;
      return `${slice.color} ${start}% ${end}%`;
    })
    .join(", ");
  return (
    <div
      className="mx-auto size-56 rounded-full shadow-inner"
      style={{ background: `conic-gradient(${stops})` }}
      role="img"
      aria-label="BLOS supply distribution"
    />
  );
}

const usage = [
  { label: "Operators", pct: 75, color: "#d4843a" },
  { label: "Bonders", pct: 25, color: "#f0c49a" },
  { label: "Builders", pct: 0, color: "#f6d7b4" },
];

export default function TokenPage() {
  return (
    <>
      <section className="border-b border-[#ead9c2] bg-[#f8ead8] px-4 py-16 lg:px-12">
        <div className="mx-auto grid max-w-screen-xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-slate-500">BLOS TOKEN</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">Unlock the Blos network</h1>
            <p className="mt-4 max-w-xl text-slate-600">
              BLOS provides access to the core functions of the network. It is a crypto asset — its value can go down as well as up. Nothing on this page is financial advice.
            </p>
            <Button asChild size="xl" className="mt-8">
              <Link href="#token-details">Get BLOS</Link>
            </Button>
          </div>
          <Image src="/images/human/hands-pass.jpg" alt="" width={520} height={520} className="mx-auto w-full max-w-md" priority />
        </div>
      </section>

      <section className="border-b px-4 py-12 text-center">
        <p className="text-sm text-slate-500">The BLOS token is widely held across the community</p>
        <p className="mt-2 text-5xl font-extrabold tracking-tight">35,586</p>
        <p className="text-slate-600">BLOS holders across chains</p>
      </section>

      <section id="supply" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-10 text-center text-4xl font-bold tracking-tight">Supply</h2>
        <div className="overflow-hidden rounded-xl border">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Total supply", "473,708,196 BLOS"],
                ["Circulating supply", "299,498,392 BLOS"],
                ["veBLOS (vote escrow)", "46,721,057 BLOS"],
                ["DAO treasury", "74,752,654 BLOS"],
                ["Core contributor", "52,736,093 BLOS"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b last:border-0">
                  <td className="px-4 py-3 text-slate-600">{label}</td>
                  <td className="px-4 py-3 text-right font-semibold">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Snapshot restated for this design. Epoch 51 split: operators 75%, bonders 25%, builders 0%. Not a live treasury.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border">
            <div className="border-b p-4">
              <h3 className="text-xl font-bold">Total supply distribution</h3>
              <p className="text-sm text-slate-500">{totalSupply.toLocaleString("en-US")} BLOS</p>
            </div>
            <div className="grid items-center gap-6 p-6 sm:grid-cols-[auto_1fr]">
              <Pie />
              <ul className="space-y-2 text-sm">
                {supplySlices.map((slice) => (
                  <li key={slice.label} className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2">
                      <span className="size-3 rounded-sm" style={{ background: slice.color }} />
                      {slice.label}
                    </span>
                    <span className="font-medium">{slice.value.toLocaleString("en-US")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article id="emission-schedule" className="rounded-lg border">
            <div className="border-b p-4">
              <h3 className="text-xl font-bold">Max emission schedule</h3>
              <p className="text-sm text-slate-500">The maximum BLOS the protocol can mint over time. Year 4 is the current year.</p>
            </div>
            <div className="space-y-1.5 p-4">
              {emissionYears.map((year) => (
                <div key={year.year} className="grid grid-cols-[52px_1fr_auto] items-center gap-2 text-xs">
                  <span className={year.year === 4 ? "font-bold text-purple-700" : "text-slate-500"}>Year {year.year}</span>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full ${year.year === 4 ? "bg-purple-600" : "bg-purple-300"}`}
                      style={{ width: `${(year.amount / maxEmission) * 100}%` }}
                    />
                  </div>
                  <span className="w-24 text-right">{year.amount.toLocaleString("en-US")}</span>
                </div>
              ))}
            </div>
            <p className="px-4 pb-4 text-xs text-slate-500">
              A maximum of 1bn BLOS can be minted in the first 10 years. After year 9, up to 2% more can be minted each year. The DAO can reduce that rate.
            </p>
          </article>

          <article className="rounded-lg border">
            <div className="border-b p-4">
              <h3 className="text-xl font-bold">Current usage</h3>
              <p className="text-sm text-slate-500">What newly minted tokens are earmarked for right now. Epoch 51.</p>
            </div>
            <ul className="space-y-4 p-6">
              {usage.map((item) => (
                <li key={item.label}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{item.label}</span>
                    <span className="font-semibold">{item.pct}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-100">
                    <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="px-6 pb-4 text-xs text-slate-500">
              Tokens are distributed to builders, operators, and bonders each epoch. Epochs run roughly once a month. Governors can change the split.
            </p>
          </article>

          <article className="rounded-lg border">
            <div className="border-b p-4">
              <h3 className="text-xl font-bold">Actual emissions, epochs 1–50</h3>
              <p className="text-sm text-slate-500">Running totals. The open epoch is excluded.</p>
            </div>
            <ul className="divide-y text-sm">
              {[
                ["Dev rewards claimed", "2,756,084"],
                ["Dev rewards available", "8,711,684"],
                ["Minted for staking rewards", "12,278,764"],
                ["Dispensed to staking contracts", "7,170,891"],
                ["Staking rewards claimed", "6,616,231"],
                ["Staking rewards claimable", "6,639,086"],
                ["Bond rewards claimed", "12,236,271"],
                ["Bond rewards claimable", "12,514,750"],
                ["Actual emissions, all groups", "21,608,585"],
                ["Claimable emissions, all groups", "27,865,520"],
              ].map(([label, value]) => (
                <li key={label} className="flex justify-between gap-4 px-4 py-2.5">
                  <span className="text-slate-600">{label}</span>
                  <span className="font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="protocol" className="border-t px-4 py-16">
        <div className="mx-auto flex max-w-[680px] flex-col gap-8 text-lg">
          <div className="text-center">
            <h2 className="text-4xl font-semibold">Blos Protocol</h2>
            <p className="mt-3 text-slate-600">Core mechanisms that coordinate the humans and the agents using it.</p>
          </div>
          <Image src="/images/human/studio-table.jpg" alt="Protocol diagram" width={680} height={440} className="w-full" />
          <p>The protocol is a framework for coordinating and managing AI agent economies.</p>
          <ul className="list-disc space-y-3 pl-6 text-base">
            <li>
              <strong>Software registries.</strong> Agent software and the components inside it are registered as NFTs.
            </li>
            <li>
              <strong>AI agent registry.</strong> Sovereign and decentralized agents are registered, and their operators are coordinated.
            </li>
          </ul>
          <div className="grid gap-4">
            {[
              ["/images/human/workshop-hands.jpg", "Builder rewards", "Pay builders in proportion to useful code. The protocol receives the agents."],
              ["/images/human/notebook.jpg", "Bonding emissions", "Bonders permanently provide liquidity and receive BLOS. The protocol owns the liquidity."],
              ["/images/human/team-table.jpg", "Staking emissions", "Operators run agents in economies defined by launchers and get paid for activity."],
            ].map(([image, title, copy]) => (
              <article key={title} className="flex gap-4 rounded-xl border p-4">
                <Image src={image} alt="" width={72} height={72} className="h-16 w-16 object-contain" />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-slate-600">{copy}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="text-base text-slate-600">
            Governors are BLOS holders who lock tokens into veBLOS. The protocol is deployed across multiple chains.
          </p>
          <Image src="/images/human/conversation.jpg" alt="" width={680} height={360} className="w-full rounded-xl" />
        </div>
      </section>

      <section id="token-details" className="bg-[#f8ead8] px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold">Token details</h2>
          <p className="mt-3 text-center text-sm text-slate-500">
            For information only. Addresses below are design previews, not contracts you should fund.
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border bg-white">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="border-b px-4 py-3 font-medium">Network</th>
                  <th className="border-b px-4 py-3 font-medium">Get BLOS</th>
                  <th className="border-b px-4 py-3 font-medium">Token address</th>
                </tr>
              </thead>
              <tbody>
                {networks.map((name) => (
                  <tr key={name}>
                    <td className="border-b px-4 py-3">{name}</td>
                    <td className="border-b px-4 py-3 text-slate-500">Preview</td>
                    <td className="border-b px-4 py-3 font-mono text-xs text-slate-500">0xb105…preview</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
