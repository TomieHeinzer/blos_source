import type { Metadata } from "next";

import { CareersBoard } from "@/components/careers-board";

export const metadata: Metadata = { title: "Careers" };

const facts = [
  {
    title: "On-chain",
    copy: "Stakes, fees, and agent-to-agent payments settle in contracts. The chain is the record.",
  },
  {
    title: "Models beside the safe",
    copy: "Prediction and portfolio agents run on hardware the operator controls, not a rented API.",
  },
  {
    title: "One desk",
    copy: "Emerald shows the safe, the stake, and the model’s last action in the same place.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-[#ead9c2] bg-[#f8ead8] px-4 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-purple-300">Blos</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Careers</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Blockchain seats on the protocol and the bazaar. AI seats on the models and the agent runtime. All remote.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-3">
        {facts.map((fact) => (
          <article key={fact.title} className="metric-card p-5">
            <h2 className="font-semibold">{fact.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{fact.copy}</p>
          </article>
        ))}
      </section>

      <CareersBoard />
    </>
  );
}
