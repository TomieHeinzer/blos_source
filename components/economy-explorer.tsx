"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const economies = [
  { key: "predict", label: "Predict", icon: "/images/explorer/predict.png" },
  { key: "babydegen", label: "Babydegen", icon: "/images/explorer/babydegen-economy.png" },
  { key: "mech", label: "Mech", icon: "/images/explorer/mech.png" },
  { key: "connect", label: "Connect", icon: "/images/connect-econ-page/connect-economy-logo-128.png" },
];

const metrics = [
  { key: "daa", label: "Latest DAAs", unit: "active agents" },
  { key: "tx", label: "Transactions", unit: "transactions" },
  { key: "a2a", label: "A2A txns", unit: "agent-to-agent txns" },
  { key: "accuracy", label: "Accuracy", unit: "percent" },
] as const;

type MetricKey = (typeof metrics)[number]["key"];

function hash(input: string) {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function dayValue(economy: string, metric: MetricKey, dayIndex: number) {
  const n = hash(`${economy}:${metric}:${dayIndex}`) % 1000;
  if (metric === "accuracy") return 48 + (n % 40);
  if (metric === "daa") return 20 + (n % 180);
  if (metric === "a2a") return n * 12;
  return n * 40;
}

function yearDays(economy: string, metric: MetricKey, year: number) {
  const startDate = new Date(Date.UTC(year, 0, 1));
  const end = new Date(Date.UTC(year + 1, 0, 1));
  const list: { date: string; value: number }[] = [];
  for (let cursor = startDate; cursor < end; cursor = new Date(cursor.getTime() + 86400000)) {
    if (year === 2026 && cursor > new Date(Date.UTC(2026, 10, 2))) break;
    const index = Math.floor(cursor.getTime() / 86400000);
    list.push({
      date: cursor.toISOString().slice(0, 10),
      value: dayValue(economy, metric, index),
    });
  }
  return list;
}

function formatHeadline(metric: MetricKey, days: { value: number }[]) {
  const latest = days.at(-1)?.value ?? 0;
  const total = days.reduce((sum, day) => sum + day.value, 0);
  if (metric === "accuracy") return `${Math.round(latest)}%`;
  const headline = metric === "daa" ? latest : total;
  return headline.toLocaleString("en-US");
}

const PURPLE = ["#f8ead8", "#f6d7b4", "#f0c49a", "#e09a62", "#d4843a", "#a85c22", "#7a4018"];

export function EconomyExplorer({ initialEconomy }: { initialEconomy?: string }) {
  const start = economies.some((item) => item.key === initialEconomy) ? initialEconomy! : "predict";
  const [economy, setEconomy] = useState(start);
  const [metric, setMetric] = useState<MetricKey>("daa");
  const [year, setYear] = useState(2026);

  const series = useMemo(() => {
    return Object.fromEntries(
      metrics.map((item) => [item.key, yearDays(economy, item.key, year)]),
    ) as Record<MetricKey, { date: string; value: number }[]>;
  }, [economy, year]);

  const days = series[metric];
  const max = Math.max(...days.map((day) => day.value), 1);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="tablist" aria-label="Agent economy" className="flex w-full gap-0.5 rounded-[10px] border border-[#d7ddea] bg-white p-0.5 sm:inline-flex sm:w-auto">
          {economies.map((item) => (
            <button
              key={item.key}
              role="tab"
              aria-selected={economy === item.key}
              onClick={() => setEconomy(item.key)}
              className={`flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg px-2 py-1.5 text-sm sm:px-8 ${
                economy === item.key ? "bg-[#1c1917] text-[#f8f1e4]" : "text-[#6b645c]"
              }`}
            >
              <Image src={item.icon} alt="" width={28} height={28} className="size-6 rounded-md object-cover" />
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {[2025, 2026].map((value) => (
            <button
              key={value}
              onClick={() => setYear(value)}
              className={`rounded-full px-4 py-1.5 text-sm ${year === value ? "bg-[#1c1917] text-[#f8f1e4]" : "bg-[#f3e6d2] text-[#3f3832]"}`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((item) => {
          const active = metric === item.key;
          return (
            <button
              key={item.key}
              onClick={() => setMetric(item.key)}
              className={`rounded-xl border p-4 text-left ${active ? "border-purple-400 bg-white shadow-sm" : "border-transparent bg-white/70"}`}
            >
              <p className="text-xs text-slate-500">{item.label}</p>
              <p className="mt-1 text-2xl font-bold">{formatHeadline(item.key, series[item.key])}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border bg-white p-4">
        <div className="mb-3 flex items-center justify-between text-sm">
          <p className="font-medium">
            {metrics.find((item) => item.key === metric)?.label} · {year}
          </p>
          <p className="text-slate-500">{days.length} days</p>
        </div>
        <div className="grid grid-cols-[repeat(53,minmax(0,1fr))] gap-[3px]">
          {days.map((day) => {
            const level = Math.min(PURPLE.length - 1, Math.floor((day.value / max) * (PURPLE.length - 1)));
            return (
              <div
                key={day.date}
                title={`${day.date}: ${day.value.toLocaleString("en-US")} ${metrics.find((item) => item.key === metric)?.unit}`}
                className="aspect-square rounded-[2px]"
                style={{ background: PURPLE[level] }}
              />
            );
          })}
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Illustrated activity for this design preview. It is not a live index of chain data.
        </p>
      </div>
    </div>
  );
}
