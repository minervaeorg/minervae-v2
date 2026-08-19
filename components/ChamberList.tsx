const chambers = [
  {
    name: "THE VIGIL",
    image: "/images/chamber-vigil.jpg",
    text: "The diagnosis of the West’s present condition, examining the demographic, institutional, educational, and cultural forces shaping its decline and transformation."
  },
  {
    name: "THE LIGHTHOUSE",
    image: "/images/chamber-lighthouse.jpg",
    text: "Strategic and prescriptive essays concerned with the direction of the West’s renewal."
  },
  {
    name: "THE LIBRARY",
    image: "/images/chamber-library.jpg",
    text: "The recovery of the Western inheritance through its authors, texts and traditions."
  },
  {
    name: "THE ACADEMY",
    image: "/images/chamber-academy.jpg",
    text: "Intellectual formation through reading, self-education, disciplined inquiry, and the cultivation of serious thought."
  },
  {
    name: "THE FORUM",
    image: "/images/chamber-forum.jpg",
    text: "The examination of institutions and public order: law, government, civic life, public systems, and the structures through which societies govern themselves."
  },
  {
    name: "THE THEATRE",
    image: "/images/chamber-theatre.jpg",
    text: "Culture, arts, letters and the imaginative forms through which we understand and represent ourselves."
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
