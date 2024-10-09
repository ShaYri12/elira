import Image from "next/image";

export default function AffiliateBanner() {
  return (
    <section className="bg-[040404] lg:py-[10px] py-[20px]">
      <div className="bg-[#002607] rounded-lg py-[30px] px-[36px] rounded-[25px]">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex gap-3 items-center lg:justify-start justify-center lg:w-auto w-full">
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
          <div className="lg:flex hidden gap-5">
            <button className="bg-[#026e14] hover:bg-green-700 text-white transition py-1 px-4 rounded-lg">
              Start earning 💸
            </button>
            <button className="bg-transparent border border-[#026e14] transition hover:border-white text-[#026e14] hover:text-white font-bold py-2 px-3 rounded-lg">
              Free course
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] pt-[24px]">
          <h3 className="md:text-[33px] text-[20px] lg:text-left text-center mb-2">
            Become an affiliate & earn 20% commission*
          </h3>
          <div className="lg:hidden flex flex-wrap items-center justify-center gap-5">
            <button className="bg-[#026e14] hover:bg-green-700 text-white transition py-2 px-4 rounded-lg">
              Start earning 💸
            </button>
            <button className="bg-transparent border border-[#026e14] transition hover:border-white text-[#026e14] hover:text-white font-bold py-2 px-3 rounded-lg">
              Free course
            </button>
          </div>
          <p className="text-sm text-gray-400 lg:max-w-[96%] lg:text-left text-center">
            Get a 20% commission on every paid subscription you refer,
            applicable to plan payments for the first 12 months. Commission
            applies only to subscription fees and does not include any
            additional credits or marketplace purchases. Commissions are paid
            once the referred user completes a successful transaction. Terms and
            conditions apply.*
          </p>
        </div>
      </div>
    </section>
  );
}
