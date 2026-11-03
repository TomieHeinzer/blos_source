import type { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { investors, research, team } from "@/lib/content";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <>
      <section id="research" className="bg-[#e5e5e5]">
        <div className="mx-auto max-w-screen-2xl px-8 py-16 md:px-20 md:py-20">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-[#1c1917] lg:text-6xl">
            Research
          </h1>
          <p className="mb-10 max-w-2xl text-base text-[#3f3832]">
            Published work in agent systems and cryptography. Each card names the authors and links the paper.
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {research.map((paper) => (
              <article key={paper.href} className="mx-auto flex max-w-md flex-col gap-4 text-sm text-[#1c1917]">
                <Image
                  src={paper.image}
                  alt=""
                  width={800}
                  height={1114}
                  className="aspect-[400/557] w-full object-cover"
                />
                <h2 className="font-[family-name:var(--font-outfit)] text-xl font-medium leading-snug tracking-tight">
                  {paper.title}
                </h2>
                <p>{paper.authors}</p>
                <p className="line-clamp-5 text-[#3f3832] lg:line-clamp-3">{paper.summary}</p>
                <Button asChild size="lg" className="w-fit px-14 font-bold">
                  <a href={paper.href} target="_blank" rel="noreferrer">
                    Read Paper
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="people" className="bg-[#cddecc]">
        <div className="mx-auto max-w-screen-2xl px-8 py-16 md:px-20 md:py-20">
          <h2 className="mb-10 text-center text-5xl font-extrabold tracking-tight text-[#1c1917] lg:text-6xl">
            Team
          </h2>
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {team.map((member) => (
              <li
                key={member.name}
                className="mx-auto flex w-full max-w-[280px] flex-col gap-4 text-sm text-[#1c1917] md:max-w-[300px] xl:max-w-[380px]"
              >
                <Image
                  src={member.image}
                  alt=""
                  width={760}
                  height={1060}
                  className="aspect-[38/53] w-full object-cover object-[center_18%]"
                />
                <div>
                  <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-medium tracking-tight">
                    {member.name}
                  </h3>
                  <p>{member.role}</p>
                </div>
                {member.bio ? <p className="text-[#3f3832]">{member.bio}</p> : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="investors" className="bg-white">
        <div className="mx-auto max-w-screen-2xl px-8 py-16 md:px-20 md:py-20">
          <h2 className="mb-10 text-center text-5xl font-extrabold tracking-tight text-[#1c1917] lg:text-6xl">
            Investors
          </h2>
          <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {investors.map((name) => (
              <li
                key={name}
                className="font-[family-name:var(--font-outfit)] text-2xl font-medium tracking-tight text-[#1c1917]"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
