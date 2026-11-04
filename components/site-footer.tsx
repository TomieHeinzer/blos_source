import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/logo";

const columns = [
  {
    title: "For users",
    links: [
      { title: "Emerald: the agent app store", href: "/#emerald" },
      { title: "Cref Marketplace", href: "/cref-marketplace" },
      { title: "BLOS token", href: "/token" },
    ],
  },
  {
    title: "DAO",
    links: [
      { title: "Contribute", href: "/docs/contribute" },
      { title: "Launch", href: "/docs/launch" },
      { title: "Build", href: "/docs/build" },
      { title: "Operate", href: "/docs/operate" },
      { title: "Bond", href: "/docs/bond" },
      { title: "Govern", href: "/docs/govern" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Blog", href: "/blog" },
      { title: "Docs", href: "/docs" },
      { title: "Whitepaper", href: "/whitepaper" },
      { title: "Models", href: "/models" },
      { title: "Agents", href: "/agents" },
      { title: "Agent economies", href: "/agent-economies" },
      { title: "Explorer", href: "/agent-economies/explorer" },
      { title: "Roadmap", href: "/roadmap" },
      { title: "Staking", href: "/staking" },
      { title: "Stack", href: "/stack" },
      { title: "FAQ", href: "/faq" },
      { title: "Agents Unleashed", href: "/agents-unleashed" },
    ],
  },
  {
    title: "More",
    links: [
      { title: "About", href: "/about" },
      { title: "Team", href: "/team#team" },
      { title: "Careers", href: "/careers" },
      { title: "Tokenomics", href: "/token" },
      { title: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

const social = [
  { title: "X", src: "/images/footer/x.svg", href: "https://x.com" },
  { title: "Telegram", src: "/images/footer/telegram.svg", href: "https://t.me" },
  { title: "CoinGecko", src: "/images/footer/coingecko.svg", href: "https://www.coingecko.com" },
  { title: "CoinMarketCap", src: "/images/footer/cmc.svg", href: "https://coinmarketcap.com" },
  { title: "YouTube", src: "/images/footer/youtube.svg", href: "https://www.youtube.com" },
];

export function SiteFooter() {
  return (
    <footer className="bg-white px-4 py-16 lg:px-6">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10 border-b border-slate-200 pb-12 text-slate-600 xl:flex-row xl:gap-16">
        <div className="max-w-xs shrink-0">
          <Link href="/" className="mb-3 inline-block">
            <Logo />
          </Link>
          <p className="mt-3 text-sm">The platform for true co-ownership of AI</p>
          <div className="mt-5 flex gap-2">
            {social.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full hover:bg-slate-100"
                aria-label={item.title}
              >
                <Image src={item.src} alt="" width={40} height={40} />
              </a>
            ))}
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-semibold text-slate-900">{column.title}</p>
              <ul className="mt-3 space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.href + link.title}>
                    <Link href={link.href} className="hover:text-black">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-screen-xl text-center text-sm text-slate-500">
        © Blos {new Date().getFullYear()} ·{" "}
        <Link href="/disclaimer" className="hover:text-black">
          Disclaimer
        </Link>
        <span className="mx-2">·</span>
        <a
          href="https://github.com/valory-xyz/olas-website"
          className="hover:text-black"
          target="_blank"
          rel="noreferrer"
        >
          Design adapted from Olas
          <MoveUpRight className="ml-0.5 inline" size={10} />
        </a>
      </p>
    </footer>
  );
}
