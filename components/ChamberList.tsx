const chambers = [
  {
    name: "THE VIGIL",
    image: "/images/chamber-vigil.jpg",
    text: "Diagnosis of Europe’s present condition: demographic decline, institutional fatigue, educational weakening, and cultural loss of confidence."
  },
  {
    name: "THE LIGHTHOUSE",
    image: "/images/chamber-lighthouse.jpg",
    text: "Strategic readings of the present: contemporary interventions that orient judgment without surrendering to reaction."
  },
  {
    name: "THE LIBRARY",
    image: "/images/chamber-library.jpg",
    text: "Recovery of the European and wider Western inheritance: authors, texts, traditions, and neglected continuities."
  },
  {
    name: "THE ACADEMY",
    image: "/images/chamber-academy.jpg",
    text: "Intellectual formation: conceptual discipline, methods of inquiry, and the habits required for serious judgment."
  },
  {
    name: "THE FORUM",
    image: "/images/chamber-forum.jpg",
    text: "Institutional and civic questions: public order, political responsibility, sovereignty, law, and competent government."
  },
  {
    name: "THE THEATRE",
    image: "/images/chamber-theatre.jpg",
    text: "Arts, letters, symbolism, and the imaginative forms through which civilizations recognize and preserve themselves."
  }
];

export default function ChamberList() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {chambers.map((chamber) => (
        <div key={chamber.name} className="border border-gold/70 p-8 text-center">
          <img
            src={chamber.image}
            alt={`${chamber.name} crest`}
            className="mx-auto mb-7 h-32 w-32 rounded-full object-cover"
          />
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
