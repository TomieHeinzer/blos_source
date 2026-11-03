import type { Metadata } from "next";
import Image from "next/image";

import { ModelsCarousel } from "@/components/models-carousel";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Models" };

export default function ModelsPage() {
  return (
    <>
      <section className="border-b bg-gradient-to-t from-slate-100 to-gray-50 px-4 py-14 lg:px-12">
        <div className="mx-auto grid max-w-screen-xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-500">BLOS MODELS</p>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">AI models built for Blos</h1>
            <p className="mt-4 text-lg text-slate-600">Specialised models trained for the agents running on Blos.</p>
            <Button asChild size="xl" className="mt-8">
              <a href="#models">Browse models</a>
            </Button>
          </div>
          <Image src="/images/human/reading.jpg" alt="" width={580} height={580} className="mx-auto w-full max-w-md" priority />
        </div>
      </section>
      <section id="models" className="bg-slate-100 px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Available models</h2>
        <ModelsCarousel />
      </section>
    </>
  );
}
