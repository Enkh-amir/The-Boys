import { Inputs, Options, ButtonW, ButtonB } from "../component";
import { CloseIcon } from "../svg";

const NewItems = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="border border-black max-w-[590px] w-full rounded-xl">
        <div className="flex justify-between items-center p-4">
          <CloseIcon />
          <p className="font-bold text-2xl">Бараа үүсгэх</p>
          <div className="w-6"></div>
        </div>
        <div className="w-full border p-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[#121316] font-normal text-sm ">Барааны нэр</p>
            <Inputs placeholder={"Барааны нэр"} />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#121316] font-normal text-sm">
              Барааны ангилал
            </p>
            <Options />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#121316] font-normal text-sm">Үнэ</p>
            <Inputs placeholder={"Үнэ"} />
          </div>
        </div>
        <div className="p-4 flex items-center justify-end">
          <div className="flex gap-4">
            <ButtonW text={"Буцах"} />
            <ButtonB text={"Үүсгэх"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItems;
