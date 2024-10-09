import Image from "next/image";
import FilterHeader from "./FilterHeader";

const templates = [
  { id: 1, title: "Would You Rather", image: "/template-1.jpeg" },
  { id: 2, title: "Trivia Quiz", image: "/template-2.jpeg" },
  { id: 3, title: "Motivational Speech", image: "/template-3.jpeg" },
  { id: 4, title: "Spin The Wheel", image: "/template-4.jpeg" },
  { id: 5, title: "Reddit Stories", image: "/template-3.jpeg" },
  { id: 6, title: "Texting Stories", image: "/template-4.jpeg" },
  { id: 7, title: "Random Locations", image: "/template-1.jpeg" },
];

export default function MainContent() {
  return (
    <main className="py-6 bg-black">
      <FilterHeader small={true} />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className="relative rounded-[20px] overflow-hidden"
          >
            <Image
              src={template.image}
              alt={template.title}
              width={300}
              height={200}
              className="w-full h-[230px] object-cover"
            />
            {/* Black gradient at the bottom of the image */}
            <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-black to-transparent"></div>

            {/* Title positioned at the bottom of the image */}
            <h3 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white sm:text-lg font-semibold w-max">
              {template.title}
            </h3>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center gap-4 rounded-[20px] bg-[#121212]">
          <h4 className="text-center">Template missing?</h4>
          <button className="px-4 py-2 border border-gray-700 hover:border-gray-500 text-gray-700 hover:text-gray-500 rounded-lg">
            Suggest one
          </button>
        </div>
      </div>
    </main>
  );
}
