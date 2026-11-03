import Image from "next/image";

import { Logo } from "@/components/logo";

const spots = [
  "12% 18%",
  "28% 12%",
  "46% 10%",
  "64% 14%",
  "80% 22%",
  "18% 34%",
  "36% 30%",
  "58% 28%",
  "74% 36%",
  "22% 52%",
  "40% 56%",
  "62% 54%",
  "78% 62%",
  "30% 74%",
  "50% 78%",
  "68% 72%",
];

export function EconomiesDiagram() {
  return (
    <div className="mx-auto grid w-full max-w-5xl items-center gap-6 md:grid-cols-[120px_1fr_140px]">
      <div className="text-center">
        <Image
          src="/images/stack-page/pearl-icon.png"
          alt=""
          width={88}
          height={88}
          className="mx-auto rounded-2xl shadow-sm"
        />
        <p className="mt-3 text-sm font-medium text-slate-700">Emerald</p>
        <p className="text-xs text-slate-500">Agent app store</p>
      </div>

      <div className="relative mx-auto aspect-[2.1/1] w-full max-w-[640px]">
        <div className="absolute inset-[8%] rotate-45 rounded-[48px] border border-slate-200 bg-gradient-to-br from-white to-slate-100 shadow-[0_20px_50px_rgba(24,39,75,0.08)]" />
        <div className="absolute inset-0">
          {spots.map((pos) => (
            <Image
              key={pos}
              src="/images/stack-page/agent-icon.png"
              alt=""
              width={36}
              height={36}
              className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2"
              style={{ left: pos.split(" ")[0], top: pos.split(" ")[1] }}
            />
          ))}
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-md">
            <Logo wordClassName="text-2xl" />
          </div>
        </div>
      </div>

      <div className="text-center">
        <Image
          src="/images/stack-page/mm-icon.png"
          alt=""
          width={96}
          height={96}
          className="mx-auto"
        />
        <p className="mt-3 text-sm font-medium text-slate-700">Cref Marketplace</p>
        <p className="text-xs text-slate-500">Agent bazaar</p>
      </div>
    </div>
  );
}
