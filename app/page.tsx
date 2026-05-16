import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChamberList from "@/components/ChamberList";
import EssayEntry from "@/components/EssayEntry";
import Link from "next/link";

const firstEssay = {
  chamber: "THE ACADEMY",
  title: "The Ruins Will Find You Standing",
  subtitle: "Horace and the conduct of men in uncertain times.",
  date: "First publication",
  href: "https://minervaeorg.substack.com/"
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="monument-bg px-6 py-28 text-center md:py-36">
          <div className="mx-auto max-w-5xl">
            <img
              src="/images/minervae-owl.jpg"
              alt="MINERVAE owl emblem"
              className="mx-auto mb-10 h-32 w-32 rounded-full border border-gold object-cover"
            />
            <h1 className="font-monument text-6xl tracking-[0.18em] text-navy md:text-8xl">
              MINERVAE
            </h1>
            <p className="mt-8 font-monument text-sm uppercase tracking-[0.24em] text-gold md:text-base">
              A European Review of Western Thought and Public Life
            </p>
            <p className="mx-auto mt-10 max-w-3xl text-2xl leading-[1.75] text-navy/90">
              Essays and editorial reflections for readers dissatisfied with the poverty of contemporary public discourse.
            </p>
          </div>
        </section>

        <div className="gold-rule mx-auto max-w-5xl" />

        <section className="px-6 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="text-3xl leading-[1.65] text-navy md:text-4xl">
              The West cannot be renewed by populations formed exclusively by immediacy, reaction, and intellectual passivity.
            </p>
            <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-navy/85">
              MINERVAE exists to cultivate judgment, historical orientation, and institutional seriousness in an age of demographic contraction, administrative fatigue, and cultural simplification.
            </p>
          </div>
        </section>

        <section className="bg-navy px-6 py-24 text-ivory">
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

        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-monument text-4xl tracking-[0.18em] text-navy">
              CURRENT ESSAY
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-8 text-navy/75">
              The public archive will grow through the review’s Substack publications. For now, the first essay stands as the opening text of MINERVAE.
            </p>
            <div className="mt-12">
              <EssayEntry {...firstEssay} />
            </div>
            <div className="mt-12 text-center">
              <Link href="/essays" className="border border-gold px-8 py-4 font-monument text-xs uppercase tracking-[0.2em] text-navy hover:bg-navy hover:text-ivory">
                View Archive
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-24 text-center text-ivory">
          <p className="mx-auto max-w-3xl text-2xl leading-10">
            MINERVAE is currently in formation. Essays, editorial letters, and subscriber dispatches will be released through its institutional channels.
          </p>
          <Link href="https://minervaeorg.substack.com/" className="mt-10 inline-block border border-gold px-8 py-4 font-monument text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-navy">
            Subscribe for Dispatches
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
