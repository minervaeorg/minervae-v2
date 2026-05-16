import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EssayEntry from "@/components/EssayEntry";

const essays = [
  {
    chamber: "THE ACADEMY",
    title: "The Ruins Will Find You Standing",
    subtitle: "Horace and the conduct of men in uncertain times.",
    date: "First publication",
    href: "https://minervaeorg.substack.com/"
  }
];

export default function Essays() {
  return (
    <>
      <Header />
      <main className="px-6 py-24">
        <section className="mx-auto max-w-5xl">
          <h1 className="text-center font-monument text-5xl tracking-[0.16em] text-navy">
            ESSAYS
          </h1>
          <p className="mx-auto mt-10 max-w-3xl text-center text-2xl leading-10 text-navy/80">
            The public archive of MINERVAE. Essays are published through Substack and indexed here as the permanent record of the review grows.
          </p>
          <div className="mt-16 space-y-10">
            {essays.map((essay) => (
              <EssayEntry key={essay.title} {...essay} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
