import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-start justify-center px-6 py-24">
      <p className="text-sm font-semibold text-purple-700">404</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight">This page is not on the map.</h1>
      <p className="mt-3 text-slate-600">
        The agent looked. Nothing under that path is registered on Blos.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back home</Link>
      </Button>
    </section>
  );
}
