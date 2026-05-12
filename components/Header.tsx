import Link from "next/link";

const nav = [
  ["About", "/about"],
  ["Chambers", "/chambers"],
  ["Essays", "/essay-template"],
  ["Subscribe", "https://minervae.substack.com"]
];

export default function Header() {
  return (
    <header className="bg-navy text-ivory border-b border-gold">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-monument text-2xl tracking-[0.18em]">
          MINERVAE
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-xs uppercase tracking-[0.2em] text-ivory/90 hover:text-gold"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
