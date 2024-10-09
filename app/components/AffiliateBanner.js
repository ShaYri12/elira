import Image from "next/image";

export default function AffiliateBanner() {
  return (
    <section className="bg-[040404]">
      <div className="bg-[#002607] rounded-lg py-[30px] px-[36px] rounded-[25px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span>
              <Image
                src="/icons/affiliate.png"
                alt="affiliate"
                width={24}
                height={24}
                className="filter-custom"
              />
            </span>
            <h4 className="uppercase text-lg text-[#009719]">
              Affiliate Program
            </h4>
          </div>
          <div className="flex space-x-4">
            <button className="bg-[#026e14] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
              Start earning 💸
            </button>
            <button className="bg-transparent border border-[#026e14] hover:border-white text-[#026e14] hover:text-white font-bold py-2 px-4 rounded">
              Free course
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] pt-[24px]">
          <h3 className="text-2xl font-bold mb-2">
            Become an affiliate & earn 20% commission*
          </h3>
          <p className="text-sm text-[#425245]">
            Get a 20% commission on every paid subscription you refer,
            applicable to plan payments for the first 12 months.
          </p>
        </div>
      </div>
    </section>
  );
}
