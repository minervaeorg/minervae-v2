import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="px-6 py-24">
        <article className="mx-auto max-w-3xl">
          <h1 className="font-monument text-5xl tracking-[0.16em] text-navy">ABOUT MINERVAE</h1>
          <div className="mt-12 space-y-8 text-2xl leading-[1.75] text-navy/90">
            <p>
              MINERVAE is an English-language European intellectual review dedicated to the restoration of intellectual seriousness, institutional competence, and civilizational confidence in Western public life.
            </p>
            <p>
              Published digitally and conceived as a permanent editorial archive, the review exists to provide a stable home for long-form reflection beyond the rhythms of contemporary commentary.
            </p>
            <p>
              The review favors continuity over novelty, depth over visibility, and formation over agitation. It is designed as a cumulative body of thought intended to remain legible over time.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
