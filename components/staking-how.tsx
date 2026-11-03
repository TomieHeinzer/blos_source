"use client";

import Image from "next/image";
import { useState } from "react";

const mechanism = [
  "DAOs or protocol teams (launchers) define their goals.",
  "Those teams launch staking contracts.",
  "Builders develop agents with the stack they already use.",
  "Operators run the agents.",
  "Launchers hit the goal, powered by every role.",
];

const example = [
  "Blos decides to launch a prediction product.",
  "Blos creates the staking programs.",
  "Builders develop the prediction agent on the Blos stack.",
  "Operators run prediction agents to earn staking rewards.",
  "The prediction product ships.",
];

export function StakingHow() {
  const [tab, setTab] = useState<"mechanism" | "example">("mechanism");
  const items = tab === "mechanism" ? mechanism : example;

  return (
    <div>
      <div className="mx-auto mb-14 flex w-fit rounded-full border p-1">
        {(["mechanism", "example"] as const).map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`rounded-full px-4 py-2 text-sm capitalize ${
              tab === key ? "bg-slate-100 text-black" : "text-slate-400"
            }`}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-14 lg:flex-row">
        <Image
          src={`/images/staking-page/${tab}-diagram.png`}
          alt=""
          width={528}
          height={400}
          className="w-full max-w-lg"
        />
        <ol className="h-fit w-[320px] list-decimal rounded-xl bg-slate-100 p-6 pl-10">
          {items.map((item) => (
            <li key={item} className="mb-6">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
