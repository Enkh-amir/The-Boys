const Header = () => {
  return (
    <main className="bg-[#F4F4F4]">
      <div className=" container m-auto">
        <div className="px-20 py-5">
          <div className="flex justify-between">
            <p className="font-extrabold text-4xl">Logo</p>
            <div className="flex gap-2">
              <div className="w-10 h-10 border bg-[#393939] rounded-[50%]"></div>
              <select
                id="hayag"
                className="font-bold text-base outline-none bg-[#F4F4F4]"
              >
                <option disabled selected hidden>
                  User name
                </option>
                <option value="Gerelt">Gerelt</option>
                <option value="Tuvshin">Tuvshin</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Header;
