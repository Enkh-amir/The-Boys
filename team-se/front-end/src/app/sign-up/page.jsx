import Link from "next/link";
import LoginLogo from "../../components/login/LoginLogo";

const SignUp = () => {
  return (
    <div className="w-full flex justify-center h-screen">
      <div className="w-[50%] flex justify-center items-center">
        <div className="w-[384px] h-[426px]">
          <div className="flex justify-center flex-col items-center">
            <div className="flex justify-center items-center gap-2 mb-11">
              <LoginLogo />
              <p className="font-bold text-[24px]">Geld</p>
            </div>
            <div className="flex flex-col items-center gap-2 mb-11">
              <h1 className="leading-8 text-[24px] font-bold">
                Create Geld account
              </h1>
              <p className="text-lg text-[#334155]">
                Sign up below to create your Wallet account
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="name"
              placeholder="Name"
              className="input w-full border bg-[#F3F4F6] rounded-lg h-[48px] pl-5"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="input w-full border bg-[#F3F4F6] rounded-lg h-[48px] pl-5"
            />
            <input
              type="password"
              placeholder="Password"
              className="input w-full border bg-[#F3F4F6] rounded-lg h-[48px] pl-5"
            />
            <input
              type="password"
              placeholder="Re-Password"
              className="input w-full border bg-[#F3F4F6] rounded-lg h-[48px] pl-5"
            />
            <button className="w-full border bg-[#0166FF] text-white rounded-2xl h-[48px] pl-5 text-[20px]">
              Sign up
            </button>
            <div className="flex justify-center gap-3 mt-8 text-base">
              <p className=" text-[#0F172A]">Already have account?</p>
              <Link href={"/"}>
                <button className="text-[#0166FF]">Log in</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-[#0166FF]"></div>
    </div>
  );
};
export default SignUp;
