import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Blos-Predict-R1-14B" };

const forecasts = [
  { question: "Will the base rate on the next Fed meeting stay unchanged?", p: "62%", outcome: "Resolved yes" },
  { question: "Does the leading candidate clear 270 electoral votes?", p: "41%", outcome: "Open" },
  { question: "Will ETH close the quarter above its 200-day average?", p: "55%", outcome: "Resolved no" },
];

export default function PredictModelPage() {
  return (
    <>
      <section
        className="border-b px-6 py-12 lg:px-12"
        style={{ background: "linear-gradient(180deg, #f8ead8 0%, #f8f1e4 100%)" }}
      >
        <div className="mx-auto grid max-w-screen-xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 font-semibold text-slate-500">Blos-Predict-R1-14B</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">A model for forecasting real-world events</h1>
            <p className="mt-4 max-w-xl text-slate-600">
              Blos-Predict-R1-14B is a specialized, open-weight model that estimates the probability of future events. The forecasts below are examples of how the card reads — not a live model endpoint.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href="#run-it-yourself">Try the model yourself</a>
            </Button>
          </div>
          <Image src="/images/human/reading.jpg" alt="" width={560} height={560} className="mx-auto w-full max-w-md" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-3xl font-bold">Example forecasts</h2>
        <ul className="mt-6 divide-y rounded-2xl border">
          {forecasts.map((item) => (
            <li key={item.question} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p>{item.question}</p>
              <p className="text-sm text-slate-500">
                <span className="mr-3 font-semibold text-purple-700">{item.p}</span>
                {item.outcome}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section id="run-it-yourself" className="bg-slate-50 px-4 py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Run it yourself</h2>
            <p className="mt-3 text-slate-600">
              Weights are meant to live next to the agent, not behind a metered API. Point Emerald’s prediction agent at a local copy, or read the stack notes and wire the model into your own mech.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <Link href="/docs/build">Build with it</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/models">All models</Link>
              </Button>
            </div>
          </div>
          <Image src="/images/human/workshop-hands.jpg" alt="" width={560} height={360} className="w-full rounded-xl" />
        </div>
      </section>
    </>
  );
}
