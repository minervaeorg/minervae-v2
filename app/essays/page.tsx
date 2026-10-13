"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EssayEntry from "@/components/EssayEntry";

const essays = [
  {
    chamber: "THE THEATRE",
    title: "I Ain’t Reading All That",
    subtitle: "I’m happy for u or sorry that happened",
    date: "13 October 2026",
    href: "https://minervaeorg.substack.com/p/i-aint-reading-all-that"
  },
  {
    chamber: "THE ACADEMY",
    title: "In Search of Caesar",
    subtitle: "On the Formation of Elites and the Exercise of Responsibility",
    date: "23 September 2026",
    href: "https://minervaeorg.substack.com/p/in-search-of-caesar"
  },
  {
    chamber: "THE LIGHTHOUSE",
    title: "A World They Never Knew",
    subtitle: "Why a Generation Raised After the Borders Opened Wants to Close Them",
    date: "17 September 2026",
    href: "https://minervaeorg.substack.com/p/a-world-they-never-knew"
  },
  {
    chamber: "THE FORUM",
    title: "There Is No Elephant in the Room",
    subtitle: "How Moderation Drives Political Grievances to the Extremes",
    date: "31 August 2026",
    href: "https://minervaeorg.substack.com/p/there-is-no-elephant-in-the-room"
  },
  {
    chamber: "THE VIGIL",
    title: "Why The Right Keeps Losing, Even When It Wins",
    subtitle: "What Pyrrhus of Epirus can teach us about modern politics.",
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

const chamberFilters = [
  { name: "THE VIGIL", slug: "the-vigil" },
  { name: "THE LIBRARY", slug: "the-library" },
  { name: "THE ACADEMY", slug: "the-academy" },
  { name: "THE FORUM", slug: "the-forum" },
  { name: "THE LIGHTHOUSE", slug: "the-lighthouse" },
  { name: "THE THEATRE", slug: "the-theatre" }
];

export default function Essays() {
  const [selectedChamber, setSelectedChamber] = useState<string | null>(null);

  useEffect(() => {
    const syncChamber = () => {
      const requested = new URLSearchParams(window.location.search).get("chamber");
      setSelectedChamber(chamberFilters.some((item) => item.slug === requested) ? requested : null);
    };
    syncChamber();
    window.addEventListener("popstate", syncChamber);
    return () => window.removeEventListener("popstate", syncChamber);
  }, []);

  const activeChamber = chamberFilters.find((item) => item.slug === selectedChamber);
  const visibleEssays = activeChamber
    ? essays.filter((essay) => essay.chamber === activeChamber.name)
    : essays;

  return (
    <>
      <Header />
      <main className="px-6 py-24">
        <section className="mx-auto max-w-5xl">
          <h1 className="text-center font-monument text-5xl tracking-[0.16em] text-navy">
            {activeChamber ? activeChamber.name : "ESSAYS"}
          </h1>
          <p className="mx-auto mt-10 max-w-3xl text-center text-2xl leading-10 text-navy/80">
            {activeChamber
              ? `Essays published under ${activeChamber.name}.`
              : "The public archive of MINERVAE. Essays are published through Substack and indexed here as the permanent record of the review grows."}
          </p>
          <nav aria-label="Filter essays by chamber" className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 text-center">
            <Link href="/essays" onClick={() => setSelectedChamber(null)} aria-current={!activeChamber ? "page" : undefined} className={`text-sm tracking-[0.1em] hover:underline ${!activeChamber ? "text-navy underline" : "text-navy/65"}`}>
              ALL ESSAYS
            </Link>
            {chamberFilters.map((item) => (
              <Link key={item.slug} href={`/essays?chamber=${item.slug}`} onClick={() => setSelectedChamber(item.slug)} aria-current={selectedChamber === item.slug ? "page" : undefined} className={`text-sm tracking-[0.1em] hover:underline ${selectedChamber === item.slug ? "text-navy underline" : "text-navy/65"}`}>
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-16 space-y-10">
            {visibleEssays.map((essay) => (
              <EssayEntry key={essay.title} {...essay} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
