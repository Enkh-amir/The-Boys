import { EditIcon } from "../svg/EditIcon";
import { TrashIcon } from "../svg/TrashIcon";

export const Cards = () => {
  return (
    <div className="w-[364px] h-[140px] rounded-2xl bg-white p-6 flex flex-col gap-4 border border-gray-300">
      <div className="flex items-center justify-between">
        <div className="text-sm font-normal text-[#121316] leading-5">
          Барааны нэр : Цагаан цамц
        </div>
        <div className="flex gap-2">
          <button>
            <TrashIcon />
          </button>
          <button>
            <EditIcon />
          </button>
        </div>
      </div>
      <div className="text-sm font-normal text-[#121316] leading-5">
        Барааны ангилал : Цамц
      </div>
      <div className="text-sm font-normal text-[#121316] leading-5">
        Үнэ : 50,000
      </div>
    </div>
  );
};
