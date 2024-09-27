import { DeleteIcon, EditIcon } from "../svg";


export const Cards = () => {
  return (
    <div className="max-w-[320px] border p-4 rounded-xl flex flex-col gap-1">
      <div className="flex justify-between">
        <p className="font-bold text-2xl not-italic"> Бараа</p>
        <div className="flex gap-1 items-center">
          <DeleteIcon />
          <EditIcon />
        </div>
      </div>
      <div className="flex gap-1 items-center">
        Барааны нэр :
        <p className="font-semibold not-italic text-base">Цагаан цамц </p>
      </div>
      <div className="flex gap-1 items-center">
        Барааны ангилал :
        <p className="font-semibold not-italic text-base">цамц </p>{" "}
      </div>
      <div className="flex gap-1 items-center">
        Үнэ : <p className="font-semibold not-italic text-base"> 50.000 </p>
      </div>
    </div>
  );
};
