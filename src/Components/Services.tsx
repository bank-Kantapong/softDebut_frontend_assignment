import { useState } from "react";
import SOne_index_bt_battery from "../Assets/SOne_index_bt-battery.jpg";
import SOne_index_bt_battery1 from "../Assets/SOne_index_bt-battery1.jpg";
import SOne_index_bt_break from "../Assets/SOne_index_bt-break.jpg";
import SOne_index_bt_break1 from "../Assets/SOne_index_bt-break1.jpg";
import SOne_index_bt_tire from "../Assets/SOne_index_bt-tire.jpg";
import SOne_index_bt_tire1 from "../Assets/SOne_index_bt-tire1.jpg";
import SOne_index_bt_chokeup from "../Assets/SOne_index_bt-chokeup.jpg";
import SOne_index_bt_chokeup1 from "../Assets/SOne_index_bt-chokeup1.jpg";
import SOne_index_bt_oil from "../Assets/SOne_index_bt-oil.jpg";
import SOne_index_bt_oil1 from "../Assets/SOne_index_bt-oil1.jpg";
import SOne_index_bt_guarantee from "../Assets/SOne_index_bt-guarantee.jpg";
import SOne_index_bt_guarantee1 from "../Assets/SOne_index_bt-guarantee1.jpg";

const Services = () => {
  const [batteryImg, setBatteryImg] = useState<string>(SOne_index_bt_battery);
  const [breakImg, setBreakImg] = useState<string>(SOne_index_bt_break);
  const [tireImg, setTireImg] = useState<string>(SOne_index_bt_tire);
  const [chokeupImg, setChokeupImg] = useState<string>(SOne_index_bt_chokeup);
  const [oilImg, setOilImg] = useState<string>(SOne_index_bt_oil);
  const [guaranteeImg, setGuaranteeImg] = useState<string>(
    SOne_index_bt_guarantee
  );

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-6">
      <img
        src={tireImg}
        width={190}
        height={50}
        className="cursor-pointer"
        onMouseEnter={() => setTireImg(SOne_index_bt_tire1)}
        onMouseLeave={() => setTireImg(SOne_index_bt_tire)}
        alt="tire"
      />
      <img
        src={breakImg}
        width={190}
        height={50}
        className="cursor-pointer"
        onMouseEnter={() => setBreakImg(SOne_index_bt_break1)}
        onMouseLeave={() => setBreakImg(SOne_index_bt_break)}
        alt="break"
      />
      <img
        src={batteryImg}
        width={190}
        height={50}
        className="cursor-pointer"
        onMouseEnter={() => setBatteryImg(SOne_index_bt_battery1)}
        onMouseLeave={() => setBatteryImg(SOne_index_bt_battery)}
        alt="battery"
      />
      <img
        src={chokeupImg}
        width={190}
        height={50}
        className="cursor-pointer"
        onMouseEnter={() => setChokeupImg(SOne_index_bt_chokeup1)}
        onMouseLeave={() => setChokeupImg(SOne_index_bt_chokeup)}
        alt="chokeup"
      />
      <img
        src={oilImg}
        width={190}
        height={50}
        className="cursor-pointer"
        onMouseEnter={() => setOilImg(SOne_index_bt_oil1)}
        onMouseLeave={() => setOilImg(SOne_index_bt_oil)}
        alt="oil"
      />
      <img
        src={guaranteeImg}
        width={190}
        height={50}
        className="cursor-pointer"
        onMouseEnter={() => setGuaranteeImg(SOne_index_bt_guarantee1)}
        onMouseLeave={() => setGuaranteeImg(SOne_index_bt_guarantee)}
        alt="guarantee"
      />
    </div>
  );
};

export default Services;
