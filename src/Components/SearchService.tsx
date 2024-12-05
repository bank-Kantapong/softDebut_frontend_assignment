import SOne_index_search from "../Assets/SOne_index_search.png";

const SearchService = () => {
  return (
    <div className="flex flex-col h-full border border-main">
      <div className="px-1 bg-main py-[1px]">
        <p className="text-xl text-white font-supermarket">
          ค้นหาศูนย์บริการใกล้บ้านคุณ
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full p-2 mt-[1px] bg-black">
        <div className="flex items-center w-full gap-1 ps-2 pe-4">
          <div className="w-[34%]">
            <p className="flex justify-end text-xl text-white font-supermarket">
              จังหวัด
            </p>
          </div>
          <div className="w-[66%]">
            <select
              id="tire-width"
              className="w-full h-6 text-xs border border-main"
            >
              <option>--เลือกจังหวัด--</option>
            </select>
          </div>
        </div>
        <div className="flex items-center w-full gap-1 ps-2 pe-4">
          <div className="w-[34%]">
            <p className="flex justify-end text-xl text-white font-supermarket">
              เขต/อำเภอ
            </p>
          </div>
          <div className="w-[66%]">
            <select
              id="tire-width"
              className="w-full h-6 text-xs border border-main"
            >
              <option>--เลือกเขต/อำเภอ--</option>
            </select>
          </div>
        </div>
        <div className="flex items-center w-full gap-1 ps-2 pe-4">
          <div className="w-[34%]">
            <p className="flex justify-end text-xl text-white font-supermarket">
              ถนน
            </p>
          </div>
          <div className="w-[66%]">
            <select
              id="tire-width"
              className="w-full h-6 text-xs border border-main"
            >
              <option>--เลือกถนน--</option>
            </select>
          </div>
        </div>
        <p className="py-2 text-xs text-main">
          หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง
        </p>
        <div className="flex justify-end w-[66%]">
          <img
            src={SOne_index_search}
            width={100}
            height={24}
            className="cursor-pointer"
            alt="search"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchService;
