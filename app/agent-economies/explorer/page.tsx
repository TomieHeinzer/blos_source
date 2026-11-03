import type { Metadata } from "next";

import { EconomyExplorer } from "@/components/economy-explorer";

export const metadata: Metadata = { title: "Agent Economy Explorer" };

export default async function ExplorerPage({
  searchParams,
}: {
  searchParams: Promise<{ economy?: string }>;
}) {
  const { economy } = await searchParams;
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <p className="text-sm font-semibold text-purple-700">Agent economies</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight">Agent Economy Explorer</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        A visual, time-aware view of Blos agent-economy activity. Pick an economy, a metric, and a year.
      </p>
      <div className="mt-8">
        <EconomyExplorer initialEconomy={economy} />
      </div>
    </section>
  );
}
