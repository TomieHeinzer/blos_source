import type { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

import sponsorsJson from "@/data/au-sponsors.json";
import { Logo } from "@/components/logo";
import { events } from "@/lib/content";

export const metadata: Metadata = { title: "Agents Unleashed" };

type Icon = { name: string; iconFileName: string; width: number; height: number };
const sponsors = sponsorsJson[0] as {
  largeIcons: Icon[];
  mediumIcons: Icon[];
  smallIcons: Icon[];
};

function Sponsor({ icon }: { icon: Icon }) {
  if (icon.name === "Olas") {
    return <Logo wordClassName="text-xl" />;
  }
  return (
    <Image
      src={`/images/${icon.iconFileName}`}
      alt={icon.name}
      width={icon.width}
      height={icon.height}
      className="h-7 w-auto max-w-[160px] object-contain"
    />
  );
}

const stats = [
  { value: "10", label: "Events" },
  { value: "42", label: "Sponsors" },
  { value: "84", label: "Speakers" },
  { value: "4457+", label: "Attendees" },
];

export default function AgentsUnleashedPage() {
  const rows = [sponsors.largeIcons, sponsors.mediumIcons, sponsors.smallIcons];
  return (
    <>
      <section className="border-y bg-[#f8efe8]">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-10 px-6 py-12 lg:flex-row lg:justify-between lg:px-16">
          <div className="max-w-md">
            <Image
              src="/images/au-page/agents-unleashed.png"
              alt="Agents Unleashed"
              width={420}
              height={120}
              className="h-auto w-full max-w-sm"
            />
            <h1 className="mt-6 max-w-sm text-2xl font-semibold tracking-tight text-black">
              The premier AI agent event series, showcasing the cutting edge of crypto and AI.
            </h1>
            <a
              href="#events"
              className="mt-8 inline-flex h-12 items-center rounded-md bg-purple-600 px-8 text-lg font-medium text-white hover:bg-purple-800"
            >
              Don&apos;t miss out
            </a>
          </div>
          <Image
            src="/images/human/gathering.jpg"
            alt="Crowds and stages from Agents Unleashed"
            width={560}
            height={720}
            className="hidden max-h-[520px] w-auto rounded-lg object-contain lg:block"
          />
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto grid max-w-5xl grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="border-l border-slate-200 px-8 py-8">
              <p className="text-5xl font-extrabold">{item.value}</p>
              <p className="mt-2 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-4 py-16">
        {rows.map((row, index) => (
          <div key={index} className="mb-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-8 grayscale">
            {row.map((icon) => (
              <div key={icon.name} className="flex min-w-[120px] flex-1 items-center justify-center">
                <Sponsor icon={icon} />
              </div>
            ))}
          </div>
        ))}

        <Image
          src="/images/human/window-work.jpg"
          alt="Agents Unleashed gathering"
          width={1000}
          height={700}
          className="mt-8 w-full rounded-lg"
        />
        <div className="mt-8 space-y-4 text-slate-800">
          <p>
            Agents Unleashed showcases the latest work on AI agents, the loud overlap of crypto and AI. The organizers&apos; bet is that artificial general intelligence will likely be agentic. Agents will not be handed bank accounts, so crypto — digital money with an open API — is their natural home. Some of the sharpest people in both fields are already building here. This series is where you learn the vocabulary, whether you arrived from crypto or from AI.
          </p>
          <p>
            The series is hosted by Blos. It started as a way to put agent builders in one room: shared practice, shared language, and a push to unleash agents for people rather than for a single lab.
          </p>
        </div>
      </section>

      <section className="mx-auto mb-16 max-w-[1000px] px-4">
        <h2 className="mb-10 text-center text-3xl font-bold lg:text-4xl">What to expect</h2>
        <div className="space-y-4">
          {[
            "Expert panels, firesides, and alpha from the people actually shipping agents.",
            "Hallway time with those same builders, investors, and operators.",
            "Serious venues, good food, and — if the night goes well — humans unleashed: the afterparty.",
          ].map((item, index) => (
            <div key={item} className="flex overflow-hidden rounded-xl border border-purple-200">
              <div className="flex w-20 shrink-0 items-center justify-center bg-[#1c1917] text-5xl font-bold text-[#f4f0e8]">
                {index + 1}
              </div>
              <p className="my-auto px-4 py-5">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <Image src="/images/human/city-walk.jpg" alt="" width={1600} height={420} className="w-full" />

      <section id="events" className="bg-slate-50 px-4 py-16">
        <h2 className="mx-auto mb-10 max-w-xl text-center text-3xl font-bold lg:text-4xl">
          Catch the next event or catch up on previous talks
        </h2>
        <div className="mx-auto flex max-w-[800px] flex-col gap-5">
          {events.map((event) => (
            <article
              key={event.title}
              className={`flex flex-col gap-4 rounded-xl border p-4 shadow-sm md:flex-row md:justify-between ${
                event.upcoming ? "border-[#e7c3b2] bg-[#f8efe8]" : "border-slate-200 bg-white"
              }`}
            >
              <div>
                {event.upcoming && (
                  <span className="mb-3 inline-flex rounded-full bg-[#c6532a] px-2 py-1 text-xs font-medium text-white">
                    Upcoming
                  </span>
                )}
                <div className={`flex flex-wrap gap-4 text-sm ${event.upcoming ? "" : "text-slate-500"}`}>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={16} /> {event.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={16} /> {event.date}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-bold">{event.title}</h3>
                <p className="mt-4 text-sm text-purple-700">
                  {event.upcoming ? "Talk replay coming soon" : "Talks archived with the series"}
                </p>
              </div>
              <Image
                src={event.image}
                alt=""
                width={160}
                height={160}
                className="h-36 w-36 rounded-lg object-cover"
              />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
