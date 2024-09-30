"use client";

import { Inputs, Options } from "../component";

import { Cards } from "../component";

const Main = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const dataBase = {
      tags: event.target.tags.value,
      price: event.target.price.value,
      value: event.target.value.value,
    };

    console.log(dataBase);
  };
  return (
    <main>
      <main className="">
        <div className="relative container m-auto">
          <div className="px-20 py-5">
            <div className="flex flex-col gap-5">
              <div className="flex justify-end items-center">
                <button
                  className="flex gap-1 bg-[#393939] hover:bg-black duration-400 px-4 py-2 rounded-lg"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  <p className="font-normal text-base text-[#fff]">
                    Шинэ Бараа
                  </p>
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <form
                      onSubmit={handleOnSubmit}
                      action=""
                      method="dialog"
                      noValidate
                    >
                      <div className="flex justify-center items-center p-4">
                        <p className="font-bold text-2xl">Бараа үүсгэх</p>
                      </div>
                      <div className="w-full p-4 flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <p className="text-[#121316] font-normal text-sm ">
                            Барааны нэр
                          </p>
                          <Inputs name={"tags"} placeholder={"Барааны нэр"} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="text-[#121316] font-normal text-sm">
                            Барааны ангилал
                          </p>
                          <Options name={"value"} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="text-[#121316] font-normal text-sm">
                            Үнэ
                          </p>
                          <Inputs placeholder={"Үнэ"} name={"price"} />
                        </div>
                      </div>
                      <div className="modal-action">
                        <div className="flex gap-3">
                          <button
                            className="btn"
                            onClick={() =>
                              document.getElementById("my_modal_1").close()
                            }
                          >
                            Буцах
                          </button>
                          <button
                            onClick={() =>
                              document.getElementById("my_modal_1").close()
                            }
                            className="bg-[#393939] hover:bg-black duration-400 px-4 py-2 rounded-lg"
                          >
                            <p className="font-normal text-base text-[#fff]">
                              Үүсгэх
                            </p>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </dialog>
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
          </div>
        </div>
      </main>
    </main>
  );
};
export default Main;
