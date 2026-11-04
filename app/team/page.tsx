import type { Metadata } from "next";
import Image from "next/image";

import { investors, research, team } from "@/lib/content";

export const metadata: Metadata = { title: "Team" };

const heading =
  "font-[family-name:var(--font-outfit)] text-4xl font-semibold leading-[1.375] text-[#2a221c] md:text-5xl lg:text-[4.5rem]";

export default function TeamPage() {
  const people = [
    ...team.slice(0, 4),
    ...[...team.slice(4)].sort((a, b) => a.name.localeCompare(b.name)),
  ];

  return (
    <div className="bg-[#fffaf3] text-[#2a221c]">
      <section id="research" className="scroll-mt-20 bg-[#f0e2cf]">
        <div className="mx-auto max-w-screen-2xl px-8 py-8 md:px-20">
          <h1 className={`${heading} mb-8`}>Research</h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {research.map((paper) => (
              <article key={paper.href} className="mx-auto flex flex-col gap-4 text-sm">
                <Image
                  src={paper.image}
                  alt=""
                  width={400}
                  height={557}
                  className="aspect-[400/557] w-full object-cover max-lg:mx-auto"
                />
                <p className="font-[family-name:var(--font-outfit)] text-xl font-semibold leading-snug">{paper.title}</p>
                <p>{paper.authors}</p>
                <p className="line-clamp-5 lg:line-clamp-3">{paper.summary}</p>
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit border border-[#2a221c] px-14 py-3 text-sm font-bold transition duration-300 ease-in-out hover:border-transparent hover:bg-[#e8a04a]"
                >
                  Read Paper
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 bg-[#f3d7b4]">
        <div className="mx-auto max-w-screen-2xl px-8 py-8 md:px-20">
          <h1 className={`${heading} mb-8 text-center`}>Team</h1>
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {people.map((member) => (
              <li
                key={member.name}
                className="mx-auto flex w-full max-w-[280px] flex-col gap-4 text-sm md:max-w-[300px] xl:max-w-[380px]"
              >
                <Image
                  src={member.image}
                  alt=""
                  width={380}
                  height={530}
                  className="aspect-[38/53] w-full object-cover object-[center_18%]"
                />
                <div>
                  <p className="font-[family-name:var(--font-outfit)] text-2xl font-semibold leading-snug">{member.name}</p>
                  <p>{member.role}</p>
                </div>
                {member.bio ? <p>{member.bio}</p> : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="investors" className="mx-auto max-w-screen-xl px-8 py-24">
        <h2 className="mb-8 text-center font-[family-name:var(--font-outfit)] text-4xl font-medium leading-[1.375] tracking-tight text-[#2a221c] md:mb-16 md:text-5xl lg:text-[3.75rem]">
          Investors
        </h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {investors.map((firm) => (
            <li key={firm.name} className="flex items-center justify-center px-6 py-4">
              <img src={firm.image} alt={firm.name} width={300} height={100} className="mx-auto my-2 h-auto w-full max-w-[300px]" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
