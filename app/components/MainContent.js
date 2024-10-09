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
    <main className="lg:pt-1 py-6 bg-black">
      <FilterHeader small={true} />

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
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
              className="w-full h-[210px] object-cover"
            />
            {/* Black gradient at the bottom of the image */}
            <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[rgba(0,0,0,0.83)] to-transparent"></div>

            {/* Title positioned at the bottom of the image */}
            <h3 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white sm:text-[16px] text-center sm:w-[110%] leading-[21px]">
              {template.title}
            </h3>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center gap-4 rounded-[20px] bg-[#121212]">
          <h4 className="text-center sm:text-[16px] text-[14px]">
            Template missing?
          </h4>
          <button className="px-4 py-2 border border-gray-700 hover:border-gray-500 text-gray-700 hover:text-gray-500 rounded-lg sm:text-[16px] text-[14px]">
            Suggest one
          </button>
        </div>
      </div>
    </main>
  );
}
