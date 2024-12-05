import SOne_index_menu01 from "../Assets/SOne_index_menu01.png";
import { useState } from "react";
import SOne_index_menu02 from "../Assets/SOne_index_menu02.png";
import SOne_index_btfacebook from "../Assets/SOne_index_btfacebook.png";
import SOne_index_btfacebook1 from "../Assets/SOne_index_btfacebook1.png";
import SOne_index_bttwitter from "../Assets/SOne_index_bttwitter.png";
import SOne_index_bttwitter1 from "../Assets/SOne_index_bttwitter1.png";
import SOne_index_btyoutube from "../Assets/SOne_index_btyoutube.png";
import SOne_index_btyoutube1 from "../Assets/SOne_index_btyoutube1.png";
import { MENU_KEY } from "../constantType";

const MENUS = [
  {
    key: MENU_KEY.PRODUCT_AND_SERVICE,
    label: "Product & Services",
  },
  {
    key: MENU_KEY.PROMOTIONS,
    label: "Promotions",
  },
  {
    key: MENU_KEY.NEWS_AND_EVENTS,
    label: "News & Events",
  },
  {
    key: MENU_KEY.SAFETY_TIPS,
    label: "Safety Tips",
  },
  {
    key: MENU_KEY.FAQS,
    label: "FAQS",
  },
  {
    key: MENU_KEY.LOCATION,
    label: "Location",
  },
];

interface NavigateMenuType {
  selectedMenu: MENU_KEY;
  onChangeMenu: (key: MENU_KEY) => void;
}

const NavigateMenu = ({ selectedMenu, onChangeMenu }: NavigateMenuType) => {
  const [facebookImg, setFacebookImg] = useState<string>(SOne_index_btfacebook);
  const [twitterImg, setTwitterImg] = useState<string>(SOne_index_bttwitter);
  const [youtubeImg, setYoutubeImg] = useState<string>(SOne_index_btyoutube);

  return (
    <div className="flex flex-col items-center justify-between w-full h-auto px-2 py-2 rounded-md md:flex-row bg-dark">
      <div className="flex flex-wrap items-center gap-4 md:flex-nowrap md:gap-8">
        {MENUS.map((menuItem: { key: MENU_KEY; label: string }) => (
          <div
            className="flex items-center gap-2 cursor-pointer"
            key={menuItem.key}
            onClick={() => onChangeMenu(menuItem.key)}
          >
            <img
              src={
                selectedMenu === menuItem.key
                  ? SOne_index_menu02
                  : SOne_index_menu01
              }
              width={20}
              height={20}
              className={
                selectedMenu === menuItem.key
                  ? "cursor-pointer"
                  : "grayscale hover:grayscale-0 cursor-pointer"
              }
              alt="menu"
            />
            <p
              className={
                selectedMenu === menuItem.key
                  ? "text-xs text-main"
                  : "text-xs hover:text-main text-white"
              }
            >
              {menuItem.label}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 mt-4 md:mt-0">
        <img
          src={facebookImg}
          width={20}
          height={20}
          className="cursor-pointer"
          onMouseEnter={() => setFacebookImg(SOne_index_btfacebook1)}
          onMouseLeave={() => setFacebookImg(SOne_index_btfacebook)}
          alt="facebook"
        />
        <img
          src={twitterImg}
          width={20}
          height={20}
          className="cursor-pointer"
          onMouseEnter={() => setTwitterImg(SOne_index_bttwitter1)}
          onMouseLeave={() => setTwitterImg(SOne_index_bttwitter)}
          alt="twitter"
        />
        <img
          src={youtubeImg}
          width={20}
          height={20}
          className="cursor-pointer"
          onMouseEnter={() => setYoutubeImg(SOne_index_btyoutube1)}
          onMouseLeave={() => setYoutubeImg(SOne_index_btyoutube)}
          alt="youtube"
        />
      </div>
    </div>
  );
};

export default NavigateMenu;
