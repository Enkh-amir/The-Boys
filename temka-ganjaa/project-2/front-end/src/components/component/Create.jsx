import { CloseIcon } from "../svg/CloseIcon";

export const Create = () => {
  return (
    <div className="w-[587px] z-[1] border border-gray-300 bg-white rounded-2xl absolute">
      <div className="px-6 py-4 border-b border-[#E0E0E0] flex justify-between">
        <button className="p-[9px]">
          <CloseIcon />
        </button>
        <p className="text-2xl font-bold text-[#161616]">Бараа үүсгэх</p>
        <div className="w-8 h-8"></div>
      </div>
      <div className="p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-normal leading-5 text-[#121316]">
            Барааны нэр
          </p>
          <input
            type="text"
            className="input rounded-lg p-3 bg-[#F4F4F4] text-base font-medium leading-5 text-[#8B8E95] border-none"
            placeholder="T-Shirt"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-normal leading-5 text-[#121316]">
            Барааны ангилал
          </p>
          <select
            name=""
            id=""
            className="select bg-[#F4F4F4] rounded-lg p-3 border-none text-base font-medium leading-5 text-[#8B8E95]"
          >
            <option value="" disabled selected>
              Ангилал
            </option>
            <option value="Цамц">Цамц</option>
            <option value="Өмд">Өмд</option>
            <option value="Гадуур хувцас">Гадуур хувцас</option>
            <option value="Гутал">Гутал</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-normal leading-5 text-[#121316]">Үнэ</p>
          <input
            type="number"
            className="input rounded-lg p-3 bg-[#F4F4F4] text-base font-medium leading-5 text-[#8B8E95] border-none"
            placeholder="50,000"
          />
        </div>
      </div>
      <div className="p-6 border-t border-[#E0E0E0] flex gap-4 justify-end">
        <button className="btn bg-white px-2 py-[10px] rounded-[4px] border-none shadow-none text-base text-[#3F4145] font-normal leading-5">
          Буцах
        </button>
        <button className="btn bg-[#393939] text-[#FFFFFF]">Үүсгэх</button>
      </div>
    </div>
  );
};
