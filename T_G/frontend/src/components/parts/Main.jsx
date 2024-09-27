import { Cards } from "../component";
import { AddIcon } from "../svg";
import EditItems from "./EditItems";
import NewItems from "./NewItems";

const Main = () => {
  return (
    <main>
      <main className="">
        <div className=" container m-auto">
          <div className="px-20 py-5">
            <div className="flex flex-col gap-5">
              <div className="flex justify-end items-center">
                <button className=" flex gap-1 bg-[#393939] px-4 py-2 rounded-lg">
                  <AddIcon />
                  <p className="font-normal text-base text-[#fff]">
                    Шинэ Бараа
                  </p>
                </button>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </div>
            </div>
            <NewItems />
            <EditItems />
          </div>
        </div>
      </main>
    </main>
  );
};
export default Main;
