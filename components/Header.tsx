import Link from "next/link";

const nav = [
  ["About", "/about"],
  ["Chambers", "/chambers"],
  ["Essays", "/essays"],
  ["Subscribe", "https://minervaeorg.substack.com/"]
];

export default function Header() {
  return (
    <header className="bg-navy text-ivory border-b border-gold">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-4">
          <img
            src="/images/minervae-owl-official.png"
            alt="MINERVAE owl emblem"
            className="h-12 w-12 rounded-full object-contain"
          />
          <span className="font-monument text-2xl tracking-[0.18em]">MINERVAE</span>
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
