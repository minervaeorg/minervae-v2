import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EssayTemplate() {
  return (
    <>
      <Header />
      <main className="px-6 py-24">
        <article className="mx-auto max-w-3xl">
          <div className="font-monument text-xs uppercase tracking-[0.22em] text-gold">THE ACADEMY</div>
          <h1 className="mt-8 text-5xl leading-tight text-navy">
            The Ruins Will Find You Standing
          </h1>
          <p className="mt-6 text-2xl leading-9 text-navy/75">
            Horace and the conduct of men in uncertain times.
          </p>
          <div className="mt-8 text-sm uppercase tracking-[0.18em] text-navy/50">
            MINERVAE · Editorial Essay · First publication
          </div>
          <div className="mt-14 space-y-8 text-2xl leading-[1.75] text-ink">
            <p>
              This template establishes the reading surface for MINERVAE essays. It should remain quiet, spacious, and text-led.
            </p>
            <p>
              The purpose of the essay page is not visual performance. It is sustained attention. Margins should be wide, typography generous, and distractions minimal.
            </p>
            <p>
              Substack remains the publication engine while this page serves as the canonical visual reference for future long-form presentation.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
