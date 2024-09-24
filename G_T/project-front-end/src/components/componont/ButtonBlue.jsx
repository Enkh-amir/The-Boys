export const ButtonBlue = ({ text }) => {
  return (
    <button>
      <div className="flex justify-center items-center gap-4 rounded-[20px] bg-[#0166FF] text-[#fff] p-2 h-full ">
        <p className="text-xl not-italic font-normal">{text}</p>
      </div>
    </button>
  );
};
