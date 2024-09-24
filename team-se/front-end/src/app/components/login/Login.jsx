import LoginLogo from "./LoginLogo";

const Login = () => {
  return (
    <div className="w-full flex justify-center h-screen">
      <div className="w-[50%] flex justify-center items-center">
        <div className="w-[384px] h-[426px]">
          <div className="flex justify-center flex-col items-center">
            <div className="flex justify-center items-center mb-[70px]">
              <LoginLogo />
              <p className="font-bold text-[24px]">Geld</p>
            </div>
            <h1 className="leading-8 text-[24px] font-bold">Welcome Back</h1>
            <p className="text-lg">Welcome back, Please enter your details</p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              name=""
              id=""
              className="bg-gray-300 text-gray-500 border rounded-xl"
            />
            <input
              type="password"
              name=""
              id=""
              className="bg-gray-300 text-gray-500 border rounded-xl"
            />
            <button>Log in</button>
            <div className="flex justify-between">
              <p>don't have account?</p>
              <button>Sign up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-[#0166FF]"></div>
    </div>
  );
};
export default Login;
