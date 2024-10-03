import LoginLogo from "@/components/login/LoginLogo";

const Header = () => {
  return (
    <div className="w-full">
      <div className="container max-w-[1260px] m-auto my-8">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <LoginLogo />
            <a href="" className="text-base">
              Dashboard
            </a>
            <a href="" className="text-base">
              Records
            </a>
          </div>
          <div className="flex gap-5">
            <button className=" bg-[#0166FF] rounded-[20px] py-2 px-4 text-white text-base">
              +Records
            </button>
            <img
              src=""
              alt="profile img"
              className="w-[40px] h-[40px] rounded-full border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
