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
              MINERVAE is an English-language European intellectual review devoted to Western thought, public life, and the intellectual preparation required by an age of institutional exhaustion.
            </p>
            <p>
              The review is conceived as an impersonal editorial institution. It does not exist as a personal brand, a news commentary page, or a political agitation vehicle. Its task is slower: to form readers capable of judgment, continuity, and seriousness.
            </p>
            <p>
              MINERVAE proceeds from the conviction that Europe and the wider West cannot be understood apart from their inheritance. That inheritance must be studied, transmitted, criticized where necessary, and defended from the erosion produced by distraction, administrative fatigue, and cultural amnesia.
            </p>
            <p>
              Its work is organized through six permanent editorial chambers: The Vigil, The Lighthouse, The Library, The Academy, The Forum, and The Theatre.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
