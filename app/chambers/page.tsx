import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChamberList from "@/components/ChamberList";

export default function Chambers() {
  return (
    <>
      <Header />
      <main className="px-6 py-24">
        <section className="mx-auto max-w-7xl">
          <h1 className="text-center font-monument text-5xl tracking-[0.16em] text-navy">
            THE EDITORIAL CHAMBERS
          </h1>
          <p className="mx-auto mt-10 max-w-3xl text-center text-2xl leading-10 text-navy/85">
            MINERVAE is organized through six permanent departments, each dedicated to a distinct field of civilizational inquiry.
          </p>
          <div className="mt-20">
            <ChamberList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
