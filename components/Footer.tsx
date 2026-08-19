export default function Footer() {
  return (
    <footer className="bg-navy text-ivory border-t border-gold">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <img
          src="/images/minervae-owl-official.png"
          alt="MINERVAE owl emblem"
          className="mx-auto h-24 w-24 object-contain"
        />
        <div className="mt-8 font-monument text-3xl tracking-[0.22em]">MINERVAE</div>
        <div className="mt-4 text-sm uppercase tracking-[0.18em] text-gold">
          A European Review of Western Thought and Public Life
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-ivory/80">
          Essays on the Western inheritance and the questions confronting its future.
        </p>
        <div className="mt-10 text-sm tracking-[0.12em] text-ivory/60">
          © MINERVAE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
