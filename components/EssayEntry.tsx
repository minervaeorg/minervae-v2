type EssayEntryProps = {
  chamber: string;
  title: string;
  subtitle: string;
  date: string;
  href: string;
};

export default function EssayEntry({ chamber, title, subtitle, date, href }: EssayEntryProps) {
  return (
    <article className="border border-gold/70 p-8 md:grid md:grid-cols-[180px_1fr] md:gap-10">
      <div className="font-monument text-xs uppercase tracking-[0.22em] text-gold">
        {chamber}
        <div className="mt-4 font-reading text-sm normal-case tracking-normal text-navy/55">
          {date}
        </div>
      </div>
      <div>
        <h2 className="text-4xl leading-tight text-navy">{title}</h2>
        <p className="mt-5 text-xl leading-8 text-navy/75">{subtitle}</p>
        <a
          href={href}
          className="mt-8 inline-block border border-gold px-7 py-3 font-monument text-xs uppercase tracking-[0.2em] text-navy hover:bg-navy hover:text-ivory"
        >
          Read on Substack
        </a>
      </div>
    </article>
  );
}
