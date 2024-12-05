import SOne_index_logo from "./Assets/SOne_index_logo.png";
import { useState } from "react";
import Search from "./Components/Search";
import Language from "./Components/Language";
import { LANGUAGE, MENU_KEY } from "./constantType";
import NavigateMenu from "./Components/NavigateMenu";
import SearchTires from "./Components/SearchTires";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import SearchService from "./Components/SearchService";
import NewsAndEvents from "./Components/NewsAndEvents";
import SafetyTips from "./Components/SafetyTips";
import Footer from "./Components/Footer";

function App() {
  const [selectedLng, setSelectedLng] = useState<LANGUAGE>(LANGUAGE.TH);
  const [selectedMenu, setSelectedMenu] = useState<MENU_KEY>(
    MENU_KEY.PRODUCT_AND_SERVICE
  );

  const onChangeLanguage = (lang: LANGUAGE) => {
    setSelectedLng(lang);
  };

  const onChangeMenu = (key: MENU_KEY) => {
    setSelectedMenu(key);
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col items-center justify-between w-full bg-white md:flex-row">
        <div className="flex justify-center w-full mb-4 md:justify-start md:w-auto md:mb-0">
          <img
            src={SOne_index_logo}
            width={300}
            alt="main_logo"
            className="h-full max-w-full"
          />
        </div>
        <div className="flex flex-col items-center w-full gap-2 md:items-end md:w-auto">
          <Language
            selectedLanguage={selectedLng}
            onChangeLanguage={onChangeLanguage}
          />
          <Search />
          <div className="flex flex-wrap items-center justify-center gap-1 text-xs text-black md:justify-end">
            <a href="#" className="hover:text-main">
              About S-ONE
            </a>
            <span className="hidden md:block">|</span>
            <a href="#" className="hover:text-main">
              Job Opportunity
            </a>
            <span className="hidden md:block">|</span>
            <a href="#" className="hover:text-main">
              Contact Us
            </a>
            <span className="hidden md:block">|</span>
            <a href="#" className="hover:text-main">
              Site Map
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-10">
        <NavigateMenu selectedMenu={selectedMenu} onChangeMenu={onChangeMenu} />
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
          <div className="col-span-1 lg:w-[calc(100%-3px)]">
            <SearchTires />
          </div>
          <div className="col-span-1 lg:col-span-3 lg:ml-[-3px]">
            <Banner />
          </div>
        </div>
        <Services />
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
          <div className="col-span-1 lg:w-[calc(100%-3px)]">
            <SearchService />
          </div>
          <div className="col-span-1 lg:col-span-2 lg:ml-[-3px]">
            <NewsAndEvents />
          </div>
          <div className="col-span-1">
            <SafetyTips />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
