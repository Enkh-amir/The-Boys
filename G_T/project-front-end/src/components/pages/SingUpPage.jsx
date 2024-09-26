"use client";

import Link from "next/link";
import { ButtonBlue, Input } from "../../components/componont";
import Icon from "../../components/svg/Icon";

const SingUpPage = () => {
  const BACKEND_ENDPOINT = "https://the-boys-euia.onrender.com/sign-up";

  const handleOnSubmit = async (event) => {
    const userData = {
      name: event.target.name.value,
      password: event.target.password.value,
      email: event.target.email.value,
    };

    console.log(userData);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(BACKEND_ENDPOINT, options);
    const data = await response.json();

    console.log(data);
  };

  return (
    <main className="">
      <div className="grid grid-cols-2 h-screen">
        <div className=" inline-flex  justify-center items-center ">
          <div className="flex flex-col justify-center items-center gap-10 ">
            <div className="flex items-center justify-center ">
              <Icon />
            </div>
            <div className="flex text-center flex-col gap-2">
              <p className="text-2xl font-bold not-italic text-[#0f172a]">
                Create Geld account
              </p>
              <p className="font-normal text-base not-italic text-[#334155]">
                Sign up below to create your Wallet account
              </p>
            </div>
            <form
              action=""
              onSubmit={handleOnSubmit}
              className="flex flex-col gap-4 w-full"
            >
              <Input placeholder={"Name"} name={"name"} />
              <Input placeholder={"Email"} name={"email"} />
              <Input
                type={"password"}
                placeholder={"Password"}
                name={"password"}
              />
              <Input
                type={"password"}
                placeholder={"Re-password"}
                name={"password"}
              />
              <ButtonBlue text={"Sign up"} />
            </form>
            <div className="flex items-center justify-center">
              <button>
                <p>Don't have account </p>
              </button>
              <Link href={"/"}>
                <button>
                  <p className="text-blue-500 px-3">Log In</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#0166FF]"></div>
      </div>
    </main>
  );
};

export default SingUpPage;
