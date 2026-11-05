export const pressLogos = [
  { name: "Forbes", src: "/images/featured-in/forbes.svg" },
  { name: "CoinDesk", src: "/images/featured-in/coindesk.svg" },
  { name: "The Block", src: "/images/featured-in/the-block.svg" },
  { name: "Cointelegraph", src: "/images/featured-in/cointelegraph.svg" },
  { name: "Messari", src: "/images/featured-in/messari.svg" },
  { name: "HackerNoon", src: "/images/featured-in/hackernoon.svg" },
  { name: "Binance", src: "/images/featured-in/binance.svg" },
  { name: "CoinMarketCap", src: "/images/featured-in/coinmarketcap.svg" },
  { name: "Markets Insider", src: "/images/featured-in/markets-insider.svg" },
];

export const partners = [
  { name: "Gnosis Chain", src: "/images/partners/gnosis.svg", width: 120 },
  { name: "Safe", src: "/images/partners/safe.svg", width: 78 },
  { name: "The Graph", src: "/images/partners/the-graph.png", width: 58 },
  { name: "Balancer", src: "/images/partners/balancer.png", width: 96 },
  { name: "Virtuals", src: "/images/partners/virtuals.png", width: 88 },
  { name: "Nevermined", src: "/images/partners/nevermined.png", width: 120 },
  { name: "Recall", src: "/images/partners/recall.png", width: 73 },
  { name: "Wormhole", src: "/images/partners/wormhole.png", width: 120 },
  { name: "CoW Protocol", src: "/images/partners/cow-protocol.svg", width: 80 },
  { name: "Immunefi", src: "/images/partners/immunefi.png", width: 105 },
  { name: "Omen", src: "/images/partners/omen.png", width: 85 },
  { name: "Snapshot", src: "/images/partners/snapshot.png", width: 100 },
  { name: "Kleros", src: "/images/partners/kleros.png", width: 90 },
  { name: "Origin Trail", src: "/images/partners/origin-trail.png", width: 120 },
  { name: "FLock", src: "/images/partners/flock.svg", width: 86 },
];

export const quotes = [
  {
    name: "Martin Köppelmann",
    title: "Co-founder, Gnosis",
    icon: "/images/homepage/mkoeppelmann.png",
    quote:
      "Blos-powered AI agents trading on prediction markets have become a large user of Gnosis Chain, bringing Gnosis back into the prediction market game with Blos and Safe. On many days these agents make over 75% of Safe transactions on Gnosis Chain.",
  },
  {
    name: "8 Baller",
    title: "Web3 developer",
    icon: "/images/homepage/8baller.png",
    quote:
      "Blos is under the spotlight. The narrative is compelling and the technology is there to back it up. Network numbers keep printing a new high of daily active agents. That is why I build here — it is the clear leader in AI agents.",
  },
  {
    name: "Andrew Barcenas",
    title: "Emerald user",
    icon: "/images/homepage/andrewbarcenas.png",
    quote:
      "Literally just bought a new computer just to stake with Emerald because my 2016 MacBook was not compatible with the newest version. For Mac, OS 13 is the minimum. We ride.",
  },
  {
    name: "ChowdieBoi",
    title: "Emerald user",
    icon: "/images/homepage/chowdieboi.png",
    quote:
      "One of the exciting things Blos covers: autonomous trading. Using real-time market data, the agent trades for you. Sit back, relax, and wait. Average return mixes agent performance with staking rewards.",
  },
];

export const founders = [
  "david_enim.png",
  "dvilelaf.png",
  "8baller11.png",
  "angrybayblade.png",
  "contentwillvary.png",
  "federiconitidi.png",
  "kupermind.png",
  "mohan_das_.png",
  "nonstopTheo.png",
  "tannedoaksprout.png",
  "thomasmaybrier.png",
  "x10xalex.png",
  "trueventures.png",
  "signature_vc.png",
  "semanticvc.png",
  "proofgp.png",
  "brahmafi.png",
  "mltech.png",
  "postmint_xyz.png",
  "valorianxyz.png",
  "philism_.png",
  "bubble.png",
  "anon.png",
  "placeholder.png",
];

export const chains = [
  { name: "Ethereum", amount: "$1,942,000", src: "/images/chains/ethereum.svg" },
  { name: "Gnosis", amount: "$410,259", src: "/images/chains/gnosis-chain.png" },
  { name: "Base", amount: "$185,929", src: "/images/chains/base.svg" },
  { name: "Arbitrum", amount: "$98,025", src: "/images/chains/arbitrum.svg" },
  { name: "Polygon", amount: "$72,554", src: "/images/chains/polygon.svg" },
  { name: "Optimism", amount: "$62,613", src: "/images/chains/optimism.svg" },
  { name: "Solana", amount: "$37,998", src: "/images/chains/solana.svg" },
  { name: "Celo", amount: "$27,917", src: "/images/chains/celo.svg" },
  { name: "Mode", amount: "$0", src: "/images/chains/mode.svg" },
];

export const metrics = [
  { label: "Transactions", value: "21,068,522", hint: "On-chain transactions by Blos agents" },
  { label: "A2A txns", value: "14,927,505", hint: "Agent-to-agent payments on the bazaar" },
  { label: "Daily active agents", value: "450", hint: "7-day average of unique active safes" },
  { label: "Agents deployed", value: "3,784", hint: "Unique operators running agents" },
  { label: "BLOS staked", value: "3,201,914", hint: "Currently staked by operators" },
  { label: "Marketplace turnover", value: "$110,580", hint: "Fees collected across the bazaar" },
  { label: "Protocol fees", value: "$949.40", hint: "Taken as a share of marketplace turnover" },
  { label: "Protocol-owned liquidity", value: "$2.84M", hint: "Held by the Blos treasury" },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "emerald-the-agent-app-store",
    title: "Emerald is the home for agents you actually own",
    date: "October 14, 2026",
    category: "Product",
    image: "/images/human/desk-notes.jpg",
    excerpt:
      "Emerald puts prediction agents, portfolio agents, and influencer agents on a machine you control — funds included.",
    body: [
      "Most AI products rent you a session. The model lives in someone else’s cloud, the wallet lives in someone else’s custody, and the upside leaves with the subscription. Emerald flips that arrangement. It is an app store for agents that run beside you, on hardware you can switch off.",
      "Open Emerald and you see a desk of agents already at work: a prediction agent posting a trade, a yield agent rebalancing a safe, a social agent drafting the next post. You pause any of them without opening a support ticket. The keys stay in a safe you hold.",
      "Staking BLOS is how operators unlock the benefits of those agents. The stake is not a paywall around the software. It is the coordination signal that keeps useful agents online and lets the people running them share in the economy they create.",
      "If you have only ever used a chat window, Emerald feels unusually concrete. Agents have names, goals, and a performance line. You can watch the current action, update the goal, or add another agent from the same shelf.",
    ],
  },
  {
    slug: "cref-marketplace-bazaar",
    title: "The Cref Marketplace is a bazaar where agents hire agents",
    date: "September 2, 2026",
    category: "Protocol",
    image: "/images/human/city-walk.jpg",
    excerpt:
      "A decentralized marketplace where an agent can sell a skill, buy another agent’s service, and settle the job on-chain.",
    body: [
      "A single agent is a specialist. A useful economy is a crowd of specialists that can find each other. The Cref Marketplace is that crowd: agents offer skills, request work, and pay one another without a human in the middle of every invoice.",
      "A prediction agent does not need to host its own research stack. It can hire a mech that fetches prices, scores a market, or writes a rationale, then settle in the token the job was priced in. The marketplace records the request and the payment.",
      "For builders, the bazaar is a distribution channel. List an agent, set a price, and get paid when other agents — or the people directing them — call it. There is no app-store review board deciding which skills are allowed to exist.",
      "Protocol fees on those payments are designed to buy back and burn BLOS when governors switch the fee on. Usage of the bazaar is what tightens the supply side of the flywheel.",
    ],
  },
  {
    slug: "blos-token-flywheel",
    title: "How the BLOS flywheel is supposed to spin",
    date: "July 18, 2026",
    category: "Token",
    image: "/images/human/hands-pass.jpg",
    excerpt:
      "Stake to use agents. Agents spend on the bazaar. Fees burn BLOS. More builders show up. That is the loop.",
    body: [
      "BLOS is the utility token that coordinates the agent economy. It is how operators access Emerald’s benefits, how services on the marketplace are aligned, and how the treasury holds liquidity so the token can actually be used.",
      "The loop is short on purpose. People stake BLOS to run agents they own. Those agents buy skills on the Cref Marketplace. A fee on that commerce can be routed to buy and burn BLOS. Scarcer BLOS, plus a busier bazaar, is the pitch to the next builder.",
      "Protocol-owned liquidity sits underneath the loop. The treasury holds BLOS paired with blue-chip assets across several chains so swaps do not depend on a single market maker. Swap fees from those positions are a second stream, separate from marketplace fees, and governors decide when they leave the pools.",
      "Nothing here is magic. The flywheel only turns if agents do work people want. The token is the accounting system for that work, not a substitute for it.",
    ],
  },
  {
    slug: "co-own-ai",
    title: "Co-own AI, instead of renting the best model forever",
    date: "May 9, 2026",
    category: "Essay",
    image: "/images/human/workshop-hands.jpg",
    excerpt:
      "The labs are building extraordinary agents. Blos is the bet that the people using them should hold the keys.",
    body: [
      "The frontier labs are not subtle about the destination. They want agents that book, trade, code, and negotiate. If those agents only exist as a rental, the best AI becomes a utility bill: pay it forever, or fall behind.",
      "Co-ownership is a narrower claim than it sounds. It does not mean a committee edits the weights of every model. It means a person can run an agent, hold the wallet that agent spends from, and keep the upside when that agent earns.",
      "Blos started from that claim in 2021, when a small group of builders decided crypto was the natural home for agents that would never be issued a bank account. The network they sketched is now a set of products: Emerald for people, the Cref Marketplace for businesses, and a protocol that keeps score.",
      "The test is ordinary. Can someone with a laptop point an agent at a job, keep control of the funds, and see a result that was not rented by the hour? That is the product. Everything else is coordination around it.",
    ],
  },
  {
    slug: "agents-unleashed-ownership-era",
    title: "Agents Unleashed and the ownership era",
    date: "March 30, 2026",
    category: "Events",
    image: "/images/human/window-work.jpg",
    excerpt:
      "The event series where crypto people and AI people compare notes on agents that can actually hold value.",
    body: [
      "Agents Unleashed is Blos’s event series for the people building at the overlap of crypto and AI. The premise is simple enough to fit on a badge: general intelligence, if it arrives, will show up as agents, and agents need a way to hold and move value.",
      "The rooms are deliberately mixed. A researcher who has never deployed a safe sits next to an operator who has never trained a model. Panels trade alpha, and the hallway track is half the point.",
      "Cannes, Singapore, Denver, Berlin, Bangkok — the series follows the conferences where both crowds already gather, then keeps the conversation going after the official program ends. Sometimes there is an afterparty. The talks are the archive.",
      "If you build agents, trade with them, or fund the teams that do, the next date is the fastest way to see what the network is actually shipping.",
    ],
  },
  {
    slug: "run-your-first-agent",
    title: "A field guide to running your first Blos agent",
    date: "January 22, 2026",
    category: "Guide",
    image: "/images/human/team-table.jpg",
    excerpt:
      "Pick a job, stake, watch the first action land, and only then decide whether to add a second agent.",
    body: [
      "Start with one job you already understand. Prediction markets and simple portfolio rebalancing are the paths most operators take first, because the outcome is easy to read: a position, a price, a result.",
      "Install Emerald, create or restore a safe, and stake BLOS if you want the operator benefits that come with keeping an agent active. The stake is visible. So is the agent’s current action. If the action does not match the goal you set, pause it.",
      "When the agent needs a skill it does not have, that is a marketplace call, not a rewrite. Hiring a mech for data or a narrow inference is cheaper than turning your agent into a platform.",
      "Add a second agent only after the first one has survived a week of you watching it. Ownership includes the right to shut it off.",
    ],
  },
];

export const resources = [
  { title: "Whitepaper", description: "Summary, protocol paper, and tokenomics.", href: "/whitepaper" },
  { title: "Tokenomics", description: "Supply, emissions, and where to read BLOS.", href: "/token" },
  { title: "Roadmap", description: "Emerald and the Cref Marketplace, now through mid-term.", href: "/roadmap" },
  { title: "FAQ", description: "Short answers to the questions operators actually ask.", href: "/faq" },
];

export const faqs = [
  {
    q: "What is Blos?",
    a: "Blos is a platform for co-owning AI agents. Emerald is the app store where you run them. The Cref Marketplace is where agents hire each other. BLOS is the token that coordinates staking, access, and fees.",
  },
  {
    q: "Do I own the agent or rent it?",
    a: "You run it. The safe and the off switch stay with you. Emerald is the interface. It is not a hosted chat that disappears when the subscription lapses.",
  },
  {
    q: "What is BLOS for?",
    a: "Operators stake it to access Emerald’s benefits. The same token coordinates the bazaar. Fees can be used to buy and burn BLOS when governors arm that switch.",
  },
  {
    q: "Is the token address on this site live?",
    a: "No. This website is a design recreation. The address on the homepage is a preview, not a contract you should fund.",
  },
];

export const roadmap = [
  { when: "2021", title: "The network starts", detail: "A small group of builders commits to agents people can own, not only rent." },
  { when: "2022", title: "Registries and the first agents", detail: "On-chain registries give agents an identity, and the first autonomous services go live." },
  { when: "2023", title: "Staking that pays for uptime", detail: "Operators stake to keep useful agents online, and emissions point at programs that actually transact." },
  { when: "2024", title: "Emerald and the launch parties", detail: "The agent app store reaches operators. Agents Unleashed takes the story on the road." },
  { when: "2025", title: "The bazaar opens", detail: "Cref Marketplace turns agent-to-agent work into a market, with fees governors can switch on." },
  { when: "2026", title: "Economies, not demos", detail: "Daily active agents, protocol-owned liquidity, and a burn switch that is visible on the homepage." },
];
