import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EssayEntry from "@/components/EssayEntry";

const essays = [
  {
    chamber: "THE VIGIL",
    title: "Why The Right Keeps Losing, Even When It Wins",
    subtitle: "What Pyrrhus of Epirus can teach us about modern politics",
    date: "12 August 2026",
    href: "https://minervaeorg.substack.com/p/why-the-right-keeps-losing-even-when"
  },
  {
    chamber: "THE THEATRE",
    title: "The Ship of Odysseus",
    subtitle: "How much can a story lose before it becomes anew?",
    date: "19 July 2026",
    href: "https://minervaeorg.substack.com/p/the-ship-of-odysseus"
  },
  {
    chamber: "THE LIBRARY",
    title: "Lives Worth Knowing",
    subtitle: '"For it is not Histories that I am writing, but Lives"',
    date: "13 July 2026",
    href: "https://minervaeorg.substack.com/p/lives-worth-knowing"
  },
  {
    chamber: "THE THEATRE",
    title: "The Stories We Tell",
    subtitle: "O Muses, O high genius, give me help",
    date: "29 June 2026",
    href: "https://minervaeorg.substack.com/p/the-stories-we-tell"
  },
  {
    chamber: "THE LIBRARY",
    title: "The Last Conversation Before Dawn",
    subtitle: "On Reading Plato's Crito",
    date: "12 June 2026",
    href: "https://minervaeorg.substack.com/p/the-last-conversation-before-dawn"
  },
  {
    chamber: "THE FORUM",
    title: "The Digital Caesar",
    subtitle: "All Networks lead to Rome",
    date: "3 June 2026",
    href: "https://minervaeorg.substack.com/p/the-digital-caesar"
  },
  {
    chamber: "THE LIGHTHOUSE",
    title: "Politics at the Speed of Now",
    subtitle: "The New Rhythm of Power",
    date: "26 May 2026",
    href: "https://minervaeorg.substack.com/p/politics-at-the-speed-of-now"
  },
  {
    chamber: "THE VIGIL",
    title: "The Age of Maintenance",
    subtitle: "On aging societies and the politics of preservation",
    date: "19 May 2026",
    href: "https://minervaeorg.substack.com/p/the-age-of-maintenance"
  },
  {
    chamber: "THE LIBRARY",
    title: "The Ruins Will Find You Standing",
    subtitle: "Horace and the Conduct of Men in Uncertain Times",
    date: "12 May 2026",
    href: "https://minervaeorg.substack.com/p/the-ruins-will-find-you-standing"
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
