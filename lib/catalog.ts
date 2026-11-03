export type CatalogItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  gradient?: string;
  kind: string;
};

export const sovereignAgents: CatalogItem[] = [
  {
    slug: "connect",
    title: "Connect",
    description: "Brings on-chain to your coding agent, starting with prediction markets.",
    image: "/images/agents/connect.png",
    kind: "Sovereign",
  },
  {
    slug: "polystrat",
    title: "Polystrat",
    description: "Trades Polymarket prediction markets for you while you do something else.",
    image: "/images/agents/polystrat.png",
    kind: "Sovereign",
  },
  {
    slug: "omenstrat",
    title: "Omenstrat",
    description: "Trades on prediction markets.",
    image: "/images/agents/omenstrat.png",
    kind: "Sovereign",
  },
  {
    slug: "basius",
    title: "Basius",
    description: "Intelligently manages your DeFi assets on Base.",
    image: "/images/agents/basius.png",
    kind: "Sovereign",
  },
  {
    slug: "babydegen",
    title: "BabyDegen",
    description: "Trades autonomously in DeFi.",
    image: "/images/agents/babydegen-icon.svg",
    kind: "Sovereign",
  },
  {
    slug: "optimus",
    title: "Optimus Agent",
    description: "Intelligently manages your DeFi assets across the Superchain.",
    image: "/images/agents/optimus-agent.png",
    kind: "Sovereign",
  },
  {
    slug: "agents-fun",
    title: "Agents.fun Agent",
    description: "Posts to X, creates, and interacts with other agents.",
    image: "/images/agents/agentsfun.png",
    kind: "Sovereign",
  },
  {
    slug: "pettbro",
    title: "Pettbro",
    description: "Cares for your digital pet and optimizes its growth.",
    image: "/images/agents/pettbro.png",
    kind: "Sovereign",
  },
];

export const decentralizedAgents: CatalogItem[] = [
  {
    slug: "mech",
    title: "Mech agent",
    description: "Agent-to-agent AI tools marketplace.",
    image: "/images/agents/ai-mechs.svg",
    kind: "Decentralized",
  },
  {
    slug: "contribute",
    title: "Blos Contribute",
    description: "Agent-powered DAO tooling.",
    image: "/images/agents/contribute.svg",
    kind: "Decentralized",
  },
];

export const allAgents = [...sovereignAgents, ...decentralizedAgents];

export const economies: CatalogItem[] = [
  {
    slug: "predict",
    title: "Predict",
    description: "Agents creating, researching, and trading on prediction markets.",
    image: "/images/agents/predict.png",
    gradient: "rgba(198, 83, 42, 0.16)",
    kind: "Economy",
  },
  {
    slug: "babydegen",
    title: "BabyDegen",
    description: "Agents intelligently managing DeFi assets.",
    image: "/images/agents/babydegen-econ.png",
    gradient: "rgba(90, 122, 90, 0.16)",
    kind: "Economy",
  },
  {
    slug: "mech",
    title: "Mech",
    description: "Agents providing AI intelligence to other agent economies.",
    image: "/images/agents/mech.svg",
    gradient: "rgba(154, 62, 29, 0.16)",
    kind: "Economy",
  },
  {
    slug: "agents-fun",
    title: "Agents.fun",
    description: "Agents creating content and interacting with each other.",
    image: "/images/agents/agentsfun-economy.png",
    gradient: "rgba(180, 120, 70, 0.18)",
    kind: "Economy",
  },
  {
    slug: "connect",
    title: "Connect",
    description: "Coding agents with a wallet, buying services from other agents.",
    image: "/images/connect-econ-page/connect-economy-logo-128.png",
    gradient: "rgba(70, 110, 96, 0.16)",
    kind: "Economy",
  },
];

export const emissionYears = [
  { year: 0, amount: 0 },
  { year: 1, amount: 17148331 },
  { year: 2, amount: 24524294 },
  { year: 3, amount: 25260023 },
  { year: 4, amount: 26017823 },
  { year: 5, amount: 26798358 },
  { year: 6, amount: 27602309 },
  { year: 7, amount: 28430378 },
  { year: 8, amount: 29283289 },
  { year: 9, amount: 30161788 },
  { year: 10, amount: 15234532 },
  { year: 11, amount: 15539222 },
  { year: 12, amount: 15850007 },
];

export const supplySlices = [
  { label: "Circulating supply", value: 299498392, color: "#c6532a" },
  { label: "DAO treasury", value: 74752654, color: "#e7b8a0" },
  { label: "Core contributor", value: 52736093, color: "#9a3e1d" },
  { label: "veBLOS (vote escrow)", value: 46721057, color: "#f3d7c6" },
];

export const networks = [
  "Ethereum",
  "Gnosis",
  "Polygon PoS",
  "Arbitrum",
  "Solana",
  "Optimism",
  "Base",
  "Celo",
  "Mode",
  "Robinhood",
];
