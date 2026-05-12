const chambers = [
  {
    name: "THE VIGIL",
    text: "Observations on demographic, institutional, educational, and cultural decline."
  },
  {
    name: "THE LIGHTHOUSE",
    text: "Contemporary interventions, strategic readings, and orienting judgments for the present moment."
  },
  {
    name: "THE LIBRARY",
    text: "Recoveries from the inheritance of Europe and the wider West."
  },
  {
    name: "THE ACADEMY",
    text: "Essays of intellectual formation, conceptual discipline, and methods of serious inquiry."
  },
  {
    name: "THE FORUM",
    text: "Institutional questions, public reasoning, and debates concerning political and civic order."
  },
  {
    name: "THE THEATRE",
    text: "Arts, letters, symbolism, and the imaginative forms through which civilizations preserve self-recognition."
  }
];

export default function ChamberList() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {chambers.map((chamber) => (
        <div key={chamber.name} className="border border-gold/70 p-8">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold font-monument text-gold">
            ✦
          </div>
          <h3 className="text-center font-monument text-xl tracking-[0.16em] text-navy">
            {chamber.name}
          </h3>
          <p className="mt-5 text-center text-lg leading-8 text-navy/85">
            {chamber.text}
          </p>
        </div>
      ))}
    </div>
  );
}
