import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Banner from "./components/AffiliateBanner";

export default function TemplateChooser() {
  return (
    <div className="flex min-h-screen bg-[#040404] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col md:px-[20px] px-[12px] bg-[#040404] pb-[25px]">
        <Header />
        <div className="flex flex-col">
          <MainContent />
          <Banner />
        </div>
      </div>
    </div>
  );
}
