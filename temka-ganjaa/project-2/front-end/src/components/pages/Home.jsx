import { Cards } from "../component/Cards";
import { Create } from "../component/Create";

export const HomePage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <Create />
      <div className="max-w-[1546px] w-full h-auto flex flex-wrap gap-[30px]">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};
