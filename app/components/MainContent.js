import Image from "next/image";

const templates = [
  {
    id: 1,
    title: "Would You Rather",
    image: "/template.png",
  },
  {
    id: 2,
    title: "Trivia Quiz",
    image: "/template.png",
  },
  {
    id: 3,
    title: "Motivational Speech",
    image: "/template.png",
  },
  {
    id: 4,
    title: "Spin The Wheel",
    image: "/template.png",
  },
  {
    id: 5,
    title: "Reddit Stories",
    image: "/template.png",
  },
  {
    id: 6,
    title: "Texting Stories",
    image: "/template.png",
  },
  {
    id: 7,
    title: "Random Locations",
    image: "/template.png",
  },
];

export default function MainContent() {
  return (
    <main className=" py-6 bg-black">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className="relative group rounded-lg overflow-hidden"
          >
            <Image
              src={template.image}
              alt={template.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold">{template.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
