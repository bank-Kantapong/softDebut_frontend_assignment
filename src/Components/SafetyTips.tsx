import SOne_index_tips1 from "../Assets/SOne_index_tips1.png";
import SOne_index_pic66 from "../Assets/SOne_index_pic66.png";
import SOne_index_pic99 from "../Assets/SOne_index_pic99.png";
import SOne_index_btgo from "../Assets/SOne_index_btgo.jpg";
import SOne_index_call from "../Assets/SOne_index_call.png";

const SafetyTips = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-end w-full">
        <img src={SOne_index_tips1} alt="tips" width={142} className="h-32" />
        <div className="flex flex-col w-4/5 bg-black h-[120px] border border-main border-l-0 px-2">
          <p className="text-xl text-center text-main font-supermarket">
            Safety Tips
          </p>
          <img src={SOne_index_pic66} alt="pic66" width={13} className="h-2" />
          <p className="text-xs text-center text-white">
            ควรเติมน้ำมันตอนเช้า
            <br />
            ขณะที่อุณหภูมิบนพื้น
            <br />
            ดินยังเย็นอยู่
          </p>
          <div className="flex justify-end">
            <img src={SOne_index_pic99} alt="pic99" width={13} className="h-2" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 pb-2 border-b border-dashed border-main">
        <p className="text-lg text-black text-nowrap font-supermarket">สมัครรับข่าวสาร</p>
        <div className="flex items-center w-64 h-6 overflow-hidden">
          <input
            type="text"
            placeholder="กรุณาใส่อีเมล์..."
            className="w-full h-6 border border-main placeholder:text-sm placeholder:px-1"
          />
          <button className="h-6 bg-black border border-main">
            <img src={SOne_index_btgo} alt="search" width={25} height={25} />
          </button>
        </div>
      </div>
      <img src={SOne_index_call} alt="call" className="w-full h-1/6" />
    </div>
  );
};

export default SafetyTips;
