import type { Metadata } from "next";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-slate-700">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Disclaimer</h1>
      <div className="mt-6 space-y-4 leading-7">
        <p>
          Blos is an independent design recreation of the public Olas marketing site. It is not
          affiliated with, endorsed by, or maintained by Valory, the Olas DAO, or the teams behind
          Emerald and the Cref Marketplace.
        </p>
        <p>
          Layout, photography, illustrations, and selected interface pictures are adapted from the
          Olas website source, which is published under the Apache License, Version 2.0. See
          NOTICE in this repository. The Blos mark and wordmark are new. The Olas name and logo
          are not used as this product’s brand.
        </p>
        <p>
          Names, portraits, press logos, and project marks appear so the pages keep the same
          visual rhythm as the original. They do not mean those people or organizations endorsed
          Blos. Quotes are shortened and the product name is changed for the recreation.
        </p>
        <p>
          Network figures are illustrative snapshots in the same shape as the public Olas
          dashboard. The Ethereum address on the homepage is a preview string, not a contract.
          Do not send funds to it. Nothing on this site is an offer to sell a token or a promise
          of yield.
        </p>
      </div>
    </article>
  );
}
