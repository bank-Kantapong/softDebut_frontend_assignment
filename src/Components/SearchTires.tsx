import SOne_index_search from "../Assets/SOne_index_search.png";

const SearchTires = () => {
  return (
    <div className="flex flex-col h-full border border-main">
      <div className="px-1 bg-main py-[1px]">
        <p className="text-xl text-white font-supermarket">ค้นหายาง</p>
      </div>
      <div className={`flex flex-col items-end bg-searchtires bg-black bg-no-repeat w-full h-64`}>
        <form className="flex flex-col items-center w-[66%] gap-3 py-2 ps-2 pe-4">
          <div className="flex flex-col w-full gap-1 ">
            <div className="flex flex-col gap-1">
              <div className="flex flex-col leading-none">
                <p className="text-xl text-white font-supermarket">หน้ายาง</p>
                <p className="text-xs text-white">ความกว้าง (มม.)</p>
              </div>
              <select
                id="tire-width"
                className="w-full h-6 text-xs border border-main"
              >
                <option>--เลือกหน้ายาง--</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col leading-none">
                <p className="text-xl text-white font-supermarket">ซีรี่ย์</p>
                <p className="text-xs text-white">
                  อัตราส่วนความสูงแก้มยาง (%)
                </p>
              </div>
              <select
                id="tire-width"
                className="w-full h-6 text-xs border border-main"
              >
                <option>--เลือกซีรี่ย์--</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col leading-none">
                <p className="text-xl text-white font-supermarket">กระทะล้อ</p>
                <p className="text-xs text-white">เส้นผ่าศูนย์กลาง (นิ้ว)</p>
              </div>
              <select
                id="tire-width"
                className="w-full h-6 text-xs border border-main"
              >
                <option>--เลือกกระทะล้อ--</option>
              </select>
            </div>
          </div>
          <img
            src={SOne_index_search}
            width={100}
            height={24}
            className="cursor-pointer"
            alt="search"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchTires;
