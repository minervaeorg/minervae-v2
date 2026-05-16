const chambers = [
  {
    name: "THE VIGIL",
    image: "/images/chamber-vigil.png",
    text: "Diagnosis of Europe’s present condition: demographic decline, institutional fatigue, educational weakening, and cultural loss of confidence."
  },
  {
    name: "THE LIGHTHOUSE",
    image: "/images/chamber-lighthouse.png",
    text: "Strategic readings of the present: contemporary interventions that orient judgment without surrendering to reaction."
  },
  {
    name: "THE LIBRARY",
    image: "/images/chamber-library.png",
    text: "Recovery of the European and wider Western inheritance: authors, texts, traditions, and neglected continuities."
  },
  {
    name: "THE ACADEMY",
    image: "/images/chamber-academy.png",
    text: "Intellectual formation: conceptual discipline, methods of inquiry, and the habits required for serious judgment."
  },
  {
    name: "THE FORUM",
    image: "/images/chamber-forum.png",
    text: "Institutional and civic questions: public order, political responsibility, sovereignty, law, and competent government."
  },
  {
    name: "THE THEATRE",
    image: "/images/chamber-theatre.png",
    text: "Arts, letters, symbolism, and the imaginative forms through which civilizations recognize and preserve themselves."
  }
];

export default function ChamberList() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {chambers.map((chamber) => (
        <div key={chamber.name} className="border border-gold/70 p-8 text-center">
          <div className="mx-auto mb-7 flex h-44 w-44 items-center justify-center">
            <img
              src={chamber.image}
              alt={`${chamber.name} crest`}
              className="h-40 w-40 object-contain"
            />
          </div>
          <h3 className="font-monument text-xl tracking-[0.16em] text-ivory">
            {chamber.name}
          </h3>
          <p className="mt-5 text-lg leading-8 text-ivory/78">
            {chamber.text}
          </p>
        </div>
      ))}
    </div>
  );
}
