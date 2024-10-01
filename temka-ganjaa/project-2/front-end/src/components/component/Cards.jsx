import { EditIcon } from "../svg/EditIcon";
import { TrashIcon } from "../svg/TrashIcon";

export const Cards = ({ product }) => {
  const [ productId, productName, catagory, price] = product;
  return (
    <div className="w-[364px] h-[140px] rounded-2xl bg-white p-6 flex flex-col gap-4 border border-gray-300">
      <div className="flex items-center justify-between">
        <div className="text-sm font-normal text-[#121316] leading-5">
          {productName}
        </div>
        <div className="flex gap-2">
          <button>
            <TrashIcon />
          </button>
          <button>
            <EditIcon product={product} />
          </button>
        </div>
      </div>
      <div className="text-sm font-normal text-[#121316] leading-5">
        {catagory}
      </div>
      <div className="text-sm font-normal text-[#121316] leading-5">
        {price}
      </div>
    </div>
  );
};
