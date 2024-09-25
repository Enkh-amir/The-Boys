"use client";
import Link from "next/link";
import { ButtonBlue, Input } from "../componont";
import Icon from "../svg/Icon";

const LoginPage = () => {
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
                Welcome Back
              </p>
              <p className="font-normal text-base not-italic text-[#334155]">
                Welcome back, Please enter your details
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <Input placeholder={"Email"} />
              <Input type={"password"} placeholder={"Password"} />
              <ButtonBlue text={"Login"} />
            </div>
            <div className="flex items-center justify-center">
              <button>
                <p>Don't have account </p>
              </button>
              <Link href={"/signinpage"}>
                <button>
                  <p className="text-blue-500 px-3">Sign Up</p>
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
export default LoginPage;
