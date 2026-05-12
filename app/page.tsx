import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChamberList from "@/components/ChamberList";
import Link from "next/link";

const featured = [
  ["THE LIBRARY", "The Ruins Will Find You Standing", "Horace and the conduct of men in uncertain times."],
  ["THE VIGIL", "The Administration of Decline", "On bureaucratic fatigue and the erosion of institutional confidence."],
  ["THE FORUM", "Can Europe Still Govern Itself?", "Sovereignty, public order, and the managerial state."]
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden px-6 py-28 text-center md:py-36">
          <div className="absolute inset-0 -z-10 opacity-[0.04]">
            <div className="mx-auto mt-20 h-[520px] max-w-5xl rounded-full border-[80px] border-navy" />
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-10 flex h-28 w-28 items-center justify-center rounded-full border border-gold text-5xl text-gold">
              ◉
            </div>
            <h1 className="font-monument text-6xl tracking-[0.18em] text-navy md:text-8xl">
              MINERVAE
            </h1>
            <p className="mt-8 font-monument text-sm uppercase tracking-[0.24em] text-gold md:text-base">
              A European Review of Western Thought and Public Life
            </p>
            <p className="mx-auto mt-10 max-w-3xl text-2xl leading-[1.75] text-navy/90">
              Essays, studies, and editorial reflections dedicated to the recovery of intellectual seriousness, civilizational confidence, and institutional competence.
            </p>
          </div>
        </section>

        <div className="gold-rule mx-auto max-w-5xl" />

        <section className="px-6 py-28 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="text-3xl leading-[1.65] text-navy md:text-4xl">
              The West cannot be renewed by populations formed exclusively by immediacy, reaction, and intellectual passivity.
            </p>
            <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-navy/85">
              MINERVAE exists to contribute to the formation of readers capable of judgment, historical orientation, and institutional seriousness.
            </p>
          </div>
        </section>

        <section className="bg-navy px-6 py-28 text-ivory">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-monument text-4xl tracking-[0.18em] text-ivory">
              THE EDITORIAL CHAMBERS
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-ivory/80">
              Six permanent departments organize the review’s work across diagnosis, orientation, inheritance, formation, public order, and symbolic life.
            </p>
            <div className="mt-16">
              <ChamberList />
            </div>
          </div>
        </section>

        <section className="px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-monument text-4xl tracking-[0.18em] text-navy">
              FEATURED ESSAYS
            </h2>
            <div className="mt-16 divide-y divide-gold/70 border-y border-gold/70">
              {featured.map(([dept, title, excerpt]) => (
                <article key={title} className="grid gap-6 py-10 md:grid-cols-[180px_1fr]">
                  <div className="font-monument text-xs tracking-[0.22em] text-gold">{dept}</div>
                  <div>
                    <h3 className="text-3xl text-navy">{title}</h3>
                    <p className="mt-4 text-xl leading-8 text-navy/75">{excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="https://minervae.substack.com" className="border border-gold px-8 py-4 font-monument text-xs uppercase tracking-[0.2em] text-navy hover:bg-navy hover:text-ivory">
                Read on Substack
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-24 text-center text-ivory">
          <p className="mx-auto max-w-3xl text-2xl leading-10">
            MINERVAE is currently in formation. The review’s first essays, editorial letters, and subscriber dispatches will be released through its institutional channels.
          </p>
          <Link href="https://minervae.substack.com" className="mt-10 inline-block border border-gold px-8 py-4 font-monument text-xs uppercase tracking-[0.2em] text-gold">
            Subscribe for Dispatches
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
