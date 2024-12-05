import SOne_index_arrowup from "../Assets/SOne_index_arrowup.png";
import SOne_index_arrowdown from "../Assets/SOne_index_arrowdown.png";
import SOne_index_pic01 from "../Assets/SOne_index_pic01.jpg";
import SOne_index_pic02 from "../Assets/SOne_index_pic02.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col items-end justify-center w-full bg-no-repeat bg-[#000000] bg-banner h-300">
      <div className="flex flex-col items-center gap-2 pe-3">
        <img
          src={SOne_index_arrowup}
          alt="arrow_up"
          width={28}
          className="h-4 cursor-pointer"
        />
        <img src={SOne_index_pic01} alt="pic1" className="border border-main" />
        <img
          src={SOne_index_pic02}
          alt="pic2"
          className="border border-white"
        />
        <img
          src={SOne_index_pic02}
          alt="pic3"
          className="border border-white"
        />
        <img
          src={SOne_index_arrowdown}
          alt="arrow_down"
          width={28}
          className="h-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Banner;
